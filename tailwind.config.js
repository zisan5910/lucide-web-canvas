import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'UniConverter',
        short_name: 'UniConverter',
        description: 'Universal Unit Converter',
        theme_color: '#000000',
        icons: [
          {
            src: 'https://i.postimg.cc/wMPW5PVM/20250717-004001-0000.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://i.postimg.cc/wMPW5PVM/20250717-004001-0000.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
