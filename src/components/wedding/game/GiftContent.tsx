import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Copy, Check, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const GiftContent = () => {
  const { toast } = useToast();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const accounts = [
    {
      bank: 'Bank Central Asia (BCA)',
      accountNumber: '1234567890',
      accountName: 'Muhammad Dika Pratama',
    },
    {
      bank: 'Bank Mandiri',
      accountNumber: '0987654321',
      accountName: 'Putri Aruma Sari',
    },
  ];

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
    <div className="space-y-4">
      <div className="text-center">
        <Gift className="w-12 h-12 mx-auto text-primary mb-2" />
        <p className="text-muted-foreground text-sm">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun, jika Anda ingin memberikan hadiah, kami menyediakan amplop digital.
        </p>
      </div>

      {accounts.map((account, index) => (
        <motion.div
          key={index}
          className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-xl p-4 border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-foreground text-sm">{account.bank}</p>
              <p className="text-lg font-semibold text-primary">{account.accountNumber}</p>
              <p className="text-xs text-muted-foreground">a.n {account.accountName}</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-full mt-3 border-primary text-primary hover:bg-primary hover:text-white"
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
                Salin Nomor
              </>
            )}
          </Button>
        </motion.div>
      ))}
    </div>
  );
};

export default GiftContent;
