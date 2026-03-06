import { forwardRef, InputHTMLAttributes } from "react";
import { LucideIcon } from "lucide-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon: Icon, iconPosition = "left", className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-400 mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && iconPosition === "left" && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Icon className="w-5 h-5 text-gray-400" />
            </div>
          )}
          <input
            ref={ref}
            className={`
              w-full rounded-xl bg-[#1a1a1a] border border-gray-700 
              px-4 py-3 text-white placeholder:text-gray-500
              focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20
              transition-all duration-200
              disabled:opacity-50 disabled:cursor-not-allowed
              ${Icon && iconPosition === "left" ? "pl-12" : ""}
              ${Icon && iconPosition === "right" ? "pr-12" : ""}
              ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}
              ${className}
            `}
            {...props}
          />
          {Icon && iconPosition === "right" && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <Icon className="w-5 h-5 text-gray-400" />
            </div>
          )}
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
