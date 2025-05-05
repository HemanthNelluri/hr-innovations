
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CoreValues from "@/components/CoreValues";
import Services from "@/components/Services";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="relative z-10">
        <Navigation />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <img 
            src="/lovable-uploads/bd84d8d9-cdc0-4390-a933-da7b0f4f150e.png" 
            alt="HR Innovations Logo" 
            className="w-[600px] h-auto"
          />
        </div>
        
        {/* Google Algorithm Ranking Factors Image - Now positioned as a featured element */}
        <div className="mb-24 pt-20 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative bg-gradient-to-br from-[#1A1F2C] to-[#8B5CF6] p-1 rounded-xl shadow-xl"
          >
            <motion.img 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              src="/lovable-uploads/4d69a44f-3e29-47dd-a73e-b426f82d4771.png" 
              alt="Google Algorithm Ranking Factors 2025" 
              className="w-[800px] h-auto rounded-lg"
            />
          </motion.div>
        </div>
        
        <Hero />
        <CoreValues />
        <Services />
        
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-20 bg-white/90 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-[#1EAEDB]">Our Approach</h2>
              <p className="text-gray-600 leading-relaxed">
                We take a holistic, consultative approach that addresses all operational facets of your business. 
                By understanding your unique challenges and goals, we develop tailored strategies that streamline 
                processes and drive sustainable growth. Our commitment to excellence ensures that every solution 
                we deliver is scalable, efficient, and aligned with your business objectives.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Index;
