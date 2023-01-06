import { defineConfig } from 'vite'

export default defineConfig({
  build:{
    rollupOptions:{
        input: {
            app:"vue/appli_musique.html"
        }
    }
  },
  server: {
    open:"vue/appli_musique.html"
  }
})