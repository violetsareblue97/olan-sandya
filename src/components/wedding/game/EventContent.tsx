import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EventContent = () => {
  const events = [
    {
      title: 'Akad Nikah',
      date: 'Sabtu, 15 Februari 2025',
      time: '08.00 - 10.00 WIB',
      venue: 'Masjid Al-Falah',
      address: 'Jl. Sudirman No. 123, Jakarta Selatan',
      mapsLink: 'https://maps.google.com/?q=Masjid+Al-Falah+Jakarta',
    },
    {
      title: 'Resepsi',
      date: 'Sabtu, 15 Februari 2025',
      time: '11.00 - 14.00 WIB',
      venue: 'Grand Ballroom Hotel Mulia',
      address: 'Jl. Asia Afrika No. 456, Jakarta Pusat',
      mapsLink: 'https://maps.google.com/?q=Hotel+Mulia+Jakarta',
    },
  ];

  return (
    <div className="space-y-4">
      <p className="text-center text-muted-foreground text-sm mb-4">
        Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir
      </p>

      {events.map((event, index) => (
        <motion.div
          key={event.title}
          className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-xl p-4 border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <h3 className="font-script text-2xl text-primary text-center mb-3">{event.title}</h3>
          
          <div className="space-y-2 text-center">
            <div className="flex items-center justify-center gap-2 text-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="font-elegant">{event.date}</span>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>{event.time}</span>
            </div>

            <div className="pt-2 border-t border-border/50 mt-3">
              <div className="flex items-center justify-center gap-2 text-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium">{event.venue}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{event.address}</p>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="w-full mt-3 border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => window.open(event.mapsLink, '_blank')}
          >
            <MapPin className="w-4 h-4 mr-2" />
            Lihat di Maps
          </Button>
        </motion.div>
      ))}

      {/* Countdown */}
      <div className="text-center pt-4">
        <p className="text-xs text-muted-foreground">Menghitung hari menuju</p>
        <p className="font-script text-xl text-primary">Hari Bahagia</p>
      </div>
    </div>
  );
};

export default EventContent;
