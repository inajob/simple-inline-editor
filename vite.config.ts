import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // エントリポイント
      name: 'InlineEditor', // グローバル変数として公開するライブラリの変数名
      fileName: 'inline-editor', // 生成するファイルのファイル名
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['react'], // バンドルしたくない依存関係
      output: {
        globals: {
          react: 'React', // UMDビルド時に、external指定した依存関係をscript タグで読み込まれた場合に使用される変数名を指定
        },
      },
    },
  },
  plugins: [
    react(),
    dts()
  ],
})
