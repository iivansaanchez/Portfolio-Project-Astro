// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import './src/style/global.css';

// https://astro.build/config
export default defineConfig({
  integrations: [react()]
});