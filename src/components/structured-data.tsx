import Script from "next/script";

export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Brandon Garcia Ramos",
    url: "https://brangarciaramos.com",
    sameAs: [],
    jobTitle: "Software Engineer",
  };

  return (
    <Script id="person-structured-data" type="application/ld+json">
      {JSON.stringify(personSchema)}
    </Script>
  );
}
