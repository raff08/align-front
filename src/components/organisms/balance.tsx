import React from 'react';
// 1. Importando o componente Button reutilizável
// (Estou assumindo o caminho que corrigimos antes, ajuste se for diferente)
import { Button } from '../atoms/button';

interface BalanceSectionProps {
  balance: string;
}

export const BalanceSection: React.FC<BalanceSectionProps> = ({ balance }) => (
  <section className="mb-6">
    <p className="text-gray-400 text-sm">Saldo total da conta</p>
    <h3 className="text-4xl font-bold mb-4">{balance}</h3>
    <div className="flex gap-3">

      {/* 2. Usando o componente Button */}
      <Button 
        variant='primary'
        /* 3. Aqui está a mágica:
           - "w-auto" sobrescreve o "w-full" do componente.
           - "px-5" sobrescreve o "px-4" do componente (para ficar igual ao seu botão antigo).
           - "text-sm" garante a fonte pequena.
           - "cursor-pointer" para a mãozinha.
        */
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