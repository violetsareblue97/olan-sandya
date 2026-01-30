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

const WishesContent = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [wishes, setWishes] = useState<Wish[]>([
    {
      id: '1',
      name: 'Budi Santoso',
      message: 'Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah 💕',
      timestamp: new Date('2025-01-28'),
    },
    {
      id: '2',
      name: 'Siti Nurhaliza',
      message: 'Barakallah untuk Dika & Putri! Semoga pernikahan kalian dipenuhi kebahagiaan 🌸',
      timestamp: new Date('2025-01-27'),
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
    <div className="space-y-4">
      <p className="text-center text-muted-foreground text-sm">
        Berikan ucapan terbaik untuk pengantin
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          placeholder="Nama Anda"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-border focus:border-primary"
        />
        <Textarea
          placeholder="Tulis ucapan dan doa..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="border-border focus:border-primary resize-none"
        />
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          <Send className="w-4 h-4 mr-2" />
          Kirim Ucapan
        </Button>
      </form>

      {/* Wishes list */}
      <div className="space-y-3 max-h-48 overflow-y-auto">
        {wishes.map((wish, index) => (
          <motion.div
            key={wish.id}
            className="bg-muted/50 rounded-lg p-3"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm text-foreground">{wish.name}</h4>
                  <span className="text-xs text-muted-foreground">
                    {wish.timestamp.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{wish.message}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WishesContent;
