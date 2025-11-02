# Quick Start Guide 🚀

## Installation & Running Locally

### 1. Install Dependencies
```powershell
cd "d:\Abdul Wasay\Your-Bite-Website"
npm install
```

### 2. Start Development Server
```powershell
npm run dev
```

The site will be available at: `http://localhost:5173`

### 3. Build for Production
```powershell
npm run build
```

### 4. Preview Production Build
```powershell
npm run preview
```

## Adding Menu Items to Firebase

Once the app is running, you need to add menu items to see them on the Menu page.

### Quick Method:
1. Open the website in your browser
2. Open Developer Console (F12)
3. Run this code:

```javascript
// Copy and paste this in the console
import('/src/utils/sampleData.js').then(module => {
  module.addSampleData().then(result => {
    console.log(result);
    alert('Sample menu items added! Refresh the page to see them.');
  });
});
```

### Manual Method (Firebase Console):
1. Go to https://console.firebase.google.com
2. Select "your-bite" project
3. Click "Firestore Database"
4. Click "Start collection"
5. Collection ID: `menu`
6. Add documents with these fields:
   - `name` (string): "Zesty Chicken Burger"
   - `description` (string): "Crispy chicken patty..."
   - `price` (number): 550
   - `category` (string): "Burgers"
   - `imageUrl` (string): "https://your-image-url.jpg"

## Important Notes

✅ **Firebase is already configured** - No need to change anything in `src/firebase.js`

✅ **Real-time updates** - Any changes to Firestore will appear instantly on the website

✅ **Instagram integration** - All "Order" buttons link to your Instagram DM

✅ **Responsive design** - Works perfectly on mobile and desktop

## Customization Tips

### Change Colors:
Edit `tailwind.config.js` - modify the `bite-yellow` and `bite-black` values

### Add Your Logo:
Replace the 🍔 emoji in `src/pages/Home.jsx` with your logo image:
```jsx
<img src="/your-logo.png" alt="Your Bite" className="w-32 h-32" />
```

### Update Instagram Link:
Search for `your_bite_official` in the codebase and update with your handle

### Modify Animations:
Edit the `framer-motion` components in any page file

## Project Structure

```
your-bite-website/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── MenuCard.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── FloatingCart.jsx
│   ├── pages/              # Main pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Menu.jsx
│   │   └── Order.jsx
│   ├── utils/              # Utility functions
│   │   └── sampleData.js
│   ├── firebase.js         # Firebase configuration
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS config
└── vercel.json          # Vercel deployment config
```

## Common Issues & Solutions

### Issue: "npm" is not recognized
**Solution**: Use this instead:
```powershell
& "C:\Program Files\nodejs\npm.cmd" install
& "C:\Program Files\nodejs\npm.cmd" run dev
```

### Issue: Menu page is empty
**Solution**: You need to add menu items to Firebase (see "Adding Menu Items" above)

### Issue: Port 5173 is already in use
**Solution**: Kill the process or change the port in `vite.config.js`

### Issue: Firebase errors in console
**Solution**: 
1. Check if Firestore is enabled in Firebase Console
2. Update Firestore rules to allow reads:
```javascript
allow read: if true;
```

## Next Steps

1. ✅ Add your menu items to Firebase
2. ✅ Replace the 🍔 emoji with your actual logo
3. ✅ Test on mobile devices
4. ✅ Deploy to Vercel (see DEPLOYMENT.md)
5. ✅ Share with customers! 🎉

---

Need help? Check DEPLOYMENT.md for detailed deployment instructions.
