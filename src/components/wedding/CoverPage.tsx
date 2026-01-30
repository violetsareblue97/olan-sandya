import { motion } from 'framer-motion';
import { Heart, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CoverPageProps {
  guestName: string;
  onOpenInvitation: () => void;
}

const CoverPage = ({ guestName, onOpenInvitation }: CoverPageProps) => {
  return (
    <motion.div
      className="min-h-screen gradient-coral flex flex-col items-center justify-center relative overflow-hidden px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Heart className="w-4 h-4 text-white/40 fill-white/30" />
          </motion.div>
        ))}
      </div>

      {/* Envelope bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 400 180" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,180 L0,40 L200,130 L400,40 L400,180 Z"
            fill="white"
            stroke="hsl(25 70% 80% / 0.5)"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
        </svg>
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center mb-24"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {/* The Wedding of */}
        <motion.p
          className="text-white/90 text-sm tracking-[0.2em] mb-4 uppercase font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          The Wedding of
        </motion.p>

        {/* Couple names */}
        <motion.h1
          className="font-script text-5xl md:text-6xl text-white mb-2"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Dika & Putri
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          className="flex items-center justify-center gap-3 my-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="w-16 h-px bg-white/60" />
          <Heart className="w-4 h-4 text-white fill-white" />
          <div className="w-16 h-px bg-white/60" />
        </motion.div>

        {/* Date and location */}
        <motion.div
          className="space-y-2 text-white/90"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <p className="text-lg font-elegant tracking-wide">Sabtu, 15 Februari 2025</p>
          <div className="flex items-center justify-center gap-1 text-sm">
            <MapPin className="w-4 h-4" />
            <span className="font-light">Jakarta, Indonesia</span>
          </div>
        </motion.div>

        {/* Guest name */}
        <motion.div
          className="mt-10 bg-white/20 backdrop-blur-sm rounded-xl py-4 px-6 inline-block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3 }}
        >
          <p className="text-white/80 text-xs tracking-wider mb-1">Kepada Yth.</p>
          <p className="text-white text-lg font-medium">{guestName}</p>
        </motion.div>

        {/* Open button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Button
            onClick={onOpenInvitation}
            className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-full font-medium shadow-elevated transition-all duration-300 hover:scale-105 animate-pulse-glow"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              Buka Undangan
            </span>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CoverPage;
