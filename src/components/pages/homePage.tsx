import { HomeHeader } from '../organisms/homeHeader';
import { BalanceSection } from '../organisms/balance';
import { GoalsList } from '../organisms/goalList';
import { BottomNavbar } from '../organisms/bottomNavBar';
import type { Goal } from '../../models/goals';

export default function HomePage() {
  
  const goals: Goal[] = [
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
  ];

  return (
    <div className="min-h-screen bg-[#3A483E] text-white font-mulish pb-24">
      <div className="p-6">
        
        <HomeHeader />
        
        <BalanceSection balance="R$ 10.000,00" />


        <GoalsList goals={goals} />

      </div>

      <BottomNavbar />
    </div>
  );
}