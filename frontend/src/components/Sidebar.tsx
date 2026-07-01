
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Map, 
  TrendingUp, 
  Sliders, 
  BarChart2, 
  FileText, 
  Settings, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '../utils/cn';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Climate Map', path: '/map', icon: Map },
  { name: 'Predictions', path: '/predictions', icon: TrendingUp },
  { name: 'Simulator', path: '/simulator', icon: Sliders },
  { name: 'Analytics', path: '/analytics', icon: BarChart2 },
  { name: 'Reports', path: '/reports', icon: FileText },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 h-screen bg-secondary border-r border-white/5 transition-all duration-300 ease-in-out z-20 flex flex-col",
        isOpen ? "w-64" : "w-20"
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-white/5 shrink-0">
        <div className="flex items-center overflow-hidden">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
            <span className="font-bold text-white tracking-widest">CT</span>
          </div>
          <span 
            className={cn(
              "font-bold text-lg ml-3 tracking-wide whitespace-nowrap transition-opacity duration-300",
              isOpen ? "opacity-100" : "opacity-0 hidden"
            )}
          >
            ClimateTwin
          </span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 rounded-md hover:bg-white/10 transition-colors hidden md:block text-gray-400 hover:text-white"
        >
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-2 overflow-y-auto overflow-x-hidden">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
              isActive 
                ? "bg-primary/10 text-primary border border-primary/20" 
                : "text-gray-400 hover:bg-white/5 hover:text-gray-100"
            )}
          >
            <item.icon size={22} className="shrink-0" />
            <span 
              className={cn(
                "font-medium ml-3 whitespace-nowrap transition-opacity duration-300",
                isOpen ? "opacity-100" : "opacity-0 w-0 hidden"
              )}
            >
              {item.name}
            </span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-white/5 flex items-center shrink-0">
        <div className="w-10 h-10 rounded-full bg-cards border border-white/10 flex items-center justify-center shrink-0">
          <span className="text-sm font-semibold text-accent">ISRO</span>
        </div>
        <div className={cn(
          "ml-3 whitespace-nowrap transition-opacity duration-300 overflow-hidden",
          isOpen ? "opacity-100" : "opacity-0 hidden"
        )}>
          <p className="text-sm font-medium text-white">ISRO Admin</p>
          <p className="text-xs text-gray-400">Mission Control</p>
        </div>
      </div>
    </aside>
  );
}
