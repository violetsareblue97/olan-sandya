import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Gift, Calendar, Users, Camera, MessageCircle, MapPin, X, Music } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import CoupleContent from './game/CoupleContent';
import EventContent from './game/EventContent';
import GalleryContent from './game/GalleryContent';
import WishesContent from './game/WishesContent';
import GiftContent from './game/GiftContent';
import LocationContent from './game/LocationContent';

interface GameMapPageProps {
  guestName: string;
}

type ContentType = 'couple' | 'event' | 'gallery' | 'wishes' | 'gift' | 'location' | null;

interface GameIcon {
  id: ContentType;
  icon: React.ReactNode;
  label: string;
  position: { top: string; left: string };
  delay: number;
  color: string;
}

const GameMapPage = ({ guestName }: GameMapPageProps) => {
  const [activeContent, setActiveContent] = useState<ContentType>(null);

  const gameIcons: GameIcon[] = [
    {
      id: 'couple',
      icon: <Users className="w-8 h-8" />,
      label: 'Mempelai',
      position: { top: '15%', left: '20%' },
      delay: 0.1,
      color: 'from-pink-400 to-rose-500',
    },
    {
      id: 'event',
      icon: <Calendar className="w-8 h-8" />,
      label: 'Acara',
      position: { top: '15%', left: '70%' },
      delay: 0.2,
      color: 'from-orange-400 to-amber-500',
    },
    {
      id: 'gallery',
      icon: <Camera className="w-8 h-8" />,
      label: 'Galeri',
      position: { top: '40%', left: '50%' },
      delay: 0.3,
      color: 'from-purple-400 to-violet-500',
    },
    {
      id: 'location',
      icon: <MapPin className="w-8 h-8" />,
      label: 'Lokasi',
      position: { top: '40%', left: '15%' },
      delay: 0.4,
      color: 'from-green-400 to-emerald-500',
    },
    {
      id: 'wishes',
      icon: <MessageCircle className="w-8 h-8" />,
      label: 'Ucapan',
      position: { top: '40%', left: '85%' },
      delay: 0.5,
      color: 'from-blue-400 to-cyan-500',
    },
    {
      id: 'gift',
      icon: <Gift className="w-8 h-8" />,
      label: 'Hadiah',
      position: { top: '65%', left: '50%' },
      delay: 0.6,
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  const renderContent = () => {
    switch (activeContent) {
      case 'couple':
        return <CoupleContent />;
      case 'event':
        return <EventContent />;
      case 'gallery':
        return <GalleryContent />;
      case 'wishes':
        return <WishesContent />;
      case 'gift':
        return <GiftContent />;
      case 'location':
        return <LocationContent />;
      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (activeContent) {
      case 'couple':
        return 'Mempelai';
      case 'event':
        return 'Acara Pernikahan';
      case 'gallery':
        return 'Galeri Foto';
      case 'wishes':
        return 'Ucapan & Doa';
      case 'gift':
        return 'Hadiah Digital';
      case 'location':
        return 'Lokasi Acara';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen gradient-coral relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Heart className="w-4 h-4 text-white/30 fill-white/20" />
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <motion.div
        className="text-center pt-8 pb-4 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-white/80 text-xs tracking-[0.3em] uppercase mb-2">The Wedding of</p>
        <h1 className="font-script text-4xl md:text-5xl text-white mb-2">Dika & Putri</h1>
        <p className="text-white/80 text-sm font-elegant">Sabtu, 15 Februari 2025</p>
        
        {/* Guest name badge */}
        <motion.div
          className="mt-4 inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          <p className="text-white text-sm">
            <span className="opacity-70">Kepada:</span> {guestName}
          </p>
        </motion.div>
      </motion.div>

      {/* Game instruction */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-white/90 text-sm px-4">
          ✨ Tap ikon di bawah untuk melihat detail undangan ✨
        </p>
      </motion.div>

      {/* Game Map Container */}
      <div className="relative mx-auto max-w-md px-4" style={{ height: '60vh' }}>
        {/* Connecting lines/paths */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 500">
          <motion.path
            d="M80,75 Q200,150 320,75"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
            strokeDasharray="8 8"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.path
            d="M60,200 Q200,250 340,200"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
            strokeDasharray="8 8"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          />
          <motion.path
            d="M200,75 L200,325"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
            strokeDasharray="8 8"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.9 }}
          />
        </svg>

        {/* Game Icons */}
        {gameIcons.map((item) => (
          <motion.button
            key={item.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ top: item.position.top, left: item.position.left }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: item.delay, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveContent(item.id)}
          >
            {/* Glow effect */}
            <motion.div
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} blur-md opacity-60`}
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Icon container */}
            <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${item.color} shadow-lg flex items-center justify-center text-white`}>
              {item.icon}
            </div>
            
            {/* Label */}
            <p className="text-white text-xs font-medium mt-2 text-center drop-shadow-lg">
              {item.label}
            </p>
          </motion.button>
        ))}

        {/* Center heart decoration */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Heart className="w-20 h-20 text-white/10 fill-white/5" />
        </motion.div>
      </div>

      {/* Footer verse */}
      <motion.div
        className="text-center px-6 py-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="font-elegant text-white/90 text-sm italic leading-relaxed max-w-sm mx-auto">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri..."
        </p>
        <p className="text-white/70 text-xs mt-2">— QS. Ar-Rum: 21</p>
      </motion.div>

      {/* Content Dialog */}
      <Dialog open={activeContent !== null} onOpenChange={() => setActiveContent(null)}>
        <DialogContent className="max-w-md max-h-[85vh] overflow-y-auto bg-white/95 backdrop-blur-md border-none shadow-2xl">
          <DialogHeader>
            <DialogTitle className="font-display text-xl text-primary text-center">
              {getTitle()}
            </DialogTitle>
          </DialogHeader>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeContent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GameMapPage;
