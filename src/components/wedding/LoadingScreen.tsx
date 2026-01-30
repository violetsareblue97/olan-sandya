import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gradient-coral overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating hearts decoration */}
      <motion.div
        className="absolute top-20 left-10"
        animate={{ y: [-5, 5, -5], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Heart className="w-8 h-8 text-white/40 fill-white/30" />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-16"
        animate={{ y: [5, -5, 5], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      >
        <Heart className="w-12 h-12 text-white/30 fill-white/20" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 left-16"
        animate={{ y: [-8, 8, -8], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
      >
        <Heart className="w-6 h-6 text-white/50 fill-white/40" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-52 right-10"
        animate={{ y: [6, -6, 6], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
      >
        <Heart className="w-10 h-10 text-white/35 fill-white/25" />
      </motion.div>

      {/* Gift box decorations */}
      <motion.div
        className="absolute top-16 left-8 w-12 h-12 opacity-40"
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="w-full h-full rounded-md border-2 border-white/50 relative">
          <div className="absolute inset-x-0 top-1/2 h-0.5 bg-white/50 -translate-y-1/2" />
          <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/50 -translate-x-1/2" />
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 border-2 border-white/50 rounded-full" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-24 right-12 w-10 h-10 opacity-30"
        animate={{ rotate: [5, -5, 5] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
      >
        <div className="w-full h-full rounded-md border-2 border-white/50 relative">
          <div className="absolute inset-x-0 top-1/2 h-0.5 bg-white/50 -translate-y-1/2" />
          <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/50 -translate-x-1/2" />
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 border-2 border-white/50 rounded-full" />
        </div>
      </motion.div>

      {/* Envelope shape at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 400 200" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,200 L0,50 L200,150 L400,50 L400,200 Z"
            fill="white"
            stroke="hsl(25 70% 80% / 0.5)"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
          <path
            d="M0,50 L200,150 L400,50"
            fill="none"
            stroke="hsl(25 70% 80% / 0.3)"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>
        {/* Ribbons */}
        <div className="absolute bottom-4 left-1/4 w-16 h-16">
          <svg viewBox="0 0 60 60" className="w-full h-full">
            <path
              d="M30,30 Q15,50 5,55 Q15,45 20,30 Q15,15 5,5 Q20,15 30,30"
              fill="hsl(10 85% 70% / 0.4)"
            />
            <path
              d="M30,30 Q45,50 55,55 Q45,45 40,30 Q45,15 55,5 Q40,15 30,30"
              fill="hsl(10 85% 70% / 0.4)"
            />
          </svg>
        </div>
        <div className="absolute bottom-4 right-1/4 w-16 h-16">
          <svg viewBox="0 0 60 60" className="w-full h-full">
            <path
              d="M30,30 Q15,50 5,55 Q15,45 20,30 Q15,15 5,5 Q20,15 30,30"
              fill="hsl(10 85% 70% / 0.4)"
            />
            <path
              d="M30,30 Q45,50 55,55 Q45,45 40,30 Q45,15 55,5 Q40,15 30,30"
              fill="hsl(10 85% 70% / 0.4)"
            />
          </svg>
        </div>
      </div>

      {/* Love birds with string */}
      <motion.div
        className="relative z-10 mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* String */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-white/60 -mt-16" />
        
        {/* Birds container */}
        <motion.div
          className="flex items-center gap-1"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Left bird */}
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 relative">
              {/* Beak */}
              <div className="absolute top-1/2 -right-1 w-3 h-2 bg-orange-300 rounded-r-full -translate-y-1/2" />
              {/* Eye */}
              <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-black rounded-full" />
              {/* Heart on head */}
              <Heart className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 text-red-400 fill-red-400" />
            </div>
          </div>
          
          {/* Right bird */}
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-300 to-teal-400 relative">
              {/* Beak */}
              <div className="absolute top-1/2 -left-1 w-3 h-2 bg-teal-300 rounded-l-full -translate-y-1/2" />
              {/* Eye */}
              <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-black rounded-full" />
              {/* Heart on head */}
              <Heart className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 text-red-400 fill-red-400" />
            </div>
          </div>
        </motion.div>
        
        {/* Perch */}
        <div className="w-16 h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 mx-auto mt-1 rounded-full" />
      </motion.div>

      {/* Loading text */}
      <motion.div
        className="text-white text-xl tracking-[0.3em] font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        LOADING . . .
      </motion.div>

      {/* Auto proceed after animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        onAnimationComplete={() => {
          setTimeout(onComplete, 500);
        }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
