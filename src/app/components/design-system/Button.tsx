import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
export type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "medium",
  icon: Icon,
  iconPosition = "left",
  disabled = false,
  fullWidth = false,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantStyles = {
    primary: "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30",
    secondary: "bg-[#222222] hover:bg-[#2a2a2a] text-white",
    outline: "bg-transparent border-2 border-gray-700 hover:border-gray-600 text-white",
    ghost: "bg-transparent hover:bg-[#1a1a1a] text-gray-400 hover:text-white",
    danger: "bg-red-900/30 hover:bg-red-900/50 text-red-400 border border-red-900/50",
  };
  
  const sizeStyles = {
    small: "px-4 py-2 text-sm", // 16px horizontal, 8px vertical
    medium: "px-6 py-3 text-base", // 24px horizontal, 12px vertical (following 8px grid)
    large: "px-8 py-4 text-lg", // 32px horizontal, 16px vertical
  };
  
  const widthStyles = fullWidth ? "w-full" : "";
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`}
    >
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
    </button>
  );
}
