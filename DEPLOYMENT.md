# Deployment Guide for Your Bite Website

## Prerequisites

✅ Node.js installed (v16+)
✅ Git installed
✅ Vercel account (free tier is sufficient)
✅ Firebase project set up

## Step 1: Complete Local Setup

1. **Install Dependencies**
```bash
npm install
```

2. **Test Locally**
```bash
npm run dev
```
Visit `http://localhost:5173` to see your site

## Step 2: Add Sample Menu Data to Firebase

### Option A: Using Browser Console (Recommended)
1. Start the dev server: `npm run dev`
2. Open browser console (F12)
3. Paste and run:
```javascript
import('/src/utils/sampleData.js').then(module => {
  module.addSampleData();
});
```

### Option B: Create a Temporary Admin Page
Create `src/pages/Admin.jsx` with a button to call `addSampleData()`

### Firebase Firestore Rules
Update your Firestore rules in Firebase Console:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /menu/{menuId} {
      allow read: if true;
      allow write: if false; // Change to true if you want to allow writes
    }
  }
}
```

## Step 3: Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized files.

## Step 4: Deploy to Vercel

### Method 1: Vercel CLI (Fastest)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? **your-bite-website**
- Directory? **./** (just press Enter)
- Override settings? **N**

4. **Deploy to Production**
```bash
vercel --prod
```

### Method 2: Vercel Dashboard (Easier for Beginners)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit - Your Bite Website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/your-bite-website.git
git push -u origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

## Step 5: Configure Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update your domain's DNS records as instructed

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All pages are accessible
- [ ] Menu items display from Firebase
- [ ] Instagram links work
- [ ] Mobile responsive design works
- [ ] Animations are smooth
- [ ] Images load properly

## Updating Menu Items

### Using Firebase Console:
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Navigate to Firestore Database
4. Go to `menu` collection
5. Add/Edit/Delete documents

### Document Structure:
```json
{
  "name": "Item Name",
  "description": "Item description",
  "price": 350,
  "category": "Burgers",
  "imageUrl": "https://your-image-url.com/image.jpg"
}
```

## Troubleshooting

### Build Errors
```bash
rm -rf node_modules
npm install
npm run build
```

### Firebase Connection Issues
- Check Firebase config in `src/firebase.js`
- Verify Firestore rules allow reads
- Check browser console for errors

### Vercel Deployment Issues
- Ensure `vercel.json` exists
- Check build logs in Vercel dashboard
- Verify Node.js version compatibility

## Environment Variables (If Needed)

If you want to hide Firebase config:

1. Create `.env` file:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
# ... etc
```

2. Update `src/firebase.js` to use `import.meta.env.VITE_FIREBASE_API_KEY`

3. Add environment variables in Vercel:
   - Go to Project Settings → Environment Variables
   - Add each variable

## Support

For issues, check:
- [Vite Documentation](https://vitejs.dev/)
- [Vercel Documentation](https://vercel.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)

---

🎉 Your website is now live! Share it with your customers!
