# Your Bite Website 🍔

A modern, dynamic, and responsive website for the food brand "Your Bite" - Serving Bites That Feel Right 🍔😋✨

## Features

- 🎨 Modern UI with yellow-black theme matching the brand
- 🔥 Real-time menu updates with Firebase Firestore
- 📱 Fully responsive design for mobile and desktop
- ⚡ Built with React + Vite for blazing-fast performance
- 🎭 Smooth animations using Framer Motion
- 🎨 Styled with TailwindCSS
- 🚀 Deployed on Vercel

## Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: TailwindCSS with custom theme
- **Backend**: Firebase (Firestore + Storage)
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Hosting**: Vercel

## Pages

1. **Home** - Hero section with animated tagline and CTAs
2. **About** - Vision, Mission, and Values
3. **Menu** - Dynamic menu fetched from Firebase with category filters
4. **Order** - Instagram ordering integration

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-bite-website.git
cd your-bite-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Firebase Setup

The website uses Firebase for backend services:
- **Firestore**: Store menu items
- **Storage**: Store menu images
- **Analytics**: Track website usage

### Firestore Structure

```
/menu
  ├── item_id_1
  │     ├── name: "Zesty Chicken Burger"
  │     ├── description: "Crispy chicken patty with spicy mayo"
  │     ├── price: 550
  │     ├── category: "Burgers"
  │     ├── imageUrl: "https://firebasestorage.../burger.jpg"
  └── ...
```

## Deployment

The website is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click!

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Theme Colors

- **Yellow**: #FFD700 (Primary)
- **Yellow Light**: #FFE44D
- **Yellow Dark**: #FFC700
- **Black**: #1A1A1A (Background)
- **Black Light**: #2D2D2D
- **Gray**: #404040

## Contact

- Instagram: [@your_bite_official](https://www.instagram.com/your_bite_official/)
- Email: hello@yourbite.com

## License

© 2025 Your Bite. All Rights Reserved.

---

Made with ❤️ and 🍔
