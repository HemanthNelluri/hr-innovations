
import Navigation from "@/components/Navigation";
import ContactHeader from "@/components/contact/ContactHeader";
import ZohoFormWrapper from "@/components/contact/ZohoFormWrapper";
import BackgroundLogo from "@/components/contact/BackgroundLogo";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <Navigation />
      <BackgroundLogo />
      <div className="pt-24 pb-16 px-4">
        <ContactHeader />
        <ZohoFormWrapper />
      </div>
    </div>
  );
};

export default Contact;
