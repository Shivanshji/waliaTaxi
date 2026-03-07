export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "WaliaTaxi",
    "image": "https://waliataxi.com/logo.png",
    "url": "https://waliataxi.com",
    "telephone": "+91-98722-00267",
    "priceRange": "$$",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jalandhar - Adampur Rd",
        "addressLocality": "Jalandhar",
        "addressRegion": "Punjab",
        "postalCode": "144001",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "31.3260",
        "longitude": "75.5762"
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
    },
    "areaServed": [
        { "@type": "City", "name": "Jalandhar" },
        { "@type": "City", "name": "Ludhiana" },
        { "@type": "City", "name": "Amritsar" },
        { "@type": "City", "name": "Chandigarh" },
        { "@type": "City", "name": "Hoshiarpur" },
        { "@type": "City", "name": "Phagwara" },
        { "@type": "City", "name": "Adampur" },
        { "@type": "City", "name": "Dasuya" },
        { "@type": "City", "name": "Tanda" },
        { "@type": "City", "name": "Mukerian" },
        { "@type": "City", "name": "Nakodar" },
        { "@type": "City", "name": "Phillaur" },
        { "@type": "City", "name": "Shahkot" },
        { "@type": "City", "name": "Bhogpur" },
        { "@type": "City", "name": "Kartarpur" },
        { "@type": "City", "name": "Goraya" },
        { "@type": "City", "name": "Nurmahal" },
        { "@type": "City", "name": "Jagraon" },
        { "@type": "City", "name": "Sirhind" },
        { "@type": "City", "name": "Mohali" },
        { "@type": "City", "name": "Zirakpur" },
        { "@type": "City", "name": "Kharar" },
        { "@type": "City", "name": "Delhi" }
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Taxi Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Local Taxi Service",
                    "description": "Affordable local cab hire within the city"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Airport Transfer",
                    "description": "Punctual airport pickup and drop-off service"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Outstation Cab",
                    "description": "Comfortable outstation journeys to nearby cities"
                }
            }
        ]
    }
}

export const FAQSchema = (faqs) => ({
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
        }
    }))
})
