import { motion } from 'framer-motion';

const MenuCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-bite-black-light rounded-2xl overflow-hidden border border-bite-yellow/20 hover:border-bite-yellow/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-bite-yellow/20"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-bite-black">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
          style={{
            imageRendering: '-webkit-optimize-contrast',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="mb-3 flex items-center gap-2 flex-wrap">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-bite-yellow/20 text-bite-yellow rounded-full">
            {item.category}
          </span>
          {item.servingSize && (
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/10 text-gray-300 rounded-full">
              🍽️ {item.servingSize}
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>

        {/* Price */}
        <p className="text-3xl font-bold text-gradient mb-4">
          Rs. {item.price}
        </p>

        {/* Order Button */}
        <motion.a
          href="https://www.instagram.com/your_bite_official/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="block w-full bg-gradient-yellow text-bite-black text-center font-bold py-3 rounded-full hover:shadow-lg hover:shadow-bite-yellow/50 transition-all"
        >
          Add to Order 🛒
        </motion.a>
      </div>
    </motion.div>
  );
};

export default MenuCard;
