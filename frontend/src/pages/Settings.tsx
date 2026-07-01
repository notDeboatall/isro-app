import { useState } from 'react';
import { 
  Settings as SettingsIcon,
  Database,
  Lock,
  RadioTower,
  Moon,
  Sun,
  Contrast,
  Mail,
  MessageSquare,
  Bell,
  Save,
  RotateCcw,
  Activity,
  AlertCircle
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { cn } from '../utils/cn';

export default function Settings() {
  const [syncEnabled, setSyncEnabled] = useState(true);
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [theme, setTheme] = useState<'dark' | 'light' | 'contrast'>('dark');

  const [sources, setSources] = useState({
    imd: true,
    mosdac: true,
    bhuvan: false,
    sentinel: true
  });

  return (
    <div className="animate-in fade-in duration-500 pb-24 w-full max-w-[1200px] mx-auto px-6 pt-6">
      
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center">System Configuration</h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">Manage technical operational parameters and planetary data ingestion protocols.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Core Settings */}
        <section className="col-span-1 md:col-span-12 lg:col-span-7">
          <Card className="p-6 bg-surface/80 flex flex-col gap-8 h-full border border-white/5">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <SettingsIcon className="text-secondary" size={24} />
              <h3 className="text-xl font-semibold text-white">Core Settings</h3>
            </div>
            
            <div className="space-y-8 py-2">
              {/* Real-time sync */}
              <div className="flex items-center justify-between p-4 bg-cards/50 rounded-xl border border-white/5 hover:border-secondary/20 transition-colors">
                <div className="flex flex-col gap-1">
                  <span className="text-white font-semibold text-sm">Real-time Satellite Sync</span>
                  <span className="text-gray-400 text-xs">Continuous ingestion of LEO satellite telemetry for zero-latency updates.</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={syncEnabled} onChange={() => setSyncEnabled(!syncEnabled)} />
                  <div className="w-11 h-6 bg-surface-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                </label>
              </div>

              {/* Unit System */}
              <div className="flex flex-col gap-3">
                <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold font-mono">Unit System</label>
                <div className="flex p-1 bg-cards/50 rounded-lg border border-white/5">
                  <button 
                    onClick={() => setUnit('metric')}
                    className={cn("flex-1 py-2 px-4 rounded-md font-mono text-sm font-bold transition-all", unit === 'metric' ? "bg-secondary text-on-secondary shadow-lg shadow-secondary/20" : "text-gray-400 hover:text-white")}
                  >
                    Metric (SI)
                  </button>
                  <button 
                    onClick={() => setUnit('imperial')}
                    className={cn("flex-1 py-2 px-4 rounded-md font-mono text-sm font-bold transition-all", unit === 'imperial' ? "bg-secondary text-on-secondary shadow-lg shadow-secondary/20" : "text-gray-400 hover:text-white")}
                  >
                    Imperial
                  </button>
                </div>
              </div>

              {/* Theme */}
              <div className="flex flex-col gap-3">
                <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold font-mono">Interface Theme</label>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setTheme('dark')}
                    className={cn("flex-1 p-4 rounded-xl flex flex-col items-center gap-3 transition-all", theme === 'dark' ? "border-2 border-secondary bg-secondary/10" : "border border-white/10 bg-cards/30 hover:border-white/30")}
                  >
                    <Moon size={24} className={theme === 'dark' ? "text-secondary" : "text-gray-400"} />
                    <span className={cn("text-sm font-mono font-bold", theme === 'dark' ? "text-secondary" : "text-gray-400")}>Dark</span>
                  </button>
                  <button 
                    onClick={() => setTheme('light')}
                    className={cn("flex-1 p-4 rounded-xl flex flex-col items-center gap-3 transition-all", theme === 'light' ? "border-2 border-secondary bg-secondary/10" : "border border-white/10 bg-cards/30 hover:border-white/30")}
                  >
                    <Sun size={24} className={theme === 'light' ? "text-secondary" : "text-gray-400"} />
                    <span className={cn("text-sm font-mono font-bold", theme === 'light' ? "text-secondary" : "text-gray-400")}>Light</span>
                  </button>
                  <button 
                    onClick={() => setTheme('contrast')}
                    className={cn("flex-1 p-4 rounded-xl flex flex-col items-center gap-3 transition-all", theme === 'contrast' ? "border-2 border-secondary bg-secondary/10" : "border border-white/10 bg-cards/30 hover:border-white/30")}
                  >
                    <Contrast size={24} className={theme === 'contrast' ? "text-secondary" : "text-gray-400"} />
                    <span className={cn("text-sm font-mono font-bold", theme === 'contrast' ? "text-secondary" : "text-gray-400")}>High Contrast</span>
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Data Sources Section */}
        <section className="col-span-1 md:col-span-12 lg:col-span-5">
          <Card className="p-6 bg-surface/80 flex flex-col gap-6 h-full border-l-[4px] border-l-secondary/50 border-t-white/5 border-r-white/5 border-b-white/5 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Database className="text-secondary" size={24} />
              <h3 className="text-xl font-semibold text-white">Data Sources</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">Select verified Indian institutional data layers for prediction modeling.</p>
              
              <div className="grid grid-cols-1 gap-3 mt-2">
                
                <label className={cn("flex items-start gap-4 rounded-xl border p-4 cursor-pointer transition-all", sources.imd ? "bg-secondary/5 border-secondary/30" : "bg-cards/30 border-white/5 hover:border-white/20")}>
                  <input type="checkbox" checked={sources.imd} onChange={(e) => setSources({...sources, imd: e.target.checked})} className="mt-1 w-5 h-5 rounded border-white/10 bg-surface text-secondary focus:ring-secondary accent-secondary" />
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm">IMD</span>
                    <span className="text-xs text-gray-400 mt-1">India Meteorological Department - Live Weather Feed</span>
                  </div>
                </label>

                <label className={cn("flex items-start gap-4 rounded-xl border p-4 cursor-pointer transition-all", sources.mosdac ? "bg-secondary/5 border-secondary/30" : "bg-cards/30 border-white/5 hover:border-white/20")}>
                  <input type="checkbox" checked={sources.mosdac} onChange={(e) => setSources({...sources, mosdac: e.target.checked})} className="mt-1 w-5 h-5 rounded border-white/10 bg-surface text-secondary focus:ring-secondary accent-secondary" />
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm">MOSDAC</span>
                    <span className="text-xs text-gray-400 mt-1">Meteorological and Oceanographic Data Centre</span>
                  </div>
                </label>

                <label className={cn("flex items-start gap-4 rounded-xl border p-4 cursor-pointer transition-all", sources.bhuvan ? "bg-secondary/5 border-secondary/30" : "bg-cards/30 border-white/5 hover:border-white/20")}>
                  <input type="checkbox" checked={sources.bhuvan} onChange={(e) => setSources({...sources, bhuvan: e.target.checked})} className="mt-1 w-5 h-5 rounded border-white/10 bg-surface text-secondary focus:ring-secondary accent-secondary" />
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm">Bhuvan</span>
                    <span className="text-xs text-gray-400 mt-1">ISRO's Geoportal for Indian Earth Observation</span>
                  </div>
                </label>

                <label className={cn("flex items-start gap-4 rounded-xl border p-4 cursor-pointer transition-all", sources.sentinel ? "bg-secondary/5 border-secondary/30" : "bg-cards/30 border-white/5 hover:border-white/20")}>
                  <input type="checkbox" checked={sources.sentinel} onChange={(e) => setSources({...sources, sentinel: e.target.checked})} className="mt-1 w-5 h-5 rounded border-white/10 bg-surface text-secondary focus:ring-secondary accent-secondary" />
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm">Sentinel</span>
                    <span className="text-xs text-gray-400 mt-1">ESA/Copernicus High-Resolution Radar</span>
                  </div>
                </label>
              </div>

              <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20 mt-4">
                <div className="flex items-center gap-2 text-secondary mb-2">
                  <AlertCircle size={16} />
                  <span className="text-sm font-bold">Bandwidth Warning</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">Multiple high-resolution layers may increase data latency. Current throughput: 420 Mbps.</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Security & Protocols Section */}
        <section className="col-span-1 md:col-span-12 lg:col-span-12 mt-2">
          <Card className="p-6 bg-surface/80 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-10 border border-white/5">
            
            {/* Account Security */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <Lock className="text-tertiary" size={24} />
                <h3 className="text-xl font-semibold text-white">Account Security</h3>
              </div>
              <div className="space-y-6 pt-2">
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-semibold text-sm">Multi-Factor Authentication</span>
                    <span className="text-xs text-gray-400">Required for admin-level simulation overrides.</span>
                  </div>
                  <Button variant="outline" className="text-xs px-3 py-1.5 h-auto border-secondary/30 text-secondary hover:bg-secondary/10 hover:text-secondary">Configure</Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-semibold text-sm">Security Hardware Key</span>
                    <span className="text-xs text-gray-400">Physical key required for data export (Yubikey).</span>
                  </div>
                  <span className="px-3 py-1 rounded bg-danger/10 text-danger text-[10px] font-bold border border-danger/30 font-mono">DISABLED</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-semibold text-sm">Session Timeout</span>
                    <span className="text-xs text-gray-400">Automatic logout after period of inactivity.</span>
                  </div>
                  <select className="bg-cards border border-white/10 text-sm font-semibold rounded px-4 py-2 ring-1 ring-white/5 focus:ring-secondary cursor-pointer text-white w-36">
                    <option>15 Minutes</option>
                    <option selected>1 Hour</option>
                    <option>4 Hours</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Notification Protocols */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <RadioTower className="text-tertiary" size={24} />
                <h3 className="text-xl font-semibold text-white">Notification Protocols</h3>
              </div>
              <div className="space-y-4 pt-2">
                
                <div className="flex items-center justify-between p-4 rounded-xl bg-cards/50 border border-white/5">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="text-danger" size={20} />
                    <span className="text-white text-sm font-semibold">Critical Anomaly Alerts</span>
                  </div>
                  <div className="flex gap-4">
                    <Mail size={18} className="text-secondary cursor-pointer" />
                    <MessageSquare size={18} className="text-secondary cursor-pointer" />
                    <Bell size={18} className="text-secondary cursor-pointer" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-cards/50 border border-white/5">
                  <div className="flex items-center gap-3">
                    <Activity className="text-gray-400" size={20} />
                    <span className="text-white text-sm font-semibold">Daily Science Summary</span>
                  </div>
                  <div className="flex gap-4">
                    <Mail size={18} className="text-secondary cursor-pointer" />
                    <MessageSquare size={18} className="text-gray-600 cursor-pointer" />
                    <Bell size={18} className="text-gray-600 cursor-pointer" />
                  </div>
                </div>

              </div>
            </div>

          </Card>
        </section>

      </div>

      {/* Global Actions */}
      <div className="mt-8 flex justify-end gap-4">
        <Button variant="ghost" className="gap-2 text-gray-400 hover:text-white">
          <RotateCcw size={18} /> Reset to Defaults
        </Button>
        <Button className="gap-2 bg-secondary text-on-secondary px-8 font-bold hover:bg-secondary/90 shadow-[0_0_20px_rgba(34,211,238,0.25)]">
          <Save size={18} /> Save Changes
        </Button>
      </div>

    </div>
  );
}
