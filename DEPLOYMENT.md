# Netlify Deployment Guide

## Quick Deploy to Netlify

This guide will help you deploy the query text server app to Netlify.

### Option 1: Deploy via Netlify CLI (Recommended for Testing)

1. **Install Netlify CLI** (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Deploy the site**:
   ```bash
   netlify deploy --prod
   ```

   Follow the prompts:
   - Create a new site or link to an existing one
   - Build command: (leave empty or press Enter)
   - Directory to deploy: `public`
   - Functions directory: `netlify/functions`

### Option 2: Deploy via Git Integration (Recommended for Production)

1. **Push your code to GitHub** (already done if you're reading this!)

2. **Connect to Netlify**:
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select your repository: `friuns/create-todo-list-app`

3. **Configure build settings**:
   - Build command: (leave empty)
   - Publish directory: `public`
   - Functions directory: `netlify/functions` (should be auto-detected)

4. **Deploy**:
   - Click "Deploy site"
   - Netlify will automatically deploy your site

### Option 3: Manual Deploy via Netlify Drop

1. **Prepare the deployment**:
   ```bash
   # No build step needed, all files are ready
   ```

2. **Go to Netlify Drop**:
   - Visit [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop the entire project folder

3. **Note**: This method is quick but won't include automatic deployments on code changes

## After Deployment

Once deployed, your app will be available at a Netlify URL like:
```
https://your-site-name.netlify.app
```

### Testing Your Deployment

1. **Visit the homepage**:
   ```
   https://your-site-name.netlify.app
   ```

2. **Test the serverless function**:
   ```
   https://your-site-name.netlify.app/.netlify/functions/query-text?text=Hello%20World
   ```

3. **Test with multiple parameters**:
   ```
   https://your-site-name.netlify.app/.netlify/functions/query-text?text=Test&param1=value1
   ```

## Viewing Server Logs

To view the server logs (where query text is printed):

1. Go to your Netlify dashboard
2. Select your site
3. Click "Functions" in the left sidebar
4. Click on "query-text" function
5. Click on any function execution to see the logs
6. You'll see the `console.log` output showing the query text received

## Custom Domain (Optional)

To add a custom domain:

1. Go to your site's settings in Netlify
2. Click "Domain management"
3. Click "Add custom domain"
4. Follow the instructions to configure your DNS

## Environment Variables (If Needed)

If you need to add environment variables in the future:

1. Go to your site's settings in Netlify
2. Click "Environment variables"
3. Add your variables
4. Redeploy the site

## Continuous Deployment

With Git integration (Option 2), Netlify will automatically:
- Deploy when you push to the main branch
- Create deploy previews for pull requests
- Roll back to previous deployments if needed

## Troubleshooting

### Function not working?
- Check the Functions tab in Netlify dashboard for error logs
- Ensure the `netlify.toml` file is in the root directory
- Verify that `netlify/functions` directory exists with `query-text.js`

### Build failures?
- This project doesn't need a build step
- Make sure "Build command" is empty in Netlify settings
- Verify "Publish directory" is set to `public`

### 404 errors?
- Ensure the publish directory is set to `public`
- Check that `public/index.html` exists in your repository

## Next Steps

1. ✅ Deploy to Netlify using one of the methods above
2. ✅ Test the function with different query parameters
3. ✅ Share your deployed URL with others
4. ✅ Monitor the function logs to see query text being printed server-side

---

For more information, visit the [Netlify Documentation](https://docs.netlify.com/).
