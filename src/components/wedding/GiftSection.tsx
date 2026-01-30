import { motion } from 'framer-motion';
import { Gift, CreditCard, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface GiftAccount {
  bank: string;
  accountNumber: string;
  accountName: string;
  logo?: string;
}

interface GiftSectionProps {
  accounts: GiftAccount[];
}

const GiftSection = ({ accounts }: GiftSectionProps) => {
  const { toast } = useToast();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (accountNumber: string, index: number) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedIndex(index);
    toast({
      title: 'Nomor rekening disalin!',
      description: accountNumber,
    });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="py-16 px-4 gradient-coral relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 opacity-20">
          <Gift className="w-20 h-20 text-white" />
        </div>
      </div>

      {/* Section header */}
      <motion.div
        className="text-center mb-10 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-white/80 text-sm tracking-wider uppercase mb-2">Wedding Gift</p>
        <h2 className="font-display text-2xl md:text-3xl text-white mb-2">
          Hadiah Pernikahan
        </h2>
        <p className="text-white/80 font-light max-w-md mx-auto">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun, jika Anda ingin memberikan hadiah, kami menyediakan amplop digital.
        </p>
      </motion.div>

      {/* Gift cards */}
      <div className="max-w-md mx-auto space-y-4 relative z-10">
        {accounts.map((account, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-card p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <CreditCard className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">{account.bank}</p>
                <p className="text-lg font-semibold text-primary">{account.accountNumber}</p>
                <p className="text-sm text-muted-foreground">a.n {account.accountName}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => handleCopy(account.accountNumber, index)}
            >
              {copiedIndex === index ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Tersalin
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Salin Nomor Rekening
                </>
              )}
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GiftSection;
