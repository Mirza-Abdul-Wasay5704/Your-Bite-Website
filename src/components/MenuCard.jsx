import { motion } from 'framer-motion';

const MenuCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      className="bg-bite-black-light rounded-2xl overflow-hidden shadow-lg card-hover border border-bite-yellow/20"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.imageUrl || 'https://via.placeholder.com/400x300?text=Your+Bite'}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-bite-black-light/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-bite-yellow mb-2">{item.name}</h3>
        
        {/* Category Badge */}
        {item.category && (
          <span className="inline-block px-3 py-1 bg-bite-yellow/10 text-bite-yellow text-sm font-semibold rounded-full mb-4">
            {item.category}
          </span>
        )}
        
        {/* Price */}
        <div className="mb-4">
          <span className="text-3xl font-bold text-gradient">Rs. {item.price}</span>
        </div>

        {/* Order Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-yellow text-bite-black font-bold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-bite-yellow/50 transition-all"
        >
          Add to Order 🛒
        </motion.button>
      </div>
    </motion.div>
  );
};

export default MenuCard;
