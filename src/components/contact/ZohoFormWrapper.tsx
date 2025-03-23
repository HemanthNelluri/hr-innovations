
import { motion } from "framer-motion";
import { useEffect } from "react";

const ZohoFormWrapper = () => {
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

    document.body.appendChild(script);

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-4xl mx-auto mt-16 flex justify-center"
    >
      <div 
        id="zf_div_TyDn5UM6W-_os-SIGwmP8XuAiTRWhaVOqOrE5WTzZEc" 
        className="w-full bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex justify-center overflow-hidden"
      >
        {/* The iframe will be injected here by the script */}
      </div>
    </motion.div>
  );
};

export default ZohoFormWrapper;
