
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const WhyUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <img 
          src="/lovable-uploads/bd84d8d9-cdc0-4390-a933-da7b0f4f150e.png" 
          alt="HR Innovations Logo" 
          className="w-[600px] h-auto"
        />
      </div>
      <div className="pt-24 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1EAEDB] to-[#ea384c]">
            Our Edge Over the Competition
          </h1>
          <p className="text-xl text-gray-600">
            Transforming Your Business Through Innovation
          </p>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl mx-auto mt-16 bg-white rounded-xl shadow-sm p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-[#1EAEDB]">Leadership</h2>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-64 h-64 rounded-lg overflow-hidden shadow-lg flex-shrink-0"
            >
              <img 
                src="/lovable-uploads/fd5a99e6-14c7-4f6d-9fac-462457abc1ae.png" 
                alt="Hemanth - CTO and Founder" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#1EAEDB] mb-1">HEMANTH</h3>
              <p className="text-lg font-medium text-gray-700 mb-4">Founder & CTO, HR Innovations</p>
              <p className="text-gray-600 mb-4">
                With two years of experience in technology, Hemanth leads HR Innovations with a focus on delivering 
                innovative web solutions. As a new startup, we bring fresh perspectives and agile approaches to 
                digital challenges faced by small and medium businesses.
              </p>
              <p className="text-gray-600">
                Hemanth has worked on various projects including NAS implementation and developing steganography 
                programs for WLAN security. At HR Innovations, we specialize in developing W3 sites and are committed 
                to helping businesses establish effective online presences while prioritizing privacy and data security.
                As a young company, we're focused on building strong client relationships and delivering tailored solutions 
                that grow with your business needs.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-10 bg-white rounded-xl shadow-sm p-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-[#1EAEDB]">Our Core Values</h2>
          
          <p className="text-lg mb-8">
            At HR Innovations, we build our foundation on four essential pillars:
          </p>
          
          <ul className="space-y-6">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-start"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 text-[#1EAEDB]">Integrity</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of honesty and transparency
                </p>
              </div>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-start"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 text-[#1EAEDB]">Innovation</h3>
                <p className="text-gray-600">
                  We constantly push boundaries to deliver cutting-edge solutions
                </p>
              </div>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-start"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 text-[#1EAEDB]">Customer-Centricity</h3>
                <p className="text-gray-600">
                  Your success is our priority
                </p>
              </div>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-start"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 text-[#1EAEDB]">Excellence</h3>
                <p className="text-gray-600">
                  We strive for perfection in every project we undertake
                </p>
              </div>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUs;
