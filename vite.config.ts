import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  }
})
