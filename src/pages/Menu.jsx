import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import MenuCard from '../components/MenuCard';
import LoadingSpinner from '../components/LoadingSpinner';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState(['All']);

  useEffect(() => {
    // Real-time listener for menu items from "dishes" collection
    const unsubscribe = onSnapshot(
      collection(db, 'dishes'),
      (snapshot) => {
        const items = [];
        const categorySet = new Set(['All']);

        snapshot.forEach((doc) => {
          const data = { id: doc.id, ...doc.data() };
          // Only include items where isAvailable is true
          if (data.isAvailable === true) {
            items.push(data);
            if (data.category) {
              categorySet.add(data.category);
            }
          }
        });

        setMenuItems(items);
        setCategories(Array.from(categorySet));
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching menu items:', error);
        setLoading(false);
      }
    );

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-bite-black via-bite-yellow/5 to-bite-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl font-bold mb-6"
          >
            <span className="text-gradient">Your Bite Menu</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            Discover our delicious selection of bites 🍔🍟🧋
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-3 bg-bite-black-light sticky top-20 z-30 border-b border-bite-yellow/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-yellow text-bite-black shadow-lg'
                    : 'bg-bite-black text-gray-400 hover:text-bite-yellow border border-bite-yellow/20'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-20 bg-bite-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-8xl mb-6">🍽️</div>
              <h3 className="text-2xl font-bold text-gray-400 mb-4">
                No items in this category yet
              </h3>
              <p className="text-gray-500">
                Check back soon for delicious updates!
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MenuCard item={item} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bite-black-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gradient">Ready to Order?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              DM us on Instagram to place your order! 🎉
            </p>
            <motion.a
              href="https://www.instagram.com/your_bite_official/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-yellow text-bite-black text-lg font-bold py-3 px-8 rounded-full shadow-lg"
            >
              Order on Instagram 📷
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
