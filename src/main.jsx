import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/nome-do-repositorio/', // Substitua pelo nome do seu repositório no GitHub
  plugins: [react()],
})
