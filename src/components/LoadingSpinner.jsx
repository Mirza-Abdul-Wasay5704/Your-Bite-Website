import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <motion.div
        className="relative"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-20 h-20 border-4 border-bite-yellow/20 border-t-bite-yellow rounded-full"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/logo.png" alt="logo" className="w-20 h-20 object-contain" />
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
