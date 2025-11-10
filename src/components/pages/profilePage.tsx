import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { SettingsItem } from '../molecules/settingsItems';
import { BottomNavbar } from '../organisms/bottomNavBar';
import { Button } from '../atoms/button';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const navigate = useNavigate();
  const userA = { name: "Maria" };
  const userB = { name: "Thalles" };

  return (
    <div className="min-h-screen bg-[#3A483E] text-white font-mulish pb-24">
      <div className="p-6">
        
        <header className="mb-8">
          <h2 className="text-2xl font-bold">Perfil do Casal</h2>
          <p className="text-gray-400 text-sm">Gerencie suas contas e configurações.</p>
        </header>

        <section className="mb-8 p-4 bg-[#3d4e4a] rounded-lg flex items-center justify-around text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gray-500 mb-2 flex items-center justify-center overflow-hidden">
              <PersonOutlineIcon className="w-10 h-10 text-gray-300" />
            </div>
            <p className="font-medium">{userA.name}</p>
          </div>
          
          <LinkOutlinedIcon className="w-6 h-6" />

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gray-500 mb-2 flex items-center justify-center overflow-hidden">
              <PersonOutlineIcon className="w-10 h-10 text-gray-300" />
            </div>
            <p className="font-medium">{userB.name}</p>
          </div>
        </section>

        <section className="flex flex-col gap-4 mb-8">
          <SettingsItem 
            icon={<SettingsOutlinedIcon className="w-6 h-6" />} 
            title="Configurações da Conta" 
            subtitle="Privacidade, perfil, dados"
          />
          <SettingsItem 
            icon={<NotificationsNoneOutlinedIcon className="w-6 h-6" />} 
            title="Notificações" 
            subtitle="Alertas de metas e gastos"
          />
          <SettingsItem 
            icon={<LockOutlinedIcon className="w-6 h-6" />} 
            title="Segurança" 
            subtitle="Alterar senha, 2FA"
          />
        </section>

        <section>
          <Button 
            onClick={() => navigate("/login")}
            variant="secondary" 
            className="w-full bg-red-900 bg-opacity-50 text-red-300 hover:bg-opacity-70"
          >
            Desconectar
          </Button>
        </section>

      </div>

      <BottomNavbar />
    </div>
  );
}