
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative">
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
          className="space-y-2 mb-8"
        >
          <Button 
            variant="destructive"
            size="lg" 
            className="mr-4"
            onClick={() => window.open("/capability-statement.pdf", "_blank")}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Capability Statement
          </Button>
          <Link to="/contact">
            <Button variant="destructive">
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
