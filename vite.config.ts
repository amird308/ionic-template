import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import legacy from '@vitejs/plugin-legacy';
import type { VitePWAOptions } from 'vite-plugin-pwa';


const pwaOptions: Partial<VitePWAOptions> = {
  mode: 'development', 
  registerType: "autoUpdate",
  devOptions: {
    enabled: true
  },
  base: '/',
  includeAssets: ['favicon.svg'],
  manifest: {
    name: 'ionic template',
    short_name: 'ionic template',
    description: 'My Awesome App description',
    theme_color: '#ffffff',
    display: "fullscreen",
    icons: [
      {
        "src": "/icons/icon-48x48.png",
        "sizes": "48x48",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icons/icon-72x72.png",
        "sizes": "72x72",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icons/icon-96x96.png",
        "sizes": "96x96",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icons/icon-128x128.png",
        "sizes": "128x128",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icons/icon-144x144.png",
        "sizes": "144x144",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icons/icon-152x152.png",
        "sizes": "152x152",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icons/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icons/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "/icons/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable any"
      }
    ],
  },
}

export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    VitePWA(pwaOptions),
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