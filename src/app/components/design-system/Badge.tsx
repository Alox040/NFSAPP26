import { ReactNode } from "react";

export type BadgeVariant = "default" | "critical" | "warning" | "success" | "info";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    default: "bg-gray-800 text-gray-400",
    critical: "bg-red-950/50 text-red-400 border border-red-900/50",
    warning: "bg-orange-950/50 text-orange-400 border border-orange-900/50",
    success: "bg-green-950/50 text-green-400 border border-green-900/50",
    info: "bg-blue-950/50 text-blue-400 border border-blue-900/50",
  };
  
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
