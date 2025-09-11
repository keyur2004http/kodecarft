// src/components/SeoMeta.js
import { Helmet } from "react-helmet";

function SeoMeta({ 
  title, 
  description, 
  url, 
  image 
}) {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph (Facebook / LinkedIn / WhatsApp) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
}

export default SeoMeta;
