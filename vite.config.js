import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    // 确保静态资源能被正确访问
    fs: {
      // 允许访问的目录
      allow: ['.', 'public']
    }
  },
  // 配置静态资源处理
  resolve: {
    alias: {
      '/@public/': resolve(__dirname, 'public/')
    }
  }
});