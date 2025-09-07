// SEO utility functions for meta tags and JSON-LD

export function updatePageTitle(title) {
  document.title = title;
}

export function updateMetaDescription(description) {
  let metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  } else {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', description);
    document.head.appendChild(metaDescription);
  }
}

export function updateOpenGraphTags({ title, description, image, url }) {
  // og:title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title);
  } else {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', title);
    document.head.appendChild(ogTitle);
  }

  // og:description
  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', description);
  } else {
    ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', description);
    document.head.appendChild(ogDescription);
  }

  // og:image
  let ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) {
    ogImage.setAttribute('content', image);
  } else {
    ogImage = document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', image);
    document.head.appendChild(ogImage);
  }

  // og:url
  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute('content', url);
  } else {
    ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', url);
    document.head.appendChild(ogUrl);
  }

  // og:type
  let ogType = document.querySelector('meta[property="og:type"]');
  if (ogType) {
    ogType.setAttribute('content', 'article');
  } else {
    ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'article');
    document.head.appendChild(ogType);
  }
}

export function addJsonLdArticle(article) {
  // Remove existing JSON-LD if any
  const existingJsonLd = document.querySelector('script[type="application/ld+json"]');
  if (existingJsonLd) {
    existingJsonLd.remove();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.cover,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Organization",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kaysia Agency",
      "logo": {
        "@type": "ImageObject",
        "url": window.location.origin + "/Logo.png"
      }
    },
    "articleSection": article.category,
    "keywords": article.tags.join(", "),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    }
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

export function generateShareUrl(platform, url, title) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  
  switch (platform) {
    case 'whatsapp':
      return `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
    case 'twitter':
      return `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    default:
      return url;
  }
}

// Comprehensive SEO function
export function setSEO({ title, description, image, type = 'website', jsonLd }) {
  // Update page title
  updatePageTitle(title);
  
  // Update meta description
  updateMetaDescription(description);
  
  // Update OpenGraph tags
  updateOpenGraphTags({ 
    title, 
    description, 
    image, 
    url: window.location.href 
  });
  
  // Update og:type
  let ogType = document.querySelector('meta[property="og:type"]');
  if (ogType) {
    ogType.setAttribute('content', type);
  } else {
    ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', type);
    document.head.appendChild(ogType);
  }
  
  // Add JSON-LD if provided
  if (jsonLd) {
    addJsonLdArticle(jsonLd);
  }
}
