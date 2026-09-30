import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
const preview = process.env.PREVIEW === '1';
export default defineConfig({site:'https://houston.wholesaledoubleclose.click', output:preview?'static':'server',adapter:preview?undefined:cloudflare(),trailingSlash:'always',build:{format:'directory'}});
