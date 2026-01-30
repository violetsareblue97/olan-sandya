import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from '@/components/wedding/LoadingScreen';
import CoverPage from '@/components/wedding/CoverPage';
import GameMapPage from '@/components/wedding/GameMapPage';
import MusicPlayer from '@/components/wedding/MusicPlayer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showCover, setShowCover] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Get guest name from URL
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get('code') || 'Tamu Undangan';

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleOpenInvitation = () => {
    setShowCover(false);
    setShowContent(true);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isLoading && showCover && (
          <CoverPage
            key="cover"
            guestName={guestName}
            onOpenInvitation={handleOpenInvitation}
          />
        )}
      </AnimatePresence>

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen"
        >
          <GameMapPage guestName={guestName} />
          <MusicPlayer />
        </motion.div>
      )}
    </div>
  );
};

export default Index;
