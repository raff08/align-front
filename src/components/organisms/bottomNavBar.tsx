import { HomeIcon } from "../atoms/homeIcon";
import { UserIcon } from "../atoms/userIcon";

export const BottomNavbar = () => (
  <nav className="fixed bottom-0 left-0 right-0 bg-[#3d4e4a] p-4 flex justify-around items-center border-t border-gray-700">
    <button className="flex flex-col items-center text-[#D2FD9C]">
      <HomeIcon />
      <span className="text-xs mt-1">Início</span>
    </button>
    <button className="flex flex-col items-center text-gray-400 hover:text-white">
      <UserIcon />
      <span className="text-xs mt-1">Perfil</span>
    </button>
  </nav>
);
