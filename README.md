# Houston Wholesale Double Close

Astro metro site with 30 local service pages, three guides, privacy and terms. Production is SSR on Cloudflare, reading fees from the shared WDC sheet. No analytics tags are included.

Edit local copy in src/data/cities.ts and homepage copy in src/data/metro.ts. Form logic is in src/components/DealForm.astro and the shared layout in src/layouts/Base.astro. Attribution uses page_site, page_location, page_code and page_details.

Run npm install and npm run build for production. Preview the production SSR build on Cloudflare before custom-domain launch. The custom domain is houston.wholesaledoubleclose.click.
