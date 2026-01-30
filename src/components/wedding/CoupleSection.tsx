import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface CoupleProfile {
  name: string;
  fullName: string;
  parents: string;
  image: string;
  instagram?: string;
}

interface CoupleSectionProps {
  bride: CoupleProfile;
  groom: CoupleProfile;
}

const CoupleSection = ({ bride, groom }: CoupleSectionProps) => {
  const ProfileCard = ({ person, delay }: { person: CoupleProfile; delay: number }) => (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
    >
      {/* Photo frame */}
      <div className="relative inline-block mb-4">
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-elevated mx-auto">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Decorative ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 scale-110" />
      </div>

      {/* Name */}
      <h3 className="font-script text-3xl text-primary mb-1">{person.name}</h3>
      <p className="font-elegant text-lg text-foreground mb-3">{person.fullName}</p>
      
      {/* Parents */}
      <p className="text-sm text-muted-foreground font-light">
        {person.parents}
      </p>

      {/* Instagram link */}
      {person.instagram && (
        <a
          href={`https://instagram.com/${person.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-3 text-sm text-primary hover:underline"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          @{person.instagram}
        </a>
      )}
    </motion.div>
  );

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-white">
      {/* Section header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-muted-foreground tracking-wider uppercase mb-2">
          Bismillahirrahmanirrahim
        </p>
        <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
          Assalamualaikum Wr. Wb.
        </h2>
        <p className="text-muted-foreground font-elegant text-lg max-w-md mx-auto">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan acara pernikahan kami:
        </p>
      </motion.div>

      {/* Couple profiles */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <ProfileCard person={groom} delay={0.2} />
        
        {/* Heart divider */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring" }}
        >
          <div className="relative">
            <Heart className="w-10 h-10 text-primary fill-primary" />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-10 h-10 text-primary/30 fill-primary/30" />
            </motion.div>
          </div>
        </motion.div>

        <ProfileCard person={bride} delay={0.3} />
      </div>

      {/* Verse */}
      <motion.div
        className="mt-12 text-center max-w-lg mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p className="font-elegant text-lg italic text-muted-foreground">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."
        </p>
        <p className="mt-3 text-sm text-primary font-medium">— QS. Ar-Rum: 21</p>
      </motion.div>
    </section>
  );
};

export default CoupleSection;
