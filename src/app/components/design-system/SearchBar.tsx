import { forwardRef, InputHTMLAttributes } from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
  showClear?: boolean;
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ onClear, showClear = false, className = "", ...props }, ref) => {
    return (
      <div className={`relative ${className}`}>
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          ref={ref}
          type="text"
          className="
            w-full rounded-xl bg-[#1a1a1a] border border-gray-700 
            pl-12 pr-12 py-3 text-white placeholder:text-gray-500
            focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20
            transition-all duration-200
          "
          {...props}
        />
        {showClear && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-gray-800 rounded-lg p-1 transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        )}
      </div>
    );
  }
);

SearchBar.displayName = "SearchBar";
