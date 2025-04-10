
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Search } from "lucide-react";

const FAQs = () => {
  const faqs = [
    {
      question: "What services does HR Innovations offer?",
      answer: "HR Innovations offers a comprehensive suite of digital transformation services, including strategic consulting, digital roadmaps, business process optimization, and customized transformation strategies."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. Typically, our projects range from 3-6 months, but we work closely with clients to establish realistic timelines that meet their specific needs."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide continuous support and maintenance services after project completion. Our team remains available to address any issues and implement updates as needed."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, retail, manufacturing, and technology. Our solutions are customized to meet industry-specific requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
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
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <HelpCircle className="w-16 h-16 text-[#1EAEDB] animate-pulse" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1EAEDB] via-[#4a90e2] to-[#ea384c]">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and discover how we can help transform your business
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto mt-16 space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Accordion type="single" collapsible className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:bg-blue-50/50 transition-colors rounded-t-lg text-left">
                    <div className="flex items-center gap-3">
                      <Search className="w-5 h-5 text-[#1EAEDB]" />
                      <span className="text-lg font-medium">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-600 bg-gradient-to-r from-blue-50/20 to-transparent">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQs;
