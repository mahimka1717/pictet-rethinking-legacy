import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from 'vite-plugin-handlebars';

import fs from 'fs';
import path from 'node:path';
import Handlebars from 'handlebars';

export default defineConfig({
  css: {
    preprocessorOptions: {
      sass: {
        // Настройки SASS препроцессора
      },
    },
  },
  server: {
    host: true, // Слушаем на всех сетевых интерфейсах, доступно извне
    port: 3000, // Указываем стандартный порт явно
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    target: "es2015", // Обеспечивает поддержку старых браузеров
    minify: "terser", // Использовать terser для лучшей совместимости с браузерами
    sourcemap: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
      },
      output: {
        // assetFileNames: (assetInfo) => {
        //   const info = assetInfo.name.split(".");
        //   const extType = info[info.length - 1];
        //   if (/\.(css|scss|sass)$/.test(assetInfo.name)) {
        //     // Используем имя чанка для именования CSS/SCSS/SASS файлов
        //     return `assets/[name]-[hash][extname]`;
        //   }
        //   return `assets/[name]-[hash][extname]`;
        // },
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/hbs'),
    }),

    // Custom plugin for HTML injection into inject.js
    {
      name: 'inject-html-embedder',
      writeBundle() {
        
        // Path to inject.js file after build
        const injectPath = path.resolve(__dirname, 'dist/embed.js');
        
        if (!fs.existsSync(injectPath)) {
          console.warn('inject.js not found, skipping HTML injection');
          return;
        }
        
        try {
          // Read inject.js content
          let injectContent = fs.readFileSync(injectPath, 'utf8');
          
          // Load and register partials
          const partialsDir = path.resolve(__dirname, 'src/hbs');
          const partialFiles = fs.readdirSync(partialsDir);
          
          partialFiles.forEach(file => {
            if (file.endsWith('.hbs')) {
              const partialName = file.replace('.hbs', '');
              const partialContent = fs.readFileSync(
                path.join(partialsDir, file), 
                'utf8'
              );
              Handlebars.registerPartial(partialName, partialContent);
            }
          });
          
          // Render scene partial
          const articleTemplate = Handlebars.compile('{{>article}}');
          let articleHtml = articleTemplate();

          // Подставляем publicUrl для всех src="images/
          const publicUrl = "https://ft-shorthand-prod-eu.s3.amazonaws.com/partnercontent/pictet/rethinking-legacy/dist/";
          articleHtml = articleHtml.replace(/src=("|')\/?images\//g, `src=$1${publicUrl}images/`);

          // Function to escape HTML for JavaScript string
          function escapeForJs(html) {
            return html
              .replace(/\\/g, '\\\\')
              .replace(/'/g, "\\'")
              .replace(/"/g, '\\"')
              .replace(/\r?\n/g, '\\n')
              .replace(/\t/g, '\\t')
              .trim();
          }

          // Replace placeholders with actual HTML
          injectContent = injectContent.replace(
            /const articleHtml = `@article`;/g,
            'const articleHtml = `' + escapeForJs(articleHtml) + '`;'
          );
          
          // Save updated file
          fs.writeFileSync(injectPath, injectContent);
          
          console.log('✅ HTML successfully injected into embed.js');
          
        } catch (error) {
          console.error('❌ Error injecting HTML into embed.js:', error);
        }
      }
    }

  ],
});
