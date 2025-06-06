export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Punch AI",
    applicationCategory: "SportsApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
    },
    description:
      "AI-powered boxing video analysis platform that provides detailed performance scores for power, defense, accuracy, ring generalship, fight IQ, and footwork to help boxers improve their skills.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "89",
    },
    featureList: [
      "Power Score Analysis",
      "Defense Score Tracking",
      "Accuracy Assessment",
      "Ring Generalship Evaluation",
      "Fight IQ Analysis",
      "Footwork Scoring",
      "Winner Determination",
      "Performance Insights",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
