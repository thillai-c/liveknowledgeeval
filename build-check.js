const fs = require('fs');
const path = require('path');

console.log('🔍 Checking build files...');

// Check if build directory exists
const buildDir = path.join(__dirname, 'build');
if (!fs.existsSync(buildDir)) {
  console.error('❌ Build directory does not exist!');
  process.exit(1);
}

// Check if index.html exists
const indexPath = path.join(buildDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('❌ index.html not found in build directory!');
  process.exit(1);
}

// Check if static directory exists
const staticDir = path.join(buildDir, 'static');
if (!fs.existsSync(staticDir)) {
  console.error('❌ static directory not found in build directory!');
  process.exit(1);
}

// Check if assets directory exists
const assetsDir = path.join(buildDir, 'assets');
if (!fs.existsSync(assetsDir)) {
  console.error('❌ assets directory not found in build directory!');
  process.exit(1);
}

console.log('✅ All build files are present!');
console.log('📁 Build directory contents:');
fs.readdirSync(buildDir).forEach(file => {
  console.log(`   - ${file}`);
});

console.log('🚀 Build is ready for deployment!');
