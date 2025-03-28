
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, FilePdf } from "lucide-react";

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
          <a 
            href="/capability-statement.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1EAEDB] text-white px-6 py-3 rounded-lg hover:bg-[#0FA0CE] transition-colors"
          >
            <FilePdf className="h-5 w-5" />
            Download Capability Statement
          </a>
          <Link to="/contact">
            <button className="border border-[#ea384c] text-[#ea384c] px-8 py-3 rounded-lg hover:bg-[#ea384c] hover:text-white transition-colors">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-12 max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8"
      >
        <div className="flex flex-col md:flex-row items-center mb-6">
          <img 
            src="/lovable-uploads/561e1448-4c8c-4349-811e-a8d23622769c.png" 
            alt="HR Innovations Logo" 
            className="h-16 mb-4 md:mb-0 md:mr-6"
          />
          <h2 className="text-3xl font-bold text-gray-800">Capability Statement</h2>
        </div>

        <div className="text-left space-y-4">
          <p className="text-lg text-red-600 font-semibold">
            At HR Innovations, we leverage cutting-edge technology and expertise in digital solutions to empower businesses of all sizes. Our capabilities include:
          </p>
          
          <div className="space-y-3">
            <p className="text-lg"><span className="text-blue-600 font-semibold">Web Design & Development:</span> We craft intuitive, user-friendly websites that meet the evolving needs of your customers.</p>
            
            <p className="text-lg"><span className="text-blue-600 font-semibold">Digital Marketing Solutions:</span> Our team of experts specializes in:</p>
            <ul className="list-disc pl-8 space-y-1">
              <li className="text-gray-700">SEO Management: Optimizing your online presence to increase visibility and drive organic traffic.</li>
              <li className="text-gray-700">Google Maps Listings: Enhancing your visibility in local search results and driving more foot traffic.</li>
              <li className="text-gray-700">Social Media Marketing: Leveraging social media platforms to amplify your brand, engage with your audience, and drive conversions.</li>
            </ul>
            
            <p className="text-lg"><span className="text-blue-600 font-semibold">E-commerce Solutions:</span> We help you establish a seamless online shopping experience.</p>
            
            <p className="text-lg"><span className="text-blue-600 font-semibold">Digital Transformation:</span> Our team partners with you to:</p>
            <ul className="list-disc pl-8 space-y-1">
              <li className="text-gray-700">Streamline Processes: Automating and optimizing workflows for greater productivity and efficiency.</li>
              <li className="text-gray-700">Improve Communication: Empowering your teams with collaborative tools and seamless digital communication.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
