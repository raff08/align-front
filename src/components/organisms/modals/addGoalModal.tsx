import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import type { Goal } from '../../../models/goals';

type AddGoalModalProps = {
  onClose: () => void;
  onSubmit: (goal: Omit<Goal, 'id'>) => void;
};

const emojiOptions = ["✈️", "💍", "🏡", "🚗", "💰", "🎓", "🏖️", "🎉", "💻", "🎮"];

export const AddGoalModal = ({ onClose, onSubmit }: AddGoalModalProps) => {
  const [title, setTitle] = useState('');
  const [total, setTotal] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('✈️');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !total) return;

    onSubmit({
      icon: selectedIcon,
      title: title.trim(),
      total: parseFloat(total),
      current: 0
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#3d4e4a] rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Nova Meta</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <CloseIcon />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Escolha um ícone
            </label>
            <div className="grid grid-cols-5 gap-2">
              {emojiOptions.map(emoji => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => setSelectedIcon(emoji)}
                  className={`text-3xl p-3 rounded-lg transition-colors ${
                    selectedIcon === emoji 
                      ? 'bg-[#7C9885] ring-2 ring-white' 
                      : 'bg-[#2a3832] hover:bg-[#3a4842]'
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
              Nome da Meta
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Viagem para Paris"
              className="w-full px-4 py-2 bg-[#2a3832] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C9885]"
              required
            />
          </div>

          <div>
            <label htmlFor="total" className="block text-sm font-medium text-gray-300 mb-2">
              Valor Total da Meta (R$)
            </label>
            <input
              id="total"
              type="number"
              step="0.01"
              min="0"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              placeholder="0,00"
              className="w-full px-4 py-2 bg-[#2a3832] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C9885]"
              required
            />
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
              Criar Meta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};