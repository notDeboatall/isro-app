import { Bell, Search, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 border-b border-white/5 bg-background/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center flex-1">
        <div className="relative w-full max-w-md hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search districts, reports, or alerts..." 
            className="w-full bg-cards/50 border border-white/10 rounded-full py-1.5 pl-10 pr-4 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
          />
        </div>
      </div>

      <div className="flex items-center justify-end space-x-4">
        <button className="relative p-2 rounded-full hover:bg-white/5 transition-colors text-gray-300">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-danger animate-pulse"></span>
        </button>
        
        <button className="flex items-center space-x-2 p-1.5 pr-3 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors">
          <div className="w-8 h-8 rounded-full bg-cards flex items-center justify-center">
            <User size={16} className="text-gray-300" />
          </div>
          <span className="text-sm font-medium hidden sm:block">Admin</span>
        </button>
      </div>
    </header>
  );
}
