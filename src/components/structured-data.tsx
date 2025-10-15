export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Brandon García Ramos",
    url: "https://brangarciaramos.com",
    sameAs: [
      "https://github.com/brangarciaramos",
      "https://linkedin.com/in/brangarciaramos",
    ],
    jobTitle: "Entrepreneur & Software Developer",
    description:
      "Entrepreneur and software developer building innovative digital solutions",
    worksFor: [
      {
        "@type": "Organization",
        name: "imSoft",
        url: "https://imsoft.io",
      },
      {
        "@type": "Organization",
        name: "Holistia",
        url: "https://holistia.io",
      },
      {
        "@type": "Organization",
        name: "Cursumi",
        url: "https://cursumi.com",
      },
      {
        "@type": "Organization",
        name: "Omnitria",
        url: "https://omnitria.com",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

