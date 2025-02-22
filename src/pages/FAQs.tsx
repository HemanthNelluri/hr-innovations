
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
                <p className="mb-4">At HR Innovations, we believe in transforming the workplace experience. Our services include:</p>
                <ul className="space-y-3">
                  <li className="pl-4 border-l-2 border-primary">
                    <strong>Comprehensive Talent Acquisition:</strong> We use advanced AI tools to match the right candidates to the right roles, ensuring a perfect fit.
                  </li>
                  <li className="pl-4 border-l-2 border-primary">
                    <strong>Employee Development Programs:</strong> We offer customized training and development programs designed to enhance skills and promote career growth.
                  </li>
                  <li className="pl-4 border-l-2 border-primary">
                    <strong>HR Consulting:</strong> Our expert consultants provide strategic advice on organizational development, compliance, and HR best practices.
                  </li>
                  <li className="pl-4 border-l-2 border-primary">
                    <strong>Employee Well-being Initiatives:</strong> We implement wellness programs that promote physical, mental, and emotional health.
                  </li>
                  <li className="pl-4 border-l-2 border-primary">
                    <strong>Tech-Driven HR Solutions:</strong> From automated payroll systems to AI-driven performance reviews, we leverage cutting-edge technology to streamline HR processes.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                How do you ensure project success?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="mb-4">Success is in our DNA. We ensure project success by:</p>
                <ul className="space-y-3">
                  <li className="pl-4 border-l-2 border-primary">
                    <strong>Personalized Approach:</strong> We tailor our solutions to meet the unique needs of each client, ensuring relevance and effectiveness.
                  </li>
                  <li className="pl-4 border-l-2 border-primary">
                    <strong>Data-Driven Decisions:</strong> Our strategies are backed by robust data analytics and insights, allowing us to make informed decisions.
                  </li>
                  <li className="pl-4 border-l-2 border-primary">
                    <strong>Collaborative Process:</strong> We work closely with our clients, fostering a collaborative environment where feedback is valued and incorporated.
                  </li>
                  <li className="pl-4 border-l-2 border-primary">
                    <strong>Continuous Improvement:</strong> We adopt an iterative approach, constantly refining our methods and solutions based on real-time feedback and results.
                  </li>
                  <li className="pl-4 border-l-2 border-primary">
                    <strong>Expertise and Innovation:</strong> Our team of seasoned professionals brings a wealth of experience and innovative thinking to every project.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                What industries do you serve?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="mb-4">HR Innovations proudly serves a diverse range of industries, including:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="pl-4 border-l-2 border-primary">Technology and IT</li>
                  <li className="pl-4 border-l-2 border-primary">Healthcare and Pharmaceuticals</li>
                  <li className="pl-4 border-l-2 border-primary">Financial Services</li>
                  <li className="pl-4 border-l-2 border-primary">Manufacturing and Engineering</li>
                  <li className="pl-4 border-l-2 border-primary">Retail and E-commerce</li>
                  <li className="pl-4 border-l-2 border-primary">Education and Non-profits</li>
                  <li className="pl-4 border-l-2 border-primary">Hospitality and Tourism</li>
                  <li className="pl-4 border-l-2 border-primary">Construction and Real Estate</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                How long does a typical project take?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p>
                  We approach each project with agile methodology, which allows us to seamlessly adapt and evolve to meet our customers' expectations. It's not about rigid timelines; it's about creating a dynamic environment where collaboration, innovation, and flexibility thrive. By focusing on continuous improvement and delivering value at every stage, we ensure that the final product is not just satisfactory but truly exceptional.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQs;
