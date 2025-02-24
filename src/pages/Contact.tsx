
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Building2, Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectRequirements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      projectRequirements: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
            <Mail className="w-16 h-16 text-[#1EAEDB] animate-pulse" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1EAEDB] via-[#4a90e2] to-[#ea384c]">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                <div className="relative">
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="pl-10 bg-white/50 backdrop-blur-sm focus:bg-white transition-colors"
                  />
                  <MessageSquare className="w-5 h-5 text-[#1EAEDB] absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-2"
              >
                <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="pl-10 bg-white/50 backdrop-blur-sm focus:bg-white transition-colors"
                  />
                  <Mail className="w-5 h-5 text-[#1EAEDB] absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-2"
              >
                <Label htmlFor="company" className="text-gray-700">Company Name</Label>
                <div className="relative">
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                    required
                    className="pl-10 bg-white/50 backdrop-blur-sm focus:bg-white transition-colors"
                  />
                  <Building2 className="w-5 h-5 text-[#1EAEDB] absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-2"
              >
                <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                <div className="relative">
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="pl-10 bg-white/50 backdrop-blur-sm focus:bg-white transition-colors"
                  />
                  <Phone className="w-5 h-5 text-[#1EAEDB] absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-2"
              >
                <Label htmlFor="projectRequirements" className="text-gray-700">Project Requirements</Label>
                <Textarea
                  id="projectRequirements"
                  name="projectRequirements"
                  value={formData.projectRequirements}
                  onChange={handleChange}
                  placeholder="Please describe your project requirements and goals..."
                  className="min-h-[150px] bg-white/50 backdrop-blur-sm focus:bg-white transition-colors"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#1EAEDB] to-[#ea384c] hover:from-[#1EAEDB] hover:to-[#ea384c] hover:opacity-90 text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
