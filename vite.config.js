import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    // Raise chunk warning limit slightly
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Split vendor code into separate cacheable chunks
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion': ['framer-motion'],
          'icons': ['react-icons'],
          'phone-input': ['react-phone-input-2'],
          'emailjs': ['emailjs-com'],
        },
      },
    },

    // Minify CSS and JS
    cssMinify: true,
    minify: 'esbuild',

    // Generate source maps only in dev
    sourcemap: false,
  },

  // Faster dev server
  server: {
    hmr: true,
  },
})




// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss(),],
// })
