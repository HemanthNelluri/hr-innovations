
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
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-8 text-[#1EAEDB]">Our Approach</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We take a holistic, consultative approach that addresses all operational facets of your business. 
                  By understanding your unique challenges and goals, we develop tailored strategies that streamline 
                  processes and drive sustainable growth.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our commitment to excellence ensures that every solution we deliver is scalable, efficient, and 
                  aligned with your business objectives. We stay current with the latest industry trends and 
                  algorithm updates to keep your digital presence competitive.
                </p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="lg:w-96 flex-shrink-0"
              >
                <div className="relative bg-gradient-to-br from-[#1A1F2C] to-[#8B5CF6] p-1 rounded-xl shadow-xl">
                  <img 
                    src="/lovable-uploads/4d69a44f-3e29-47dd-a73e-b426f82d4771.png" 
                    alt="Google Algorithm Ranking Factors 2025" 
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg">
                    <span className="text-xs font-medium text-gray-700">Latest 2025 Updates</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Index;
