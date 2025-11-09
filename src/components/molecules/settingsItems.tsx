import { ChevronRightIcon } from "../atoms/chevronRightIscon";
interface SettingsItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export const SettingsItem: React.FC<SettingsItemProps> = ({ icon, title, subtitle }) => (
  <button className="flex items-center w-full text-left p-4 bg-[#3d4e4a] rounded-lg transition-colors hover:bg-[#4a5c57]">
    <div className="mr-4 text-[#D2FD9C]">
      {icon}
    </div>
    <div className="grow">
      <p className="font-semibold text-white">{title}</p>
      <p className="text-sm text-gray-400">{subtitle}</p>
    </div>
    <ChevronRightIcon />
  </button>
);