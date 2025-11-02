import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const FloatingCart = () => {
  const [isVisible, setIsVisible] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -10, 0]
      }}
      transition={{
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      onClick={scrollToTop}
    >
      <div className="bg-white p-3 rounded-full shadow-2xl cursor-pointer hover:scale-110 transition-transform" title="Scroll to top">
        <img 
          src="/logo.png" 
          alt="Your Bite" 
          className="w-12 h-12"
        />
      </div>
    </motion.div>
  );
};

export default FloatingCart;
