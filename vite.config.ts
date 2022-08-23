/// <reference types="vitest" />

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const angular = (await import('@analogjs/vite-plugin-angular')).default;

  return {
    root: 'src',
    publicDir: 'assets',
    build: {
      outDir: `../dist/my-app`,
      emptyOutDir: true,
      target: 'es2020',
    },
    resolve: {
      mainFields: ['module'],
    },
    plugins: [angular.default()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['test.ts'],
      include: ['**/*.spec.ts'],
      cache: {
        dir: `../node_modules/.vitest`,
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
