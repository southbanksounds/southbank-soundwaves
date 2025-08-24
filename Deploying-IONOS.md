# Deploying Southbank Band Website to IONOS

This guide will help you deploy your React website to your IONOS hosting at **www.southbank.band**.

## Prerequisites

- Node.js installed on your local machine
- Access to your IONOS hosting control panel
- FTP/SFTP client or file manager access

## Step 1: Build the Website Locally

1. Open terminal/command prompt in your project folder
2. Install dependencies (if not already done):
   ```bash
   npm install
   ```
3. Build the production version:
   ```bash
   npm run build
   ```
4. This creates a `dist/` folder with all the files ready for deployment

## Step 2: Access Your IONOS Hosting

### Option A: Using IONOS File Manager
1. Log into your IONOS control panel
2. Go to "Websites & Domains" → your domain → "File Manager"
3. Navigate to the web root directory (usually `httpdocs/` or `public_html/`)

### Option B: Using FTP/SFTP
1. Get your FTP credentials from IONOS control panel
2. Use an FTP client like FileZilla, WinSCP, or VS Code SFTP extension
3. Connect to your server

## Step 3: Clear Existing Files (If Replacing WordPress)

⚠️ **IMPORTANT**: If you currently have WordPress or other content on www.southbank.band:

1. **Backup first**: Download all existing files to your computer
2. **Clear the web root**: Delete all files in `httpdocs/` or `public_html/`
   - This includes `wp-content/`, `wp-admin/`, `index.php`, etc.
3. **Keep only**: `.htaccess` (if you have custom redirects), but you'll replace it anyway

## Step 4: Upload Your Website

1. **Upload all contents** from your local `dist/` folder to the web root directory
   - Copy everything INSIDE the `dist/` folder, not the folder itself
   - This should include: `index.html`, `assets/` folder, and other files

2. **Verify the .htaccess file** is uploaded:
   - The `.htaccess` file from `dist/` should be in your web root
   - This file enables proper routing for your single-page application

## Step 5: Test Your Website

1. Visit **https://www.southbank.band** in your browser
2. Test navigation between pages (Home, Music, Gallery, Shows, Info)
3. Check that direct URLs work (e.g., `www.southbank.band/music`)
4. Verify images and assets load correctly

## Step 6: Domain Configuration (If Needed)

If your domain isn't pointing to IONOS yet:

1. In IONOS control panel, go to "Domains"
2. Ensure www.southbank.band points to your hosting space
3. DNS changes can take 24-48 hours to propagate

## Common Issues & Solutions

### Issue: Pages show 404 when accessed directly
**Solution**: Ensure the `.htaccess` file is uploaded and mod_rewrite is enabled on your server.

### Issue: Images not loading
**Solution**: Check that the `assets/` folder was uploaded correctly with all subfolders.

### Issue: Site not accessible
**Solution**: 
- Check domain DNS settings in IONOS
- Verify files are in the correct web root directory
- Ensure `index.html` is in the root directory

### Issue: Styling looks broken
**Solution**: 
- Clear browser cache
- Check that CSS files in `assets/` folder uploaded correctly
- Verify there are no mixed HTTP/HTTPS issues

## File Structure After Upload

Your web root should look like this:
```
httpdocs/ (or public_html/)
├── index.html
├── .htaccess
├── robots.txt
└── assets/
    ├── index-[hash].css
    ├── index-[hash].js
    └── [various image files]
```

## Updating Your Website

To update your website in the future:
1. Make changes to your code
2. Run `npm run build` again
3. Upload the new `dist/` contents to your server
4. Your changes will be live immediately

## Support

If you encounter issues:
1. Check IONOS documentation for Apache/PHP hosting
2. Verify your hosting plan supports `.htaccess` files
3. Contact IONOS support if needed

---

**Success!** Your Southbank band website should now be live at www.southbank.band 🎸