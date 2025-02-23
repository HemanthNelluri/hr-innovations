
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/bd84d8d9-cdc0-4390-a933-da7b0f4f150e.png" 
              alt="HR Innovations Logo" 
              className="h-8 w-auto"
            />
          </Link>
          <div className="hidden sm:flex space-x-8">
            {["Why Us", "Join Us", "Contact", "FAQs"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
