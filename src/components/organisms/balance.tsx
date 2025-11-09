import React from 'react';
import { Button } from '../atoms/button';

interface BalanceSectionProps {
  balance: string;
}

export const BalanceSection: React.FC<BalanceSectionProps> = ({ balance }) => (
  <section className="mb-6">
    <p className="text-gray-400 text-sm">Saldo total da conta</p>
    <h3 className="text-4xl font-bold mb-4">{balance}</h3>
    <div className="flex gap-3">

      <Button 
        variant='primary'
        className="w-auto px-5 text-sm cursor-pointer"
      >
        Pix
      </Button>

      <Button 
        variant='primary'
        className="w-auto px-5 text-sm cursor-pointer"
      >
        Pagar
      </Button>

      <Button 
        variant='primary'
        className="w-auto px-5 text-sm cursor-pointer"
      >
        Cartão
      </Button>

    </div>
  </section>
);