import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'WaliaTaxi'
const SITE_URL = 'https://waliataxi.com'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

export default function SEOHead({
  title,           // Page title (without site suffix)
  description,     // 140-160 chars
  path = '/',      // URL path e.g. '/services/airport-transfer'
  ogImage,         // Optional OG image override
  noindex = false, // true for thank-you pages, admin pages
  schema,          // Optional JSON-LD schema object
}) {
  const fullTitle = `${title} | ${SITE_NAME}`
  const canonicalUrl = `${SITE_URL}${path}`
  const ogImg = ogImage || DEFAULT_OG_IMAGE

  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph (Facebook, LinkedIn, WhatsApp previews) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImg} />

      {/* Schema Markup (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}
