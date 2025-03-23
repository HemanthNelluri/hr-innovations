
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const ContactHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto text-center"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-block mb-6"
      >
        <Mail className="w-16 h-16 text-[#1EAEDB] animate-pulse" />
      </motion.div>
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1EAEDB] via-[#4a90e2] to-[#ea384c]">
        Contact Us
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Let's discuss how we can help transform your business
      </p>
    </motion.div>
  );
};

export default ContactHeader;
