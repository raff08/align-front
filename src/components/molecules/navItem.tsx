interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive = false, onClick }) => {
  const baseClasses = "flex flex-col items-center hover:text-white";
  const activeClasses = isActive ? "text-[#D2FD9C]" : "text-gray-400";
  
  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${activeClasses}`}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
};