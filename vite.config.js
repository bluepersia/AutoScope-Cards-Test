import { defineConfig } from 'vite';

export default defineConfig({
  root: 'vite',
  publicDir: '../public',
  css: {
    postcss: './postcss.config.js',
  },
  build: {
     cssMinify: false
  },
  resolve: {
    preserveSymlinks: true, // Prevent Vite from resolving the real path
  },
  optimizeDeps: {
    include: ['fluid-scale'], // force Vite to pre-bundle this
    force: true
  },
  server: {
    fs: {
      // Allow serving files from outside the root
      allow: ['..', '/Users/user1234/Desktop'], // or a specific absolute path to the linked module
    },
  },
});