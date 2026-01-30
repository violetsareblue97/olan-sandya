import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="flex flex-col items-center"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-xl shadow-card w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-2">
        <span className="font-display text-2xl md:text-3xl text-primary font-semibold">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-sm text-muted-foreground font-light">{label}</span>
    </motion.div>
  );

  return (
    <div className="py-8 px-4">
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-muted-foreground tracking-wider uppercase mb-2">Menghitung Hari</p>
        <h3 className="font-display text-2xl text-foreground">Menuju Hari Bahagia</h3>
      </motion.div>

      <motion.div
        className="flex justify-center gap-3 md:gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <TimeBlock value={timeLeft.days} label="Hari" />
        <TimeBlock value={timeLeft.hours} label="Jam" />
        <TimeBlock value={timeLeft.minutes} label="Menit" />
        <TimeBlock value={timeLeft.seconds} label="Detik" />
      </motion.div>
    </div>
  );
};

export default CountdownTimer;
