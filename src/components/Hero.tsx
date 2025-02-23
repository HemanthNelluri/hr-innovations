
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1EAEDB] to-[#ea384c]"
        >
          Transforming Your Business Through Innovation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600 mb-8"
        >
          Crafting beautiful, functional solutions for industries ranging from healthcare to e-commerce.
          Let's bring your vision to life.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-x-4"
        >
          <button className="bg-[#1EAEDB] text-white px-8 py-3 rounded-lg hover:bg-[#0FA0CE] transition-colors">
            Learn More
          </button>
          <button className="border border-[#ea384c] text-[#ea384c] px-8 py-3 rounded-lg hover:bg-[#ea384c] hover:text-white transition-colors">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
