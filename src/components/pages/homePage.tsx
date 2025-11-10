import { useState } from 'react';
import { HomeHeader } from '../organisms/homeHeader';
import { BalanceSection } from '../organisms/balance';
import { GoalsList } from '../organisms/goalList';
import { BottomNavbar } from '../organisms/bottomNavBar';
import { AddGoalModal } from '../organisms/modals/addGoalModal';
import { AddMoneyModal } from '../organisms/modals/addMoneyModal';
import AddIcon from '@mui/icons-material/Add';
import type { Goal } from '../../models/goals';

export default function HomePage() {
  const [goals, setGoals] = useState<Goal[]>([
    { 
      id: 1, 
      icon: "✈️", 
      title: "Lua de Mel", 
      current: 7500, 
      total: 15000 
    },
    { 
      id: 2, 
      icon: "💍", 
      title: "Buffet Casamento", 
      current: 8000, 
      total: 10000 
    },
    { 
      id: 3, 
      icon: "🏡", 
      title: "Entrada Apartamento", 
      current: 5000, 
      total: 20000 
    },
  ]);

  const [showAddGoalModal, setShowAddGoalModal] = useState(false);
  const [showAddMoneyModal, setShowAddMoneyModal] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);

  const handleAddGoal = (newGoal: Omit<Goal, 'id'>) => {
    const goal: Goal = {
      ...newGoal,
      id: Math.max(...goals.map(g => g.id), 0) + 1,
      current: 0
    };
    setGoals([...goals, goal]);
    setShowAddGoalModal(false);
  };

  const handleAddMoney = (goalId: number, amount: number) => {
    setGoals(goals.map(goal => 
      goal.id === goalId 
        ? { ...goal, current: Math.min(goal.current + amount, goal.total) }
        : goal
    ));
    setShowAddMoneyModal(false);
    setSelectedGoal(null);
  };

  const handleGoalClick = (goal: Goal) => {
    setSelectedGoal(goal);
    setShowAddMoneyModal(true);
  };

  return (
    <div className="min-h-screen bg-[#3A483E] text-white font-mulish pb-24">
      <div className="p-6">
        
        <HomeHeader />
        
        <BalanceSection balance="R$ 10.000,00" />

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Minhas Metas</h3>
          <button
            onClick={() => setShowAddGoalModal(true)}
            className="bg-[#7C9885] hover:bg-[#6a8573] text-white rounded-full p-2 transition-colors"
            aria-label="Adicionar meta"
          >
            <AddIcon />
          </button>
        </div>

        <GoalsList goals={goals} onGoalClick={handleGoalClick} />

      </div>

      <BottomNavbar />

      {showAddGoalModal && (
        <AddGoalModal
          onClose={() => setShowAddGoalModal(false)}
          onSubmit={handleAddGoal}
        />
      )}

      {showAddMoneyModal && selectedGoal && (
        <AddMoneyModal
          goal={selectedGoal}
          onClose={() => {
            setShowAddMoneyModal(false);
            setSelectedGoal(null);
          }}
          onSubmit={handleAddMoney}
        />
      )}
    </div>
  );
}