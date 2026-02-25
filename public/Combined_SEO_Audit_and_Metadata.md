# Combined SEO Audit & Metadata Analysis

**Source files:** fileciteturn0file0 fileciteturn0file1

---

## Executive Summary
This document combines a practical, technical SEO audit and a focused metadata analysis for a local service (Walia Taxi). It prioritizes immediate technical fixes, on-page and content improvements, schema recommendations, and high-impact quick wins. The goal: recover and grow organic visibility through technical stability, content intent alignment, and authoritative signals.

---

## Key Findings (Top Issues)
- **Core Web Vitals failures** (LCP, CLS, INP) — impact on rankings and UX.
- **Crawlability / canonical issues** — robots/sitemap problems, soft-404s, canonical loops.
- **Thin or duplicate content & weak internal linking** — orphan pages, low topical depth.
- **Missing or incomplete structured data** on key page types (Product, Article, Organization).
- **Suboptimal metadata** for local pages (excessive length, keyword stuffing) — example present in Walia Taxi metadata.
- **Backlink gaps and potential toxic links** — authority deficit vs competitors.
- **Mobile usability and HTTPS/mixed-content issues**.
- **Conversion and engagement risks**: mismatched snippet vs landing page, slow hero, poor CTA placement.

---

## How to Run Live Diagnostics (Immediate Commands & Tools)
- Crawl: `curl -I https://yourdomain.com` and run Screaming Frog / Sitebulb (export canonicals, duplicates, redirects).
- Lighthouse / PSI: `lighthouse https://yourdomain.com --output=json --output-path=report.json` and PageSpeed Insights on 4 representative pages (home, category, product, article).
- Mobile test: Google Mobile-Friendly Test or Lighthouse mobile audit.
- Backlinks: export referring domains and anchors from Ahrefs / Semrush / Majestic.
- GSC + GA4: gather 90 days of data (coverage, performance, pages with impressions vs clicks).
- Check `https://yourdomain.com/robots.txt` and `https://yourdomain.com/sitemap.xml` manually.

---

## Technical SEO — Concrete Fixes (Copy‑ready)
### Robots.txt & Sitemap
```
User-agent: *
Allow: /
Disallow: /private/
Sitemap: https://yourdomain.com/sitemap.xml
```

### Canonical tag (per page)
```html
<link rel="canonical" href="https://yourdomain.com/canonical-page" />
```

### Core Web Vitals fixes (exact)
- Reserve image width/height attributes and use responsive `srcset`.
- Preload hero image and critical fonts:
```html
<link rel="preload" as="image" href="/media/hero.jpg">
<link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossorigin>
```
- `font-display: swap` for custom fonts.
- Defer non-critical JS; inline critical CSS.
- Use CDN, enable Brotli/Gzip, set cache headers, fix high TTFB via server caching (Nginx fastcgi_cache or Varnish).

### HTTPS & Security headers (Nginx)
```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload";
add_header X-Content-Type-Options nosniff;
```

---

## On‑Page SEO — Templates & Examples
### Title / Meta templates
- Homepage: `Primary Keyword – Secondary Keyword | Brand`
- Product: `Product Name — Key Benefit | Brand`
- Meta description: 120–155 characters; include CTA at end.

### Header hierarchy
- Single `<h1>` per page. Use `<h2>` for major sections, `<h3>` for subsections.

### Image optimization example
```html
<img src="hero-1200.webp"
     srcset="hero-480.webp 480w, hero-800.webp 800w, hero-1200.webp 1200w"
     width="1200"
     height="630"
     loading="lazy"
     alt="750ml stainless steel insulated water bottle in black">
```

### Internal linking
- From top-performing pages link to priority conversion pages with natural anchors (3–7 links per page).

---

## Content Quality & E‑E‑A‑T
- Align content strictly to search intent (transactional pages with price/CTA; informational with depth and citations).
- Build pillar + cluster model: 1 pillar → 8–12 cluster posts; internal linking from clusters to pillar.
- Author bios, credentials, and published/updated dates for YMYL content.
- Keyword gap analysis: extract competitor keyword sets and prioritize low-difficulty, high-intent long-tail keywords first.
- Thin-content remediation: merge or expand pages <300 words; add case studies or detailed examples.

---

## Off‑Page SEO — Audit & Strategy
- Export referring domains, filter by DR/authority, identify toxic links for removal/disavow.
- Anchor mix target: Branded 40–60%, Generic 20–30%, Exact-match 10–20%.
- Link acquisition channels: resource pages (unlinked mentions), guest posts, data-driven studies to attract editorial links.
- Competitive link gap: identify 20–30 domains linking to top competitors and create outreach campaigns for priority ones.

---

## UX & Engagement Recommendations
- Reduce bounce risk: match meta snippet to landing content, shorten hero, add benefit-driven copy above fold.
- CTA placement: one above-the-fold CTA + contextual mid-page CTA. Use descriptive microcopy (`Buy now — Free shipping`).
- Readability: short paragraphs, bullet lists, Flesch target ~60–70 for general audiences.
- Accessibility: skip links, keyboard navigation, alt text for images.

---

## Schema Recommendations (JSON‑LD snippets)
### Organization
```json
{
  "@context":"https://schema.org",
  "@type":"Organization",
  "name":"BrandName",
  "url":"https://yourdomain.com",
  "logo":"https://yourdomain.com/logo.png"
}
```

### Article
```json
{
  "@context":"https://schema.org",
  "@type":"Article",
  "headline":"Exact article title",
  "image":["https://yourdomain.com/image.jpg"],
  "author":{"@type":"Person","name":"Author Name"},
  "publisher":{"@type":"Organization","name":"BrandName","logo":{"@type":"ImageObject","url":"https://yourdomain.com/logo.png"}},
  "datePublished":"2025-02-01",
  "dateModified":"2025-02-14"
}
```

### Product
```json
{
  "@context":"https://schema.org",
  "@type":"Product",
  "name":"Product Name",
  "image":"https://yourdomain.com/product.jpg",
  "description":"Short product description",
  "sku":"SKU12345",
  "brand":{"@type":"Brand","name":"BrandName"},
  "offers":{"@type":"Offer","url":"https://yourdomain.com/product","priceCurrency":"INR","price":"999","availability":"https://schema.org/InStock"}
}
```

---

## Priority Roadmap (High / Medium / Low)

**High (Impact, Moderate Difficulty)**
- Fix Core Web Vitals (preload assets, reserve image sizes, defer JS). — ROI: High
- Resolve robots/sitemap/crawl/canonical errors. — ROI: High
- Consolidate thin content and improve internal linking. — ROI: High

**Medium (Impact, Low Difficulty)**
- Unique titles/meta descriptions for top 50 pages.
- Implement Article/Product JSON‑LD for top pages.
- Improve internal linking from top-performing pages to conversion pages.

**Low (Long‑Term, High Difficulty)**
- Build pillar-cluster content at scale.
- Authority link acquisition via data-driven content and PR.
- Automated Lighthouse testing in CI with alerting.

---

## Quick Wins (Action This Week)
1. Fix robots.txt and submit sitemap in GSC.
2. Unique titles & metas for top 50 high-potential pages.
3. Add width/height to hero images + preload.
4. Implement `font-display: swap` + preload critical fonts.
5. Add Product/Article schema to top 10 pages.
6. Canonicalize duplicate content identified in crawl export.

---

## Monitoring & KPIs (Weekly)
- Organic sessions (GA4)
- Impressions & clicks (GSC)
- Core Web Vitals (CrUX + Lighthouse)
- Number of referring domains (Ahrefs)
- Top 50 keyword position distribution

---

## Specific Page-Level Metadata Example (Local Service: Walia Taxi — Jalandhar)
_Source analysis excerpt merged from the metadata review._ fileciteturn0file1

**Current issues found:** meta title >60 chars, meta description >160 chars, keyword stuffing with many towns, redundant CTAs, potential truncation on SERP.

**Optimized Title (≤60 chars)**
```
Walia Taxi — One-Way Cabs in Jalandhar, Punjab
```

**Optimized Meta Description (~150 chars)**
```
Affordable, safe & on-time one-way taxi service in Jalandhar. Delhi airport transfers. Call now to book: +91-XXXXXXXXXX
```

**Rationale**
- Keeps core keywords (brand, service, city) within length limits.
- Moves CTA to the end, avoids duplication across title & description.
- Replaces long list of towns with a concise geographic signal to avoid stuffing.

---

## Technical Implementation Snippets (Copy‑ready)
**Nginx gzip & cache rules**
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
gzip_vary on;

location ~* \\.(?:png|jpg|jpeg|gif|ico|svg|webp)$ {
  expires 30d;
  add_header Cache-Control "public, max-age=2592000, immutable";
}
```

**301 Redirect non-www to www**
```nginx
server {
  listen 80;
  server_name example.com;
  return 301 https://www.example.com$request_uri;
}
```

**Canonical tag in HTML head**
```html
<link rel="canonical" href="https://yourdomain.com/current-page/" />
```

---

## Competitor Benchmarking (How to run)
1. Identify top SERP competitors for target keywords via Ahrefs/SEMrush.
2. Export competitor top pages, referring domains, and top keywords.
3. Benchmark: referring domains gap, median word count of top-10 pages, page speed differences.
4. If competitor has numerous quality links and you have none, prioritize link acquisition + content depth over minor on-page tweaks.

---

## Long-Term Growth Plan (6–12 months)
1. Pillar + cluster content framework: 6 pillar pages + 36 clusters over 6 months.
2. High-value linkable assets (original research, industry surveys).
3. Automated performance monitoring: Lighthouse in CI, Slack alerts for regressions.
4. Local SEO: LocalBusiness schema, GMB optimization, citation cleanup.

---

## Appendix & Source Files
- Full technical audit export and detailed report: fileciteturn0file0
- Walia Taxi metadata analysis: fileciteturn0file1

---

*End of combined audit.*
