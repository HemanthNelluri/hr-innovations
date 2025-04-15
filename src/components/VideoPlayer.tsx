
import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface VideoPlayerProps {
  src: string;
  title?: string;
  isBackground?: boolean;
}

const VideoPlayer = ({ src, title, isBackground = false }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Auto-play when component mounts if it's a background video
    if (isBackground && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Background video autoplay failed:", error);
      });
    }
  }, [isBackground]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Return different layouts based on whether it's a background video
  if (isBackground) {
    return (
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          className="absolute object-cover w-full h-full"
          src={src}
          title={title}
          muted={isMuted}
          loop
          playsInline
          autoPlay
        />
        <div className="absolute bottom-4 right-4 z-10">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMute}
            className="bg-black/30 text-white hover:bg-black/50 rounded-full"
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </Button>
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>
    );
  }

  // Original video player component for non-background usage
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl"
    >
      <div className="relative">
        <video
          ref={videoRef}
          className="w-full h-auto rounded-lg"
          src={src}
          title={title}
          muted={isMuted}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent flex justify-between items-center">
          <div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMute}
              className="text-white hover:bg-white/20"
            >
              {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
            </Button>
          </div>
          {title && <div className="text-white text-sm font-medium">{title}</div>}
        </div>
      </div>
    </motion.div>
  );
};

export default VideoPlayer;
