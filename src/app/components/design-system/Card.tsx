import { ReactNode } from "react";

export type CardVariant = "default" | "elevated" | "outlined" | "medical";

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  padding?: "none" | "small" | "medium" | "large";
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export function Card({
  children,
  variant = "default",
  padding = "medium",
  className = "",
  onClick,
  hoverable = false,
}: CardProps) {
  const baseStyles = "rounded-xl transition-all duration-200";
  
  const variantStyles = {
    default: "bg-[#1a1a1a]",
    elevated: "bg-[#222222] shadow-lg",
    outlined: "bg-transparent border border-gray-700",
    medical: "bg-red-950/20 border border-red-900/50",
  };
  
  const paddingStyles = {
    none: "",
    small: "p-3", // 12px - not strictly 8px grid but close
    medium: "p-4", // 16px
    large: "p-6", // 24px
  };
  
  const hoverStyles = hoverable || onClick ? "hover:bg-[#222222] cursor-pointer" : "";
  const clickableStyles = onClick ? "active:scale-[0.98]" : "";
  
  return (
    <div
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyles} ${clickableStyles} ${className}`}
    >
      {children}
    </div>
  );
}
