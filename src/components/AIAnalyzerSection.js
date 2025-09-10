import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AIAnalyzerSection.css';

const loadingMessages = [
    "Connecting to AI strategist...",
    "Analyzing market potential...",
    "Brewing up some brand names...",
    "Generating a color palette...",
    "Pairing the perfect fonts...",
    "Defining your unique voice...",
    "Crafting the perfect tagline...",
    "Estimating project budget...",
    "Finalizing your blueprint...",
];

const technologyCategories = {
    "Mobile": ["Android", "IOS", "React-Native", "Flutter", "Ionic", "Xamarin"],
    "Front-End": ["Angular", "React JS", "Vue", "Typescript", "WPF", "HTML 5"],
    "Back-End": ["Node", "Php", "ASP.Net", "Java", "Python", "laravel"],
    "Infra & DevOps": ["AWS", "Google Cloud", "Azure", "Gradle", "Jenkins", "Selenium"],
    "CMS": ["Magento", "WordPress", "Shopify", "Umbraco", "Drupal", "Joomla"]
};

const databaseOptions = [
    { name: 'MySQL', icon: '🐬' },
    { name: 'DynamoDB', icon: '💨' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Oracle', icon: '🏢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Redis', icon: '⚡️' }
];

const budgetOptions = [
    { name: '< $5,000', icon: '🌱' },
    { name: '$5,000 - $10,000', icon: '📈' },
    { name: '$10,000 - $25,000', icon: '🚀' },
    { name: '> $25,000', icon: '🪐' }
];

const toneOptions = [
    { name: 'Professional', icon: '💼' },
    { name: 'Friendly', icon: '😊' },
    { name: 'Playful', icon: '🎉' },
    { name: 'Authoritative', icon: '🏛️' }
];

const VerticalProgressBar = ({ currentStep }) => {
    const steps = ["Your Idea", "Audience & Tone", "Database & Budget", "Your Details"];
    return (
        <ol className="vertical-progress-bar">
            {steps.map((name, index) => (
                <li key={name} className={`sidebar-step ${currentStep > index + 1 ? 'completed' : ''} ${currentStep === index + 1 ? 'active' : ''}`}>
                    <div className="sidebar-step-indicator">
                        {currentStep > index + 1 ? '✓' : index + 1}
                    </div>
                    <span className="sidebar-step-name">{name}</span>
                </li>
            ))}
        </ol>
    );
};

const AIAnalyzerSection = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        idea: '',
        technologies: [],
        audience: '',
        tone: '',
        databases: [],
        budget: '',
        name: '',
        email: ''
    });
    const [analysisResult, setAnalysisResult] = useState(null);
    const [status, setStatus] = useState({ state: 'idle', message: '' });
    const [loadingMessage, setLoadingMessage] = useState(loadingMessages[0]);
    const [activeTechTab, setActiveTechTab] = useState('Mobile');

    const navigate = useNavigate();
    const totalWizardSteps = 5; // 4 form steps + 1 results step

    useEffect(() => {
        let interval;
        if (status.state === 'loading') {
            let i = 0;
            interval = setInterval(() => {
                i = (i + 1) % loadingMessages.length;
                setLoadingMessage(loadingMessages[i]);
            }, 1500);
        }
        return () => clearInterval(interval);
    }, [status.state]);

    useEffect(() => {
        if (analysisResult?.fontPairings) {
            const { heading, body } = analysisResult.fontPairings;
            // Construct a single Google Fonts URL to minimize requests
            const headingFont = heading.fontName.replace(/ /g, '+');
            const bodyFont = body.fontName.replace(/ /g, '+');
            const fontUrl = `https://fonts.googleapis.com/css2?family=${headingFont}:wght@400;700&family=${bodyFont}:wght@400;700&display=swap`;

            const linkId = 'google-fonts-dynamic-link';
            let link = document.getElementById(linkId);
            if (!link) {
                link = document.createElement('link');
                link.id = linkId;
                link.rel = 'stylesheet';
                document.head.appendChild(link);
            }
            link.href = fontUrl;
        }
    }, [analysisResult]);

    const nextStep = () => setStep(prev => Math.min(prev + 1, totalWizardSteps));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleTechChange = (tech) => {
        setFormData(prev => {
            const newTechs = prev.technologies.includes(tech)
                ? prev.technologies.filter(t => t !== tech)
                : [...prev.technologies, tech];
            return { ...prev, technologies: newTechs };
        });
    };
    
    const handleDatabaseSelect = (db) => {
        setFormData(prev => {
            const newDbs = prev.databases.includes(db)
                ? prev.databases.filter(d => d !== db)
                : [...prev.databases, db];
            return { ...prev, databases: newDbs };
        });
    };

    const handleAnalyze = async (e) => {
        e.preventDefault();
        setStatus({ state: 'loading', message: '' });
        setStep(totalWizardSteps);

        try {
            const response = await fetch('/api/analyze-idea', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || 'Failed to get analysis.');
            setAnalysisResult(result);
            setStatus({ state: 'success', message: '' });
        } catch (error) {
            setStatus({ state: 'error', message: error.message });
        }
    };
    
    const handleGetQuote = () => {
        const message = `
        AI Idea Analysis Results:
        --------------------------
        Project Idea: ${formData.idea}
        Target Audience: ${formData.audience}
        Desired Tone: ${formData.tone}
        Selected Technologies: ${formData.technologies.join(', ')}
        Selected Databases: ${formData.databases.join(', ')}
        Approximate Budget: ${formData.budget}
        
        AI Suggestions:
        - Suggested Names: ${analysisResult.projectNames.join(', ')}
        - Brand Voice: ${analysisResult.brandVoice}
        - Tagline: ${analysisResult.tagline}
        - Next Steps: ${analysisResult.nextSteps.join('; ')}
        - Estimated Budget: ${analysisResult.estimatedBudget.value} (${analysisResult.estimatedBudget.justification})
        - Color Palette: Primary-${analysisResult.colorPalette.primary}, Secondary-${analysisResult.colorPalette.secondary}
        - Font Pairing: Heading-${analysisResult.fontPairings.heading.fontName}, Body-${analysisResult.fontPairings.body.fontName}
        `;
        
        navigate('/contact', { state: {
            name: formData.name, email: formData.email, service: "AI Idea Analysis & Branding", message: message.trim(),
        }});
    };

    const renderContent = () => {
        if (step < totalWizardSteps) {
            return (
                <form onSubmit={step === 4 ? handleAnalyze : (e) => { e.preventDefault(); nextStep(); }} style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                    {renderStepContent()}
                    <div className="analyzer-nav-pro">
                        <button type="button" className="btn-secondary" onClick={prevStep} disabled={step === 1}>
                            Previous
                        </button>
                        <button type="submit" className="btn-primary" disabled={isNextDisabled()}>
                            {step === 4 ? 'Analyze My Idea' : 'Next Step'}
                        </button>
                    </div>
                </form>
            );
        }

        if (status.state === 'loading') {
            return (
                <div className="loading-view-pro">
                    <div className="spinner"></div>
                    <h2>Crafting Your Blueprint...</h2>
                    <p className="loading-message">{loadingMessage}</p>
                </div>
            );
        }
        if (status.state === 'error') {
            return (
                <div className="results-view-pro">
                    <h2>Analysis Failed</h2>
                    <div className="form-feedback-analyzer error">{status.message}</div>
                    <div className="analyzer-nav-pro">
                         <button type="button" className="btn-secondary" onClick={() => { setStatus({ state: 'idle', message: ''}); setStep(4); }}>Back</button>
                    </div>
                </div>
            );
        }
        if (status.state === 'success' && analysisResult) {
            const { colorPalette, fontPairings } = analysisResult;
            return (
                <div className="results-view-pro">
                    <h2 className="blueprint-title">Your AI-Generated Brand Blueprint</h2>
                    <div className="result-grid">
                        <div className="result-card tagline-card">
                            <h3><span role="img" aria-label="megaphone">📣</span> Your Tagline</h3>
                            <p>"{analysisResult.tagline}"</p>
                        </div>
                        <div className="result-card names-card">
                             <h3><span role="img" aria-label="lightbulb">💡</span> Suggested Names</h3>
                            <div className="names-grid">
                                {analysisResult.projectNames.map(name => <span key={name} className="result-name-tag">{name}</span>)}
                            </div>
                        </div>
                        <div className="result-card budget-card">
                            <h3><span role="img" aria-label="money">💰</span> Estimated Budget</h3>
                            <p className="budget-value">{analysisResult.estimatedBudget.value}</p>
                            <p className="budget-justification">{analysisResult.estimatedBudget.justification}</p>
                        </div>

                        <div className="result-card colors-card">
                            <h3><span role="img" aria-label="palette">🎨</span> Color Palette</h3>
                            <div className="color-swatch-wrapper">
                                {Object.entries(colorPalette).map(([name, hex]) => (
                                    <div key={name} className="color-swatch">
                                        <div className="color-circle" style={{ backgroundColor: hex }}></div>
                                        <div className="color-info">
                                            <span className="color-name">{name.charAt(0).toUpperCase() + name.slice(1)}</span>
                                            <span className="color-hex">{hex}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="result-card fonts-card">
                             <h3><span role="img" aria-label="text">🔠</span> Font Pairings</h3>
                             <div className="font-sample">
                                 <h4 className="font-sample-heading" style={{ fontFamily: `'${fontPairings.heading.fontName}', sans-serif` }}>
                                     Heading Sample
                                 </h4>
                                 <p className="font-sample-meta">{fontPairings.heading.fontName}</p>
                             </div>
                             <div className="font-sample">
                                 <p style={{ fontFamily: `'${fontPairings.body.fontName}', sans-serif` }}>
                                     This is a sample of the body text. It's designed to be clear, legible, and complementary to the heading font.
                                 </p>
                                 <p className="font-sample-meta">{fontPairings.body.fontName}</p>
                             </div>
                        </div>

                        <div className="result-card voice-card">
                            <h3><span role="img" aria-label="microphone">🎤</span> Brand Voice</h3>
                            <p>{analysisResult.brandVoice}</p>
                        </div>
                        <div className="result-card steps-card">
                            <h3><span role="img" aria-label="rocket">🚀</span> Actionable Next Steps</h3>
                            <ul>
                                {analysisResult.nextSteps.map(step => <li key={step}>{step}</li>)}
                            </ul>
                        </div>
                        <div className="results-cta">
                            <button onClick={() => window.print()} className="btn-secondary">Print / Save as PDF</button>
                            <button onClick={handleGetQuote} className="btn-primary">Book Your Free Consultation</button>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <div className="analyzer-step-pro">
                        <h2>What's your big idea?</h2>
                        <p className="step-description">Describe your project or business concept and select the technologies you prefer.</p>
                        <div className="analyzer-form-group-pro">
                            <label htmlFor="idea">Your Idea</label>
                            <textarea id="idea" name="idea" value={formData.idea} onChange={handleChange} required placeholder="e.g., A subscription box service for rare, indoor plants..."></textarea>
                        </div>
                         <div className="analyzer-form-group-pro">
                            <label>Preferred Technologies</label>
                            <div className="tech-tabs">
                                <nav className="tech-tabs-nav">
                                    {Object.keys(technologyCategories).map(category => (
                                        <button
                                            type="button"
                                            key={category}
                                            className={`tech-tab-button ${activeTechTab === category ? 'active' : ''}`}
                                            onClick={() => setActiveTechTab(category)}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </nav>
                                <div className="tech-tab-panel">
                                    <div className="tech-options-pro">
                                        {technologyCategories[activeTechTab].map(tech => (
                                            <div key={tech} className="tech-checkbox">
                                                <input type="checkbox" id={`tech-${tech}`} name={tech} checked={formData.technologies.includes(tech)} onChange={() => handleTechChange(tech)} />
                                                <label htmlFor={`tech-${tech}`}>{tech}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="analyzer-step-pro">
                        <h2>Who are you trying to reach?</h2>
                        <p className="step-description">Define your target audience and the brand personality you're aiming for.</p>
                         <div className="analyzer-form-group-pro">
                            <label htmlFor="audience">Target Audience</label>
                            <input type="text" id="audience" name="audience" value={formData.audience} onChange={handleChange} required placeholder="e.g., Millennials, eco-conscious consumers" />
                        </div>
                        <div className="analyzer-form-group-pro">
                            <label>Desired Brand Tone</label>
                            <div className="tone-options-pro">
                                {toneOptions.map(opt => (
                                    <div key={opt.name} className={`tone-card-pro ${formData.tone === opt.name ? 'selected' : ''}`} onClick={() => setFormData(p => ({...p, tone: opt.name}))}>
                                        <div className="tone-card-icon">{opt.icon}</div>
                                        <h3 className="tone-card-title">{opt.name}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 3:
                 return (
                    <div className="analyzer-step-pro">
                        <h2>Database & Budget</h2>
                        <p className="step-description">Select your preferred database and approximate budget to help the AI provide a more realistic analysis.</p>
                        <div className="analyzer-form-group-pro">
                            <label>Preferred Databases</label>
                             <div className="database-options-pro">
                                {databaseOptions.map(opt => (
                                    <div key={opt.name} className={`database-card-pro ${formData.databases.includes(opt.name) ? 'selected' : ''}`} onClick={() => handleDatabaseSelect(opt.name)}>
                                        <div className="database-card-icon">{opt.icon}</div>
                                        <h3 className="database-card-title">{opt.name}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="analyzer-form-group-pro">
                            <label>Approximate Budget Range</label>
                            <div className="budget-options-pro">
                                {budgetOptions.map(opt => (
                                    <div key={opt.name} className={`budget-card-pro ${formData.budget === opt.name ? 'selected' : ''}`} onClick={() => setFormData(p => ({...p, budget: opt.name}))}>
                                        <div className="budget-card-icon">{opt.icon}</div>
                                        <h3 className="budget-card-title">{opt.name}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 4:
                return (
                   <div className="analyzer-step-pro">
                       <h2>Let's connect.</h2>
                       <p className="step-description">Provide your details to see your results and get a copy for your records.</p>
                       <div className="analyzer-form-group-pro">
                           <label htmlFor="name">Full Name</label>
                           <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                       </div>
                       <div className="analyzer-form-group-pro">
                           <label htmlFor="email">Email Address</label>
                           <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                       </div>
                   </div>
               );
            default: return null;
        }
    };
    
    const isNextDisabled = () => {
        if (step === 1 && (!formData.idea || formData.technologies.length === 0)) return true;
        if (step === 2 && (!formData.audience || !formData.tone)) return true;
        if (step === 3 && (formData.databases.length === 0 || !formData.budget)) return true;
        if (step === 4 && (!formData.name || !formData.email)) return true;
        return false;
    }

    return (
        <div className="idea-analyzer-wrapper-pro">
            <div className="analyzer-container-pro">
                <aside className="analyzer-sidebar">
                    <div className="sidebar-header">
                        AI Brand Starter
                    </div>
                    <VerticalProgressBar currentStep={step} />
                    <div className="sidebar-footer">
                        Powered by Gemini AI
                    </div>
                </aside>
                <main className="analyzer-main-content">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default AIAnalyzerSection;