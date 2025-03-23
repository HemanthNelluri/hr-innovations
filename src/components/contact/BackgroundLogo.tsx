
import { motion } from "framer-motion";

const BackgroundLogo = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
      <motion.img 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        src="/lovable-uploads/bd84d8d9-cdc0-4390-a933-da7b0f4f150e.png" 
        alt="HR Innovations Logo" 
        className="w-[600px] h-auto"
      />
    </div>
  );
};

export default BackgroundLogo;
