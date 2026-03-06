import { LucideIcon } from "lucide-react";

interface HorizontalNavItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export function HorizontalNavItem({
  icon: Icon,
  label,
  isActive = false,
  isDisabled = false,
  onClick,
}: HorizontalNavItemProps) {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`
        flex-shrink-0 flex flex-col items-center justify-center gap-2 
        px-6 py-4 rounded-2xl min-w-[120px] h-[110px]
        transition-all duration-300 ease-out
        ${
          isActive
            ? "bg-red-600 shadow-lg shadow-red-600/30 scale-105"
            : "bg-[#1a1a1a] hover:bg-[#222222] hover:scale-102"
        }
        ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        active:scale-95
      `}
    >
      <div
        className={`
        w-12 h-12 rounded-xl flex items-center justify-center transition-colors
        ${
          isActive
            ? "bg-white/20"
            : "bg-gray-800"
        }
      `}
      >
        <Icon
          className={`w-6 h-6 ${
            isActive ? "text-white" : "text-gray-400"
          }`}
        />
      </div>
      <span
        className={`text-sm font-medium ${
          isActive ? "text-white" : "text-gray-400"
        }`}
      >
        {label}
      </span>
    </button>
  );
}
