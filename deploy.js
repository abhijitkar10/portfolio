// Simple deploy script for GitHub Pages
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create or ensure the 'dist' directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Build the project
console.log('Building the project...');
execSync('npm run build', { stdio: 'inherit' });

// Copy the compiled files to the dist folder
console.log('Copying files to dist folder...');
const sourceDir = 'client/dist';
const targetDir = 'dist';

// Copy all files from client/dist to dist
fs.readdirSync(sourceDir).forEach(file => {
  const sourcePath = path.join(sourceDir, file);
  const targetPath = path.join(targetDir, file);
  
  if (fs.lstatSync(sourcePath).isDirectory()) {
    // If it's a directory, copy recursively
    execSync(`cp -r "${sourcePath}" "${targetDir}"`, { stdio: 'inherit' });
  } else {
    // If it's a file, copy it
    fs.copyFileSync(sourcePath, targetPath);
  }
});

// Create a .nojekyll file (tells GitHub Pages not to process with Jekyll)
fs.writeFileSync(path.join(targetDir, '.nojekyll'), '');

// Create/update the CNAME file if you have a custom domain
// fs.writeFileSync(path.join(targetDir, 'CNAME'), 'abhijitkar.website');

console.log('Deployment files ready in the dist folder!');