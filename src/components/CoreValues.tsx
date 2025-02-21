
import { motion } from "framer-motion";

const values = [
  {
    title: "Integrity",
    description: "We maintain the highest standards of honesty and transparency",
  },
  {
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge solutions",
  },
  {
    title: "Customer-Centricity",
    description: "Your success is our priority",
  },
  {
    title: "Excellence",
    description: "We strive for perfection in every project we undertake",
  },
];

const CoreValues = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-gray-600">
            At HR Innovations, we build our foundation on four essential pillars
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
