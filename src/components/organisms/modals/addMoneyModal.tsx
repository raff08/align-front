import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import type { Goal } from '../../../models/goals';

type AddMoneyModalProps = {
  goal: Goal;
  onClose: () => void;
  onSubmit: (goalId: number, amount: number) => void;
};

export const AddMoneyModal = ({ goal, onClose, onSubmit }: AddMoneyModalProps) => {
  const [amount, setAmount] = useState('');

  const remaining = goal.total - goal.current;
  const progressPercent = (goal.current / goal.total) * 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || parseFloat(amount) <= 0) return;

    onSubmit(goal.id, parseFloat(amount));
  };

  const quickAmounts = [100, 500, 1000, 2000];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#3d4e4a] rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{goal.icon}</span>
            <div>
              <h2 className="text-xl font-bold text-white">{goal.title}</h2>
              <p className="text-sm text-gray-400">
                Faltam R$ {remaining.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <CloseIcon />
          </button>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-300 mb-2">
            <span>Progresso atual</span>
            <span>{progressPercent.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-[#2a3832] rounded-full h-3">
            <div 
              className="bg-[#7C9885] h-3 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>R$ {goal.current.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            <span>R$ {goal.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-2">
              Quanto deseja adicionar?
            </label>
            <input
              id="amount"
              type="number"
              step="0.01"
              min="0"
              max={remaining}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0,00"
              className="w-full px-4 py-3 text-lg bg-[#2a3832] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C9885]"
              required
              autoFocus
            />
          </div>

          <div>
            <p className="text-sm text-gray-400 mb-2">Valores rápidos:</p>
            <div className="grid grid-cols-4 gap-2">
              {quickAmounts.map(quickAmount => (
                <button
                  key={quickAmount}
                  type="button"
                  onClick={() => setAmount(quickAmount.toString())}
                  className="px-3 py-2 bg-[#2a3832] hover:bg-[#3a4842] text-white rounded-lg transition-colors text-sm"
                  disabled={quickAmount > remaining}
                >
                  R$ {quickAmount}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-[#7C9885] hover:bg-[#6a8573] text-white rounded-lg transition-colors font-semibold"
            >
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};