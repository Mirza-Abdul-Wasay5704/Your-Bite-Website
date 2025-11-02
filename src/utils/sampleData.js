import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

// Sample menu items to populate Firestore
const sampleMenuItems = [
  {
    name: "Zesty Chicken Burger",
    description: "Crispy chicken patty with spicy mayo, lettuce, and pickles",
    price: 550,
    category: "Burgers",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800"
  },
  {
    name: "Cheesy Beef Burger",
    description: "Juicy beef patty loaded with melted cheese and special sauce",
    price: 650,
    category: "Burgers",
    imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800"
  },
  {
    name: "Loaded Fries",
    description: "Crispy fries topped with cheese sauce, jalapeños, and herbs",
    price: 350,
    category: "Fries",
    imageUrl: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=800"
  },
  {
    name: "Classic Fries",
    description: "Golden crispy fries seasoned to perfection",
    price: 250,
    category: "Fries",
    imageUrl: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800"
  },
  {
    name: "Mango Blast",
    description: "Refreshing mango smoothie with a hint of mint",
    price: 300,
    category: "Drinks",
    imageUrl: "https://images.unsplash.com/photo-1546173159-315724a31696?w=800"
  },
  {
    name: "Berry Bliss",
    description: "Mixed berry shake with cream topping",
    price: 350,
    category: "Drinks",
    imageUrl: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800"
  },
  {
    name: "Spicy Wings",
    description: "Crispy chicken wings tossed in our signature hot sauce",
    price: 450,
    category: "Sides",
    imageUrl: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800"
  },
  {
    name: "Onion Rings",
    description: "Crispy golden onion rings with tangy dipping sauce",
    price: 280,
    category: "Sides",
    imageUrl: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=800"
  }
];

// Function to add sample data to Firestore
export const addSampleData = async () => {
  try {
    const menuCollection = collection(db, 'menu');
    
    for (const item of sampleMenuItems) {
      await addDoc(menuCollection, item);
      console.log(`Added: ${item.name}`);
    }
    
    console.log('✅ All sample menu items added successfully!');
    return { success: true, message: 'Sample data added successfully' };
  } catch (error) {
    console.error('Error adding sample data:', error);
    return { success: false, error: error.message };
  }
};

// Run this function once to populate your Firestore database
// You can call this from the browser console:
// import { addSampleData } from './utils/sampleData';
// addSampleData();
