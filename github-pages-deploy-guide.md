# Deploying Your Portfolio to GitHub Pages

This guide will help you upload your portfolio project to GitHub and deploy it using GitHub Pages.

## Step 1: Create a GitHub Repository

1. Log in to your GitHub account (or create one at github.com)
2. Click the "+" icon in the top-right corner and select "New repository"
3. Name your repository (e.g., "portfolio" or "abhijitkar-portfolio")
4. Add a description (optional)
5. Choose "Public" visibility
6. Click "Create repository"

## Step 2: Prepare Your Local Repository

1. Open a terminal on your local machine
2. Navigate to your project folder
3. Initialize a Git repository (if not already initialized):
   ```bash
   git init
   ```
4. Add all files to staging:
   ```bash
   git add .
   ```
5. Commit the changes:
   ```bash
   git commit -m "Initial commit of portfolio website"
   ```

## Step 3: Connect to GitHub

1. Link your local repository to the GitHub repository (replace USERNAME and REPO_NAME):
   ```bash
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   ```
2. Push your code to GitHub:
   ```bash
   git push -u origin main
   ```
   (Use `master` instead of `main` if that's your default branch name)

## Step 4: Set Up GitHub Pages

Since this is a Vite React project with a backend component, you need a different approach for GitHub Pages deployment:

### Option 1: Deploy with GitHub Actions (Recommended)

1. Create a `.github/workflows` directory in your project:
   ```bash
   mkdir -p .github/workflows
   ```

2. Create a deployment workflow file:
   ```bash
   touch .github/workflows/deploy.yml
   ```

3. Add the following content to `deploy.yml`:
   ```yml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]  # or master
     workflow_dispatch:

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: 18

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build
           env:
             VITE_BASE_PATH: "/REPO_NAME/"  # Replace REPO_NAME with your repository name

         - name: Deploy
           uses: JamesIves/github-pages-deploy-action@v4
           with:
             folder: client/dist
             branch: gh-pages
   ```

4. Replace `REPO_NAME` in the above file with your actual repository name.

5. Push this workflow file to GitHub:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Pages deployment workflow"
   git push
   ```

6. Go to your GitHub repository -> Settings -> Pages
7. Under "Source", select "GitHub Actions"
8. The workflow will automatically deploy your site whenever you push to the main branch

### Option 2: Manual Deployment to GitHub Pages

If you prefer manual deployment:

1. Build your project:
   ```bash
   npm run build
   ```

2. Create a new branch called `gh-pages`:
   ```bash
   git checkout -b gh-pages
   ```

3. Remove everything except the `client/dist` folder

4. Move all contents from `client/dist` to the root of the repository

5. Create a file called `.nojekyll` in the root (to prevent GitHub from processing with Jekyll):
   ```bash
   touch .nojekyll
   ```

6. Commit these changes:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   ```

7. Push to GitHub:
   ```bash
   git push -u origin gh-pages
   ```

8. Go to your GitHub repository -> Settings -> Pages
9. Under "Source", select "Deploy from a branch"
10. Select the "gh-pages" branch and "/ (root)" folder
11. Click Save

## Step 5: Configure Custom Domain (Optional)

If you have a custom domain like "abhijitkar.website":

1. Go to your GitHub repository -> Settings -> Pages
2. Under "Custom domain", enter your domain name
3. Click Save
4. Set up your DNS provider with:
   - An A record pointing to GitHub Pages IP addresses
   - Or a CNAME record pointing to `USERNAME.github.io`

## Important Notes

- The website will be available at `https://USERNAME.github.io/REPO_NAME/`
- If you have API routes or backend functionality, those won't work with GitHub Pages (static hosting only)
- For full-stack functionality, consider services like Vercel, Netlify, or Render
- For client-side routing, you may need a 404.html trick (search for "GitHub Pages SPA routing")