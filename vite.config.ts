import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ecoluz/',
  resolve: {
    alias: {
      'tailwind.config.js': path.resolve(__dirname, 'tailwind.config.js'),
    }
  },
  optimizeDeps: {
    include: [
      'tailwind.config.js',
    ]
  },
  plugins: [
    react(),
    VitePWA({
      mode: 'development',
      base: '/ecoluz/',
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'EcoLuz',
        short_name: 'EcoLuz',
        theme_color: '#1e4741',
        icons: [
          {
            src: 'pwa-192x192.png', // <== don't add slash, for testing
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png', // <== don't remove slash, for testing
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png', // <== don't add slash, for testing
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    })
  ]
})
