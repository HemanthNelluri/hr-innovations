
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    // Create and append the script after component mounts
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function() {
        try{
          var f = document.createElement("iframe");
          f.src = 'https://forms.zohopublic.in/adminhrinno1/form/ContactUs/formperma/TyDn5UM6W-_os-SIGwmP8XuAiTRWhaVOqOrE5WTzZEc?zf_rszfm=1';
          f.style.border="none";
          f.style.height="1004px";
          f.style.width="90%";
          f.style.transition="all 0.5s ease";
          f.style.borderRadius="12px";
          f.style.boxShadow="0 4px 24px rgba(0, 0, 0, 0.1)";
          f.setAttribute("aria-label", 'Contact\\x20Us');

          var d = document.getElementById("zf_div_TyDn5UM6W-_os-SIGwmP8XuAiTRWhaVOqOrE5WTzZEc");
          d.appendChild(f);
          window.addEventListener('message', function (){
            var evntData = event.data;
            if( evntData && evntData.constructor == String ){
              var zf_ifrm_data = evntData.split("|");
              if ( zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3 ) {
                var zf_perma = zf_ifrm_data[0];
                var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
                var iframe = document.getElementById("zf_div_TyDn5UM6W-_os-SIGwmP8XuAiTRWhaVOqOrE5WTzZEc").getElementsByTagName("iframe")[0];
                if ( (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
                  var prevIframeHeight = iframe.style.height;
                  var zf_tout = false;
                  if( zf_ifrm_data.length == 3 ) {
                    iframe.scrollIntoView();
                    zf_tout = true;
                  }
                  if ( prevIframeHeight != zf_ifrm_ht_nw ) {
                    if( zf_tout ) {
                      setTimeout(function(){
                        iframe.style.height = zf_ifrm_ht_nw;
                      },500);
                    } else {
                      iframe.style.height = zf_ifrm_ht_nw;
                    }
                  }
                }
              }
            }
          }, false);
        }catch(e){}
      })();
    `;

    // Clean up function to remove the script when component unmounts
    return () => {
      const scriptElements = document.querySelectorAll('script');
      scriptElements.forEach(scriptEl => {
        if (scriptEl.innerHTML.includes('zf_div_TyDn5UM6W-_os-SIGwmP8XuAiTRWhaVOqOrE5WTzZEc')) {
          scriptEl.remove();
        }
      });
    };
  }, []);

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
          className="max-w-4xl mx-auto mt-16 flex justify-center"
        >
          <div id="zf_div_TyDn5UM6W-_os-SIGwmP8XuAiTRWhaVOqOrE5WTzZEc" 
            className="w-full bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex justify-center overflow-hidden"
          >
            {/* The iframe will be injected here by the script */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
