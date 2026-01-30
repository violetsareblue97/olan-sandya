import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface MusicPlayerProps {
  audioSrc?: string;
}

const MusicPlayer = ({ audioSrc = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }: MusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={audioSrc} />
      <motion.button
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-white shadow-elevated flex items-center justify-center"
        onClick={togglePlay}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
        >
          {isPlaying ? (
            <Music className="w-6 h-6 text-primary" />
          ) : (
            <VolumeX className="w-6 h-6 text-muted-foreground" />
          )}
        </motion.div>
        
        {/* Pulse effect when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary"
            animate={{ scale: [1, 1.3], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </motion.button>
    </>
  );
};

export default MusicPlayer;
