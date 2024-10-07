import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";
import postCssNesting from "postcss-nesting";

// https://vitejs.dev/config/
// ctrl + space in vsc for hints!
// can support async calls
export default defineConfig({
      plugins: [react()],
      build: {
        // build for modern browsers that support newer features
        target: "esnext",
        rollupOptions: {
          input: {
            // for npm run build
            main: resolve(__dirname, 'index.html'),
            another: resolve(__dirname, 'another-route/index.html')
          },
          output: {
            manualChunks(id) {
              if (id.includes('node_modules')) {
                return 'vendor'; // create a separate chunk for vendors
              }
            }
          }
        }
      },
      css: {
        postcss: {
          plugins: [
            postCssNesting()
          ]
        }
      }
})
