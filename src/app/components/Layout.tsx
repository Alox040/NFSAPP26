import { useNavigate, useLocation } from "react-router";
import { Home, Search, Activity, GitBranch, Settings as SettingsIcon, ArrowLeft } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  showBack?: boolean;
}

export function Layout({ children, title, showBack = false }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex flex-col h-screen bg-[#0a0a0a] text-gray-100 max-w-md mx-auto">
      {/* Header */}
      <header className="bg-[#111111] border-b border-gray-800 px-4 py-4 flex items-center">
        {showBack ? (
          <button
            onClick={() => navigate(-1)}
            className="mr-3 p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        ) : null}
        <h1 className="text-lg font-semibold">{title || "ParaMed"}</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>

      {/* Bottom Navigation */}
      {!showBack && (
        <nav className="bg-[#111111] border-t border-gray-800 px-2 py-2 flex justify-around">
          <button
            onClick={() => navigate("/")}
            className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
              isActive("/") ? "bg-red-600/20 text-red-500" : "text-gray-400 hover:text-gray-200"
            }`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button
            onClick={() => navigate("/search")}
            className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
              isActive("/search") ? "bg-red-600/20 text-red-500" : "text-gray-400 hover:text-gray-200"
            }`}
          >
            <Search className="w-6 h-6" />
            <span className="text-xs mt-1">Search</span>
          </button>
          <button
            onClick={() => navigate("/diseases")}
            className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
              isActive("/diseases") || location.pathname.startsWith("/diseases/") 
                ? "bg-red-600/20 text-red-500" 
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            <Activity className="w-6 h-6" />
            <span className="text-xs mt-1">Diseases</span>
          </button>
          <button
            onClick={() => navigate("/algorithms")}
            className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
              isActive("/algorithms") || location.pathname.startsWith("/algorithms/")
                ? "bg-red-600/20 text-red-500" 
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            <GitBranch className="w-6 h-6" />
            <span className="text-xs mt-1">Protocol</span>
          </button>
          <button
            onClick={() => navigate("/settings")}
            className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
              isActive("/settings")
                ? "bg-red-600/20 text-red-500" 
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            <SettingsIcon className="w-6 h-6" />
            <span className="text-xs mt-1">Settings</span>
          </button>
        </nav>
      )}
    </div>
  );
}