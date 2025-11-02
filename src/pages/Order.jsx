import { motion } from 'framer-motion';

const Order = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-bite-black via-bite-yellow/5 to-bite-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated Icon with Smoke Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 5 }}
            className="mb-8 relative w-full h-80 flex items-center overflow-hidden"
          >
            <motion.div
              animate={{
                x: ['calc(-50% - 56px)', 'calc(100vw + 56px)'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 0
              }}
              className="absolute left-0 flex items-center"
            >
              {/* Enhanced Smoke Trail Effect - Multiple Puffs */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: [0.5, 0.3, 0],
                    scale: [0.5, 1, 1.8],
                    x: [-30 - i * 15, -80 - i * 20, -140 - i * 25],
                    y: [0, -10 + Math.random() * 20, -20 + Math.random() * 40],
                  }}
                  transition={{
                    duration: 2 + i * 0.2,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: i * 0.15,
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full blur-2xl -z-10"
                  style={{
                    width: `${60 + i * 10}px`,
                    height: `${60 + i * 10}px`,
                    background: `radial-gradient(circle, rgba(156, 163, 175, ${0.6 - i * 0.1}), transparent)`,
                  }}
                />
              ))}
              
              {/* Additional wispy smoke particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`wisp-${i}`}
                  animate={{
                    opacity: [0.3, 0.15, 0],
                    scale: [0.3, 0.8, 1.2],
                    x: [-20, -50 - i * 15, -90 - i * 20],
                    y: [10 + i * 5, 0, -15 - i * 10],
                  }}
                  transition={{
                    duration: 1.5 + i * 0.3,
                    repeat: Infinity,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.5 + i * 0.2,
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full blur-xl -z-10"
                  style={{
                    width: `${40 + i * 8}px`,
                    height: `${40 + i * 8}px`,
                    background: `radial-gradient(circle, rgba(209, 213, 219, ${0.4 - i * 0.1}), transparent)`,
                  }}
                />
              ))}
              
              <div className="p-8 rounded-3xl relative z-10">
                <img 
                  src="/logo.png" 
                  alt="Your Bite Logo" 
                  className="w-56 h-56 object-contain"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl font-bold mb-6"
          >
            <span className="text-gradient">Ready to Order?</span>
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-2xl sm:text-3xl text-white mb-4 font-semibold">
              Head over to our Instagram and DM us your favorite bites! 📱
            </p>
            <p className="text-lg text-gray-400">
              We're just a message away from serving you the best food experience 😋
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="https://www.instagram.com/your_bite_official/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-yellow text-bite-black text-xl font-bold py-4 px-12 rounded-full shadow-2xl hover:shadow-bite-yellow/50 transition-all"
            >
              Order on Instagram 📷
            </motion.a>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-bite-black-light p-6 rounded-2xl border border-bite-yellow/20">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-bite-yellow mb-2">Quick Response</h3>
              <p className="text-gray-400 text-sm">We reply to DMs within minutes!</p>
            </div>

            <div className="bg-bite-black-light p-6 rounded-2xl border border-bite-yellow/20">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-bite-yellow mb-2">Easy Ordering</h3>
              <p className="text-gray-400 text-sm">Just tell us what you want!</p>
            </div>

            <div className="bg-bite-black-light p-6 rounded-2xl border border-bite-yellow/20">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-lg font-bold text-bite-yellow mb-2">Personalized Service</h3>
              <p className="text-gray-400 text-sm">Custom orders? We got you!</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-20 bg-bite-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            <span className="text-gradient">How to Order</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                icon: '📱',
                title: 'Open Instagram',
                description: 'Visit our Instagram profile'
              },
              {
                step: '2',
                icon: '💬',
                title: 'Send a DM',
                description: 'Message us your order'
              },
              {
                step: '3',
                icon: '✅',
                title: 'Confirm',
                description: 'We\'ll confirm your order details'
              },
              {
                step: '4',
                icon: '🎉',
                title: 'Enjoy!',
                description: 'Pick up or get it delivered'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="bg-gradient-yellow text-bite-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <div className="text-5xl">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-bite-yellow mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-bite-black-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            <span className="text-gradient">Frequently Asked Questions</span>
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                question: 'Where can I find you?',
                answer: 'We attend various food festivals and events! Follow us on Instagram to know our next location.'
              },
              {
                question: 'Do you deliver?',
                answer: 'Yes! Delivery options depend on the event location. DM us for details.'
              },
              {
                question: 'Can I customize my order?',
                answer: 'Absolutely! Let us know your preferences when you order.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept cash and all major digital payment methods.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-bite-black rounded-2xl p-6 border border-bite-yellow/20"
              >
                <h3 className="text-xl font-bold text-bite-yellow mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
