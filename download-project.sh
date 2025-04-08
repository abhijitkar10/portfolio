#!/bin/bash

# Create temp directory for the project
temp_dir="abhijitkar-portfolio"
mkdir -p "$temp_dir"

# Copy all important files and directories to the temp directory
echo "Copying project files..."

# Copy main directories
cp -r client "$temp_dir/"
cp -r server "$temp_dir/"
cp -r shared "$temp_dir/"
cp -r attached_assets "$temp_dir/"

# Copy configuration files
cp package.json "$temp_dir/"
cp package-lock.json "$temp_dir/"
cp tsconfig.json "$temp_dir/"
cp tailwind.config.ts "$temp_dir/"
cp postcss.config.js "$temp_dir/"
cp theme.json "$temp_dir/"
cp vite.config.ts "$temp_dir/"
cp github-pages-deploy-guide.md "$temp_dir/"

# Create .nojekyll file
touch "$temp_dir/.nojekyll"

# Create a simple README
echo "# Abhijit Kar Portfolio

A professional portfolio website for Abhijit Kar showcasing education, projects, skills, and certifications.

## How to Run

1. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

2. Start the development server:
   \`\`\`
   npm run dev
   \`\`\`

3. For deployment instructions, see \`github-pages-deploy-guide.md\`
" > "$temp_dir/README.md"

# Create a .gitignore file
echo "node_modules/
dist/
.DS_Store
*.log
.env
" > "$temp_dir/.gitignore"

# Create zip archive
echo "Creating zip archive..."
zip -r abhijitkar-portfolio.zip "$temp_dir"

# Cleanup
echo "Cleaning up..."
rm -rf "$temp_dir"

echo "Project files saved to abhijitkar-portfolio.zip"
echo "You can now upload this to GitHub following the guide in github-pages-deploy-guide.md"