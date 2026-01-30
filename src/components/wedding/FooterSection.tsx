import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="py-12 px-4 bg-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Thank you message */}
        <div className="mb-8">
          <h3 className="font-script text-3xl text-primary mb-3">Terima Kasih</h3>
          <p className="text-muted-foreground max-w-md mx-auto font-light">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
          </p>
        </div>

        {/* Couple names */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="font-script text-2xl text-primary">Dika</span>
          <Heart className="w-5 h-5 text-primary fill-primary" />
          <span className="font-script text-2xl text-primary">Putri</span>
        </div>

        {/* Decorative line */}
        <div className="w-24 h-px bg-border mx-auto mb-6" />

        {/* Wassalam */}
        <p className="text-muted-foreground text-sm mb-4">
          Wassalamualaikum Wr. Wb.
        </p>

        {/* Credits */}
        <p className="text-xs text-muted-foreground/60">
          © 2025 • Made with <Heart className="w-3 h-3 inline-block text-primary fill-primary" /> for Dika & Putri
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
