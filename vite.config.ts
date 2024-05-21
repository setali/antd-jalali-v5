import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'antd-jalali-v5',
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'antd', 'dayjs', 'jalaliday'],
      output: {
        globals: {
          react: 'React',
          antd: 'antd',
          dayjs: 'dayjs',
          jalaliday: 'jalaliday'
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  },
  plugins: [react(), dts()]
})
