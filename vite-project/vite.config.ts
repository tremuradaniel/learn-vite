import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// ctrl + space in vsc for hints!
// can support async calls
export default defineConfig((args) => {
  // command = serve|build
  const { command, mode } = args;
  if (command === "serve") {
    return {
      plugins: [react()],
      base: "production.url"
    }
  } else {
    return {
      plugins: [react()]
    }
  }
})
