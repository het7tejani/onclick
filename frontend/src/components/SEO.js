import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name = "Onclick Infotech", type = "website", image, url }) => {
  const fullTitle = `${title} | Onclick Infotech`;
  const siteUrl = "https://www.onclickinfotech.com";
  const canonicalUrl = url ? `${siteUrl}${url}` : siteUrl;
  const imageUrl = image ? `${siteUrl}${image}` : `${siteUrl}/logo512.png`; // Default image in public folder

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SEO;