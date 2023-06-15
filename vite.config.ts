import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import legacy from '@vitejs/plugin-legacy';
import replace from '@rollup/plugin-replace';
import type { ManifestOptions, VitePWAOptions } from 'vite-plugin-pwa';


const pwaOptions: Partial<VitePWAOptions> = {
  mode: 'development',
  base: '/',
  includeAssets: ['favicon.svg'],
  manifest: {
    name: 'PWA Router',
    short_name: 'PWA Router',
    description: 'My Awesome App description',
    theme_color: '#ffffff',
    start_url: "https://localhost:5728",
    display: "fullscreen",
    icons: [
      {
        src: 'icon-192.webp', // <== don't add slash, for testing
        sizes: '192x192',
        type: 'image/webp',
      },
      {
        src: '/icon-512.webp', // <== don't remove slash, for testing
        sizes: '512x512',
        type: 'image/webp',
      },
      {
        src: '/icon-512.webp', // <== don't add slash, for testing
        sizes: '512x512',
        type: 'image/webp',
        purpose: 'any maskable',
      },
    ],
  },
  devOptions: {
    enabled: true,
    /* when using generateSW the PWA plugin will switch to classic */
    type: 'module',
    navigateFallback: 'index.html',
  },
  workbox: {
    clientsClaim: true,
    skipWaiting: true
  },
}

const replaceOptions = { __DATE__: new Date().toISOString(), preventAssignment: true }
const claims = true;
const reload = true;
const selfDestroying = true;
const sw = true;
if (sw) {
  pwaOptions.srcDir = 'src';
  pwaOptions.filename = claims ? 'claims-sw.ts' : 'prompt-sw.ts';
  pwaOptions.strategies = 'injectManifest';
  (pwaOptions.manifest as Partial<ManifestOptions>).name = 'PWA Inject Manifest';
  (pwaOptions.manifest as Partial<ManifestOptions>).short_name = 'PWA Inject';
}

if (claims)
  pwaOptions.registerType = 'autoUpdate';

if (reload) {
  // @ts-expect-error just ignore
  replaceOptions.__RELOAD_SW__ = 'true';
}

if (selfDestroying)
  pwaOptions.selfDestroying = selfDestroying;

export default defineConfig({
  // base: process.env.BASE_URL || 'https://github.com/',
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    VitePWA(pwaOptions),
    // replace(replaceOptions),
    legacy(),
  ],
  resolve: {
    alias: {
      '@modules': path.resolve(__dirname, './src/modules'),
      '@hooks': path.resolve(__dirname, './src/shared/hooks'),
      '@models': path.resolve(__dirname, './src/shared/models'),
      '@stores': path.resolve(__dirname, './src/shared/stores'),
      '@helpers': path.resolve(__dirname, './src/shared/helpers'),
      '@services': path.resolve(__dirname, './src/shared/services'),
      '@constants': path.resolve(__dirname, './src/shared/constants'),
      '@components': path.resolve(__dirname, './src/shared/components'),
      '@infrastructure': path.resolve(__dirname, './src/infrastructure'),
      '@entities': path.resolve(__dirname, './src/infrastructure/entities')
    },
  },
})