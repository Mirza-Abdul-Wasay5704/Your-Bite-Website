import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-bite-black via-bite-yellow/5 to-bite-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl font-bold mb-6"
          >
            <span className="text-gradient">About Your Bite</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            Where flavor meets fun, one bite at a time 🍔✨
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-bite-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/your_story.jpg" 
                  alt="Your Bite Story" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-bite-yellow mb-6">Our Story</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                Your Bite started with a simple dream: to bring authentic, delicious street food 
                to food festivals and events across the city. What began as a passion project has 
                grown into a beloved brand known for serving bites that truly feel right.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We believe that great food doesn't have to be complicated. With fresh ingredients, 
                bold flavors, and a whole lot of love, we create memorable experiences one bite at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-bite-black-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-bite-black rounded-2xl p-8 border border-bite-yellow/20 card-hover"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-yellow p-4 rounded-full mr-4">
                  <span className="text-4xl">👁️</span>
                </div>
                <h2 className="text-3xl font-bold text-bite-yellow">Our Vision</h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                To bring flavor, freshness, and fun to every street we visit. We envision a world 
                where quality street food is accessible to everyone, creating moments of joy and 
                satisfaction with every bite we serve.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-bite-yellow/10 text-bite-yellow rounded-full text-sm">
                  Quality
                </span>
                <span className="px-3 py-1 bg-bite-yellow/10 text-bite-yellow rounded-full text-sm">
                  Innovation
                </span>
                <span className="px-3 py-1 bg-bite-yellow/10 text-bite-yellow rounded-full text-sm">
                  Community
                </span>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-bite-black rounded-2xl p-8 border border-bite-yellow/20 card-hover"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-yellow p-4 rounded-full mr-4">
                  <span className="text-4xl">🎯</span>
                </div>
                <h2 className="text-3xl font-bold text-bite-yellow">Our Mission</h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                To serve bites that feel right — fast, flavorful, and made with love. We're committed 
                to using fresh ingredients, maintaining the highest standards of hygiene, and creating 
                food that brings smiles to faces at every event we attend.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-bite-yellow/10 text-bite-yellow rounded-full text-sm">
                  Fast Service
                </span>
                <span className="px-3 py-1 bg-bite-yellow/10 text-bite-yellow rounded-full text-sm">
                  Fresh Food
                </span>
                <span className="px-3 py-1 bg-bite-yellow/10 text-bite-yellow rounded-full text-sm">
                  Made with Love
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-bite-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-center mb-16"
          >
            <span className="text-gradient">What We Stand For</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌟',
                title: 'Excellence',
                description: 'We never compromise on quality, taste, or service'
              },
              {
                icon: '🤝',
                title: 'Integrity',
                description: 'Honest ingredients, transparent practices, genuine care'
              },
              {
                icon: '💡',
                title: 'Innovation',
                description: 'Constantly evolving our menu to surprise and delight'
              },
              {
                icon: '🌱',
                title: 'Freshness',
                description: 'Only the freshest ingredients make it to your plate'
              },
              {
                icon: '🎊',
                title: 'Fun',
                description: 'Food should be an experience, not just a meal'
              },
              {
                icon: '👥',
                title: 'Community',
                description: 'Building connections through food, one event at a time'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-bite-black-light rounded-2xl p-8 text-center border border-bite-yellow/20 card-hover"
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-bite-yellow mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-bite-black via-bite-yellow/5 to-bite-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Join the Your Bite Family! 🎉
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Follow us on Instagram to stay updated on our latest menu items and locations
            </p>
            <motion.a
              href="https://www.instagram.com/your_bite_official/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-yellow text-bite-black text-lg font-bold py-3 px-8 rounded-full shadow-lg"
            >
              Follow Us on Instagram 📷
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
