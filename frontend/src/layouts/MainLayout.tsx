import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { cn } from '../utils/cn';

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-background overflow-hidden selection:bg-primary/50 text-white font-sans">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <div 
        className={cn(
          "flex-1 flex flex-col transition-all duration-300 ease-in-out",
          isSidebarOpen ? "ml-64" : "ml-20" 
        )}
      >
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background/50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
