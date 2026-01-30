import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EventInfo {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapsLink: string;
}

interface EventSectionProps {
  akad: EventInfo;
  resepsi: EventInfo;
}

const EventSection = ({ akad, resepsi }: EventSectionProps) => {
  const EventCard = ({ event, delay }: { event: EventInfo; delay: number }) => (
    <motion.div
      className="bg-white rounded-2xl shadow-card p-6 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
    >
      {/* Title with decorative elements */}
      <div className="relative inline-block mb-4">
        <h3 className="font-script text-3xl text-primary">{event.title}</h3>
        <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      {/* Date */}
      <div className="flex items-center justify-center gap-2 mb-2">
        <Calendar className="w-4 h-4 text-primary" />
        <span className="font-elegant text-lg text-foreground">{event.date}</span>
      </div>

      {/* Time */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="w-4 h-4 text-primary" />
        <span className="text-muted-foreground">{event.time}</span>
      </div>

      {/* Decorative divider */}
      <div className="w-16 h-px bg-border mx-auto my-4" />

      {/* Venue */}
      <div className="mb-4">
        <div className="flex items-center justify-center gap-2 mb-1">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="font-medium text-foreground">{event.venue}</span>
        </div>
        <p className="text-sm text-muted-foreground">{event.address}</p>
      </div>

      {/* Maps button */}
      <Button
        variant="outline"
        size="sm"
        className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
        onClick={() => window.open(event.mapsLink, '_blank')}
      >
        <MapPin className="w-4 h-4 mr-2" />
        Lihat Lokasi
      </Button>
    </motion.div>
  );

  return (
    <section className="py-16 px-4 gradient-coral relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full" />
        <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-white rounded-full" />
      </div>

      {/* Section header */}
      <motion.div
        className="text-center mb-10 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-white/80 text-sm tracking-wider uppercase mb-2">Save The Date</p>
        <h2 className="font-display text-2xl md:text-3xl text-white mb-2">
          Acara Pernikahan
        </h2>
        <p className="text-white/80 font-light">
          Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir
        </p>
      </motion.div>

      {/* Event cards */}
      <div className="max-w-2xl mx-auto grid gap-6 md:grid-cols-2 relative z-10">
        <EventCard event={akad} delay={0.2} />
        <EventCard event={resepsi} delay={0.4} />
      </div>
    </section>
  );
};

export default EventSection;
