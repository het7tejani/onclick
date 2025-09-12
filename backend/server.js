require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const { GoogleGenAI, Type } = require('@google/genai');
const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;

// ===== Middleware =====
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===== Database Connection =====
const dbURI = process.env.MONGODB_URI;
if (!dbURI) {
  console.error('❌ Error: MONGODB_URI is not defined in .env');
  process.exit(1);
}

mongoose.connect(dbURI)
  .then(() => console.log('✅ MongoDB connected successfully.'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

// ===== Gemini AI Setup =====
let ai = null;
if (process.env.API_KEY) {
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  console.log('✅ Gemini AI initialized.');
} else {
  console.error('❌ Error: API_KEY is missing in .env');
}

// ===== Routes =====

// @route   POST /api/contact
// @desc    Create a contact form submission
// @access  Public
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  if (!name || !email || !phone || !service || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const newContact = new Contact({ name, email, phone, service, message });
    await newContact.save();
    res.status(201).json({ message: 'Your message has been received! We will get back to you shortly.' });
  } catch (error) {
    console.error('❌ Error saving contact form data:', error);
    res.status(500).json({ error: 'An error occurred while submitting the form. Please try again.' });
  }
});

// @route   POST /api/analyze-idea
// @desc    Analyze a business idea using Gemini AI
// @access  Public
app.post('/api/analyze-idea', async (req, res) => {
  if (!ai) {
    return res.status(500).json({ error: 'AI service is not initialized. Check API Key.' });
  }

  const { idea, audience, tone, technologies, budget, databases } = req.body;
  if (!idea || !audience || !tone || !technologies || !budget || !databases) {
    return res.status(400).json({ error: 'Idea, audience, tone, technologies, databases, and budget are required fields.' });
  }

  try {
     const schema = {
      type: Type.OBJECT,
      properties: {
        projectNames: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Three creative and relevant names for the project." },
        brandVoice: { type: Type.STRING, description: "A short paragraph describing the brand's personality and tone." },
        tagline: { type: Type.STRING, description: "A catchy, memorable tagline for the business." },
        nextSteps: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Three actionable next steps for the user to take to build an MVP." },
        estimatedBudget: {
          type: Type.OBJECT,
          description: "An estimated budget for the project's Minimum Viable Product (MVP).",
          properties: {
            value: { type: Type.STRING, description: "A realistic budget range for an MVP, e.g., '$8,000 - $12,000'." },
            justification: { type: Type.STRING, description: "A brief justification for the estimated budget, explaining what it covers for an MVP (e.g., core features, basic design, initial deployment)." }
          }
        },
        colorPalette: {
          type: Type.OBJECT,
          description: "A color palette with primary, secondary, accent, and neutral colors.",
          properties: {
            primary: { type: Type.STRING, description: "Primary color hex code (e.g., #FFFFFF)." },
            secondary: { type: Type.STRING, description: "Secondary color hex code." },
            accent: { type: Type.STRING, description: "Accent color hex code." },
            neutral: { type: Type.STRING, description: "Neutral color hex code." },
          }
        },
        fontPairings: {
          type: Type.OBJECT,
          description: "A font pairing suggestion from Google Fonts.",
          properties: {
            heading: { 
              type: Type.OBJECT,
              properties: {
                fontName: { type: Type.STRING, description: "The name of the heading font (e.g., 'Montserrat')." },
                importUrl: { type: Type.STRING, description: "The full CSS @import URL from Google Fonts for this font." }
              }
            },
            body: {
              type: Type.OBJECT,
              properties: {
                fontName: { type: Type.STRING, description: "The name of the body font (e.g., 'Lato')." },
                importUrl: { type: Type.STRING, description: "The full CSS @import URL from Google Fonts for this font." }
              }
            }
          }
        }
      },
      required: ["projectNames", "brandVoice", "tagline", "nextSteps", "estimatedBudget", "colorPalette", "fontPairings"]
    };

    const prompt = `
      Analyze the following business idea and generate a complete brand identity blueprint for a Minimum Viable Product (MVP).

      Business Idea: "${idea}"
      Target Audience: "${audience}"
      Desired Tone: "${tone}"
      Preferred Technologies: "${technologies.join(', ')}"
      Preferred Databases: "${databases.join(', ')}"
      User's Approximate Budget: "${budget}"

      Based on this information, provide:
      1. Three creative project names.
      2. A brand voice description.
      3. A catchy tagline.
      4. Three actionable next steps to build an MVP.
      5. A realistic estimated budget for an MVP. Your estimate should be heavily influenced by the user's provided budget and framed as a starting point. Provide a brief justification explaining what this budget would typically cover for an MVP (e.g., core features, design, initial deployment).
      6. A color palette with primary, secondary, accent, and neutral hex codes.
      7. A font pairing. The fonts must be from Google Fonts. For each font (heading and body), provide its name and the full CSS @import URL.

      Return the result in the specified JSON format.
    `;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: schema
        }
    });

    const text = response.text;
    console.log("🔎 Gemini raw output:", text);

    let analysis;
    try {
      analysis = JSON.parse(text);
    } catch (err) {
      console.error("❌ Failed to parse Gemini response:", err.message);
      return res.status(500).json({ error: "AI did not return valid JSON.", raw: text });
    }

    res.status(200).json(analysis);

  } catch (error) {
    console.error('❌ Error calling Gemini API:', error);
    res.status(500).json({ error: 'An error occurred while analyzing the idea. Please try again.' });
  }
});


// ===== Start Server =====
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});