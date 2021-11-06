import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ecoluz/',
  plugins: [
    react(),
    VitePWA({
      mode: 'development',
      base: '/ecoluz/',
      includeAssets: ['assets/favicon.png'],
      manifest: {
        name: 'EcoLuz',
        short_name: 'EcoLuz',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'assets/pwa-192x192.png', // <== don't add slash, for testing
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/assets/pwa-512x512.png', // <== don't remove slash, for testing
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'assets/pwa-512x512.png', // <== don't add slash, for testing
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    })
  ]
})
