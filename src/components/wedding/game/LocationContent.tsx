import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocationContent = () => {
  const locations = [
    {
      title: 'Akad Nikah',
      venue: 'Masjid Al-Falah',
      address: 'Jl. Sudirman No. 123, Jakarta Selatan',
      mapsLink: 'https://maps.google.com/?q=Masjid+Al-Falah+Jakarta',
      time: '08.00 WIB',
    },
    {
      title: 'Resepsi',
      venue: 'Grand Ballroom Hotel Mulia',
      address: 'Jl. Asia Afrika No. 456, Jakarta Pusat',
      mapsLink: 'https://maps.google.com/?q=Hotel+Mulia+Jakarta',
      time: '11.00 WIB',
    },
  ];

  return (
    <div className="space-y-4">
      <p className="text-center text-muted-foreground text-sm">
        Lokasi acara pernikahan kami
      </p>

      {locations.map((location, index) => (
        <motion.div
          key={location.title}
          className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-xl p-4 border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-script text-xl text-primary">{location.title}</h3>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  {location.time}
                </span>
              </div>
              <p className="font-medium text-foreground mt-1">{location.venue}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{location.address}</p>
            </div>
          </div>
          
          <div className="flex gap-2 mt-3">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => window.open(location.mapsLink, '_blank')}
            >
              <Navigation className="w-4 h-4 mr-2" />
              Petunjuk Arah
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-primary"
              onClick={() => window.open(location.mapsLink, '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      ))}

      {/* Embedded Map placeholder */}
      <div className="rounded-xl overflow-hidden border border-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.29279955498!2d106.7588278!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2s!4v1706000000000!5m2!1sen!2s"
          width="100%"
          height="150"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default LocationContent;
