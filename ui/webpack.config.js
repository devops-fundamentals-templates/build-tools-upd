/**
 * esbuild configuration
 * 
 * This project now uses esbuild instead of webpack.
 * The build configuration is defined in build.js
 * 
 * Build script: npm run build
 * 
 * esbuild provides:
 * - Fast bundling of JavaScript
 * - Simple configuration
 * - Minimal overhead
 * 
 * Features:
 * - Entry point: src/index.js
 * - Output: dist/app.js (minified)
 * - HTML copy: src/index.html → dist/index.html
 * - CSS copy: src/style.css → dist/css/style.css
 */

const esbuild = require('esbuild');

const config = {
    entryPoints: ['src/index.js'],
    bundle: true,
    outfile: 'dist/app.js',
    minify: true,
};

module.exports = config;