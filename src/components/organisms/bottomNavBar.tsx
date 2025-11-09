import { HomeIcon } from "../atoms/homeIcon";
import { UserIcon } from "../atoms/userIcon";
import { NavItem } from "../molecules/navItem";
import { useNavigation } from "../../contexts/navigationContext"
import { useNavigate } from "react-router-dom";

export const BottomNavbar: React.FC = () => {
  const { isActive } = useNavigation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#3d4e4a] p-4 flex justify-around items-center border-t border-gray-700">
      <NavItem 
        icon={<HomeIcon />} 
        label="Início" 
        isActive={isActive('/home')}
        onClick={() => navigate('/home')}
      />

      <NavItem 
        icon={<UserIcon />} 
        label="Perfil" 
        isActive={isActive('/profile')}
        onClick={() => navigate('/profile')}
      />
    </nav>
  );
};