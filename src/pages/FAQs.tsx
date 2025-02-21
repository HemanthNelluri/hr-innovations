
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto mt-16"
        >
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                What services does HR Innovations offer?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                HR Innovations provides comprehensive HR solutions including recruitment and talent acquisition, HR policy development, employee training and development, performance management systems, HR compliance consulting, and HR technology implementation. We also offer specialized services in organizational development and workplace culture transformation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                How do you ensure project success?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                We ensure project success through a comprehensive approach that includes detailed initial assessment, clear project milestones, regular client communication, and continuous monitoring of KPIs. Our experienced team follows industry best practices and uses advanced HR analytics to track progress and make data-driven decisions. We also provide regular progress reports and maintain transparent communication throughout the project lifecycle.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                What industries do you serve?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                We serve a diverse range of industries including technology, healthcare, manufacturing, retail, financial services, and professional services. Our solutions are tailored to meet the specific HR challenges and requirements of each industry, while incorporating industry-specific compliance requirements and best practices.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                How long does a typical project take?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Project timelines vary depending on scope and complexity. Small-scale implementations typically take 4-6 weeks, while comprehensive HR transformations may take 3-6 months. During our initial consultation, we'll provide a detailed project timeline based on your specific requirements and objectives. We always aim to deliver efficient solutions while ensuring quality and thoroughness.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                Do you provide ongoing support?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Yes, we offer comprehensive ongoing support through various service packages. This includes regular system maintenance, updates to HR policies and procedures, continuous training support, periodic reviews and assessments, and dedicated customer support. We also provide emergency consultation services for urgent HR matters.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQs;
