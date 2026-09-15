import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/Belajar_tailwind/',
    plugins: [
        tailwindcss()
    ]
})