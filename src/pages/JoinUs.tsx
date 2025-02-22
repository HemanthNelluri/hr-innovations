
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Globe, Heart, Rocket, Users } from "lucide-react";

const JoinUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Join Our Mission
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Together, we can make the internet more accessible and powerful for small and medium businesses. Join us in shaping the future of digital transformation.
          </p>
        </motion.div>

        {/* Mission Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Globe className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
            <p className="text-gray-600">Help SMBs across the globe reach their full potential in the digital world.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Code className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">Build cutting-edge solutions that transform how businesses operate online.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Users className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Great Team</h3>
            <p className="text-gray-600">Work with passionate individuals who care about making a difference.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Heart className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Purpose-Driven</h3>
            <p className="text-gray-600">Be part of a mission that matters and creates real impact.</p>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        >
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Join Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <Rocket className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Career Growth</h3>
                  <p className="text-gray-600">Continuous learning and development opportunities</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Flexible Work</h3>
                  <p className="text-gray-600">Remote-first culture with flexible hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Heart className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Health & Wellness</h3>
                  <p className="text-gray-600">Comprehensive health coverage and wellness programs</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join us in our mission to empower SMBs with innovative digital solutions.
          </p>
          <div className="space-x-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => window.location.href = '/contact'}
            >
              Apply Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/why-us'}
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JoinUs;
