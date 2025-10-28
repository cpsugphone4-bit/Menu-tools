// vite.config.js

import { defineConfig } from 'vite';

export default defineConfig({
  // Base path untuk Vercel (opsional, tapi disarankan untuk statik)
  base: './', 
  
  // Konfigurasi untuk proses build
  build: {
    // Menghasilkan output di folder 'dist' (default Vite)
    outDir: 'dist',
    
    // Perlu disetel untuk proyek statik
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
});
