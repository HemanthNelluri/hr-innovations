
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CoreValues from "@/components/CoreValues";
import Services from "@/components/Services";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-white relative"
      style={{
        backgroundImage: 'url("/lovable-uploads/028c6b24-c0c1-4c47-9463-cf1e51a28e85.png")',
        backgroundSize: '80%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'white'
      }}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <Navigation />
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
