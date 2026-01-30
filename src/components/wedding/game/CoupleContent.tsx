import { motion } from 'framer-motion';
import { Heart, Instagram } from 'lucide-react';
import groomImage from '@/assets/groom.jpg';
import brideImage from '@/assets/bride.jpg';

const CoupleContent = () => {
  const profiles = [
    {
      name: 'Dika',
      fullName: 'Muhammad Dika Pratama, S.Kom',
      parents: 'Putra dari Bapak H. Ahmad Pratama & Ibu Hj. Siti Aminah',
      image: groomImage,
      instagram: 'dika.pratama',
    },
    {
      name: 'Putri',
      fullName: 'Putri Aruma Sari, S.Pd',
      parents: 'Putri dari Bapak H. Bambang Sari & Ibu Hj. Dewi Rahayu',
      image: brideImage,
      instagram: 'putri.aruma',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-2">Bismillahirrahmanirrahim</p>
        <p className="font-elegant text-muted-foreground leading-relaxed">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan acara pernikahan kami:
        </p>
      </div>

      {/* Profiles */}
      <div className="space-y-6">
        {profiles.map((person, index) => (
          <motion.div
            key={person.name}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Photo */}
            <div className="relative inline-block mb-3">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg mx-auto">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 scale-110" />
            </div>

            {/* Name */}
            <h3 className="font-script text-2xl text-primary mb-1">{person.name}</h3>
            <p className="font-elegant text-foreground mb-2">{person.fullName}</p>
            <p className="text-xs text-muted-foreground">{person.parents}</p>

            {/* Instagram */}
            <a
              href={`https://instagram.com/${person.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-2 text-sm text-primary hover:underline"
            >
              <Instagram className="w-4 h-4" />
              @{person.instagram}
            </a>

            {/* Divider between profiles */}
            {index === 0 && (
              <div className="flex items-center justify-center my-4">
                <div className="w-12 h-px bg-border" />
                <Heart className="w-5 h-5 mx-3 text-primary fill-primary" />
                <div className="w-12 h-px bg-border" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoupleContent;
