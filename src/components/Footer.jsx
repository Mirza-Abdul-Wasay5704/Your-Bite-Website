import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-bite-black-light border-t border-bite-yellow/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-3">
              <img 
                src="/logo.png" 
                alt="Your Bite" 
                className="w-10 h-10 mr-3"
              />
              <h3 className="text-2xl font-bold text-gradient">Your Bite</h3>
            </div>
            <p className="text-gray-400">Serving Bites That Feel Right 😋✨</p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-bite-yellow mb-3">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-gray-400 hover:text-bite-yellow transition-colors">
                Home
              </a>
              <a href="/about" className="block text-gray-400 hover:text-bite-yellow transition-colors">
                About Us
              </a>
              <a href="/menu" className="block text-gray-400 hover:text-bite-yellow transition-colors">
                Menu
              </a>
              <a href="/order" className="block text-gray-400 hover:text-bite-yellow transition-colors">
                Order Now
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-bite-yellow mb-3">Connect With Us</h4>
            <div className="space-y-3">
              <motion.a
                href="https://www.instagram.com/your_bite_official/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center md:justify-end text-gray-400 hover:text-bite-yellow transition-colors"
              >
                <span className="text-2xl mr-2">🅾</span>
                <span>@your_bite_official</span>
              </motion.a>
              <div className="flex items-center justify-center md:justify-end text-gray-400">
                <span className="text-2xl mr-2">📍</span>
                <span>Food Festivals & Events</span>
              </div>
              <div className="flex items-center justify-center md:justify-end text-gray-400">
                <span className="text-2xl mr-2">✉️</span>
                <span>hello@yourbite.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-bite-yellow/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Your Bite. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Made with ❤️ and 🍔
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
