import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface Wish {
  id: string;
  name: string;
  message: string;
  timestamp: Date;
}

const WishesSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [wishes, setWishes] = useState<Wish[]>([
    {
      id: '1',
      name: 'Budi Santoso',
      message: 'Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Barakallahu lakuma wa baraka alaikuma 💕',
      timestamp: new Date('2025-01-28'),
    },
    {
      id: '2',
      name: 'Siti Nurhaliza',
      message: 'Barakallah untuk Dika & Putri! Semoga pernikahan kalian dipenuhi dengan cinta dan kebahagiaan yang abadi 🌸',
      timestamp: new Date('2025-01-27'),
    },
    {
      id: '3',
      name: 'Ahmad Dahlan',
      message: 'Congratulations! Wishing you both a lifetime of love and happiness together. Semoga selalu diberikan kebahagiaan 🎉',
      timestamp: new Date('2025-01-26'),
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) {
      toast({
        title: 'Mohon lengkapi form',
        description: 'Nama dan ucapan tidak boleh kosong',
        variant: 'destructive',
      });
      return;
    }

    const newWish: Wish = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date(),
    };

    setWishes([newWish, ...wishes]);
    setName('');
    setMessage('');

    toast({
      title: 'Terima kasih! 💕',
      description: 'Ucapan Anda telah terkirim',
    });
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-background">
      {/* Section header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-muted-foreground tracking-wider uppercase mb-2">Wedding Wishes</p>
        <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
          Ucapan & Doa
        </h2>
        <p className="text-muted-foreground font-light">
          Berikan ucapan terbaik untuk pengantin
        </p>
      </motion.div>

      <div className="max-w-xl mx-auto">
        {/* Wish form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-card p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <div>
              <Input
                placeholder="Nama Anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-border focus:border-primary"
              />
            </div>
            <div>
              <Textarea
                placeholder="Tulis ucapan dan doa untuk pengantin..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="border-border focus:border-primary resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
            >
              <Send className="w-4 h-4 mr-2" />
              Kirim Ucapan
            </Button>
          </div>
        </motion.form>

        {/* Wishes list */}
        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
          {wishes.map((wish, index) => (
            <motion.div
              key={wish.id}
              className="bg-white rounded-xl shadow-soft p-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-foreground">{wish.name}</h4>
                    <span className="text-xs text-muted-foreground">
                      {wish.timestamp.toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                      })}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{wish.message}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
