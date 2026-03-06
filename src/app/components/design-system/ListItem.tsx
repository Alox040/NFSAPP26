import { ReactNode } from "react";
import { LucideIcon, ChevronRight } from "lucide-react";

interface ListItemProps {
  icon?: LucideIcon;
  iconColor?: string;
  title: string;
  subtitle?: string;
  badge?: ReactNode;
  showChevron?: boolean;
  onClick?: () => void;
  className?: string;
}

export function ListItem({
  icon: Icon,
  iconColor = "text-gray-400",
  title,
  subtitle,
  badge,
  showChevron = true,
  onClick,
  className = "",
}: ListItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 p-4 rounded-xl
        bg-[#1a1a1a] hover:bg-[#222222] 
        transition-all duration-200 active:scale-[0.98]
        ${className}
      `}
    >
      {Icon && (
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gray-800/50`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
      )}
      
      <div className="flex-1 text-left min-w-0">
        <p className="font-medium text-white truncate">{title}</p>
        {subtitle && (
          <p className="text-xs text-gray-500 truncate">{subtitle}</p>
        )}
      </div>
      
      {badge && (
        <div className="flex-shrink-0">{badge}</div>
      )}
      
      {showChevron && (
        <ChevronRight className="w-5 h-5 text-gray-600 flex-shrink-0" />
      )}
    </button>
  );
}
