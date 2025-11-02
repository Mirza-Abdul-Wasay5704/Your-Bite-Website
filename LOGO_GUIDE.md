# Adding Your Logo to the Website

## Quick Guide

### Step 1: Prepare Your Logo

1. **Format**: Use PNG with transparent background (recommended) or JPG
2. **Size**: Ideally 512x512 pixels or larger
3. **Name**: Save as `logo.png`

### Step 2: Add to Project

Place your logo file in the `public` folder:
```
your-bite-website/
└── public/
    └── logo.png  ← Your logo here
```

### Step 3: Update Home Page

Open `src/pages/Home.jsx` and find this section (around line 34):

**BEFORE** (Current):
```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="mb-8"
>
  <div className="inline-block bg-gradient-yellow p-8 rounded-3xl shadow-2xl">
    <span className="text-8xl">🍔</span>
  </div>
</motion.div>
```

**AFTER** (With your logo):
```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="mb-8"
>
  <div className="inline-block bg-gradient-yellow p-8 rounded-3xl shadow-2xl">
    <img 
      src="/logo.png" 
      alt="Your Bite Logo" 
      className="w-32 h-32 object-contain"
    />
  </div>
</motion.div>
```

### Step 4: Update Navbar (Optional)

Open `src/components/Navbar.jsx` and find this section (around line 24):

**BEFORE**:
```jsx
<Link to="/" className="flex items-center space-x-2">
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="text-2xl sm:text-3xl font-bold"
  >
    <span className="text-gradient">Your Bite</span>
    <span className="text-xl ml-2">🍔</span>
  </motion.div>
</Link>
```

**AFTER** (With logo):
```jsx
<Link to="/" className="flex items-center space-x-2">
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center space-x-3"
  >
    <img 
      src="/logo.png" 
      alt="Your Bite" 
      className="w-10 h-10 object-contain"
    />
    <span className="text-2xl sm:text-3xl font-bold text-gradient">
      Your Bite
    </span>
  </motion.div>
</Link>
```

### Step 5: Update Favicon

Replace the favicon in `public` folder:
1. Create a 32x32 version of your logo
2. Save as `favicon.ico`
3. Place in `public/favicon.ico`

## Alternative: Using a Circular Logo

If your logo looks better in a circle:

```jsx
<div className="inline-block bg-gradient-yellow p-2 rounded-full shadow-2xl">
  <img 
    src="/logo.png" 
    alt="Your Bite Logo" 
    className="w-32 h-32 object-cover rounded-full"
  />
</div>
```

## Tips

✅ **Transparent PNGs work best** - They blend with the yellow background
✅ **Keep it simple** - The logo should be recognizable at small sizes
✅ **Test on mobile** - Make sure it looks good at all screen sizes
✅ **Optimize file size** - Use tools like TinyPNG to compress images

## Example Logo Styles

### Option A: Logo Only (No Background)
```jsx
<img 
  src="/logo.png" 
  alt="Your Bite" 
  className="w-32 h-32"
/>
```

### Option B: Logo with Yellow Circle
```jsx
<div className="bg-bite-yellow rounded-full p-6">
  <img 
    src="/logo.png" 
    alt="Your Bite" 
    className="w-24 h-24"
  />
</div>
```

### Option C: Logo with Gradient Background
```jsx
<div className="bg-gradient-yellow rounded-2xl p-6 shadow-2xl">
  <img 
    src="/logo.png" 
    alt="Your Bite" 
    className="w-28 h-28"
  />
</div>
```

## Where Your Logo Appears

After these changes, your logo will appear in:
- ✅ Home page hero section (large)
- ✅ Navbar (small, top left)
- ✅ Browser tab (favicon)

## Need Help?

If your logo doesn't look right:
1. Check the file path is correct (`/logo.png`)
2. Make sure the file is in the `public` folder
3. Try refreshing the browser (Ctrl+F5)
4. Check browser console for errors (F12)

---

Happy branding! 🎨🍔
