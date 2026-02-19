const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

// Ensure dist directory exists
const distDir = path.join(__dirname, 'dist');
const cssDir = path.join(distDir, 'css');

if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

if (!fs.existsSync(cssDir)) {
    fs.mkdirSync(cssDir, { recursive: true });
}

// Build JavaScript with esbuild
esbuild.buildSync({
    entryPoints: ['src/index.js'],
    bundle: true,
    outfile: 'dist/app.js',
    minify: true,
});

// Copy HTML file
const htmlSource = path.join(__dirname, 'src', 'index.html');
const htmlDest = path.join(distDir, 'index.html');
fs.copyFileSync(htmlSource, htmlDest);

// Copy CSS file to dist/css
const cssSource = path.join(__dirname, 'src', 'style.css');
const cssDest = path.join(cssDir, 'style.css');
fs.copyFileSync(cssSource, cssDest);

console.log('Build completed successfully!');
console.log('- JavaScript bundled: dist/app.js');
console.log('- HTML copied: dist/index.html');
console.log('- CSS copied: dist/css/style.css');
