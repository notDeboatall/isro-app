import { useState } from 'react';
import { 
  SlidersHorizontal,
  Waves,
  Sprout,
  Droplets,
  ThermometerSun,
  Bot,
  PlayCircle,
  Download,
  Share2,
  RefreshCw,
  CheckCircle2
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { cn } from '../utils/cn';

export default function Simulator() {
  const [tempDelta, setTempDelta] = useState(1.5);
  const [rainShift, setRainShift] = useState(12);
  const [humidity, setHumidity] = useState(68);
  const [seaLevel, setSeaLevel] = useState(24);
  
  const [simState, setSimState] = useState<'idle' | 'computing' | 'done'>('idle');

  const handleSimulate = () => {
    if (simState === 'computing') return;
    setSimState('computing');
    setTimeout(() => {
      setSimState('done');
      setTimeout(() => {
        setSimState('idle');
      }, 3000);
    }, 2000);
  };

  return (
    <div className="animate-in fade-in duration-500 pb-12 w-full max-w-[1400px] mx-auto px-6 pt-6">
      
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Scenario Simulation Engine</h1>
        <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
          Model localized climate outcomes for the Indian subcontinent using our advanced atmospheric physics engine and historical neural patterns.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Control Panel */}
        <section className="col-span-1 lg:col-span-4 flex flex-col gap-6">
          <Card className="p-6 bg-surface/80 flex flex-col gap-6 border border-white/5 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                <SlidersHorizontal size={20} />
                Input Variables
              </h3>
              <span className="px-2 py-1 bg-surface-container rounded text-[10px] font-mono font-semibold text-secondary border border-secondary/20">
                LIVE EDITING
              </span>
            </div>

            {/* Sliders */}
            <div className="space-y-6">
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-gray-300">Temperature Delta</label>
                  <span className="text-xl font-bold font-mono text-secondary">+{tempDelta.toFixed(1)}°C</span>
                </div>
                <input 
                  type="range" 
                  min="0.5" max="4.0" step="0.1" 
                  value={tempDelta} 
                  onChange={(e) => setTempDelta(parseFloat(e.target.value))}
                  className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-secondary" 
                />
                <div className="flex justify-between text-[10px] font-mono text-gray-500">
                  <span>+0.5°C</span>
                  <span>+4.0°C</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-gray-300">Rainfall % Shift</label>
                  <span className="text-xl font-bold font-mono text-secondary">{rainShift > 0 ? '+' : ''}{rainShift}%</span>
                </div>
                <input 
                  type="range" 
                  min="-50" max="100" step="1" 
                  value={rainShift} 
                  onChange={(e) => setRainShift(parseInt(e.target.value))}
                  className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-secondary" 
                />
                <div className="flex justify-between text-[10px] font-mono text-gray-500">
                  <span>-50%</span>
                  <span>+100%</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-gray-300">Humidity Level</label>
                  <span className="text-xl font-bold font-mono text-secondary">{humidity}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" max="100" step="1" 
                  value={humidity} 
                  onChange={(e) => setHumidity(parseInt(e.target.value))}
                  className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-secondary" 
                />
                <div className="flex justify-between text-[10px] font-mono text-gray-500">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-gray-300">Sea Level Rise (cm)</label>
                  <span className="text-xl font-bold font-mono text-secondary">{seaLevel} cm</span>
                </div>
                <input 
                  type="range" 
                  min="0" max="100" step="1" 
                  value={seaLevel} 
                  onChange={(e) => setSeaLevel(parseInt(e.target.value))}
                  className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-secondary" 
                />
                <div className="flex justify-between text-[10px] font-mono text-gray-500">
                  <span>0 cm</span>
                  <span>100 cm</span>
                </div>
              </div>

            </div>

            <button 
              onClick={handleSimulate}
              className={cn(
                "w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 mt-4 transition-all duration-300 shadow-lg",
                simState === 'idle' ? "bg-primary text-primary-foreground hover:brightness-110 shadow-[0_0_15px_rgba(37,99,235,0.4)]" : 
                simState === 'computing' ? "bg-gray-700 text-gray-300 cursor-wait" : 
                "bg-green-600 text-white shadow-[0_0_15px_rgba(22,163,74,0.4)]"
              )}
            >
              {simState === 'idle' && <><PlayCircle size={24} /> Run Simulation</>}
              {simState === 'computing' && <><RefreshCw size={24} className="animate-spin" /> Computing...</>}
              {simState === 'done' && <><CheckCircle2 size={24} /> Simulation Complete</>}
            </button>
          </Card>

          <Card className="p-6 bg-surface/80 rounded-xl overflow-hidden relative border border-white/5">
            <div className="relative z-10 flex flex-col gap-2">
              <h4 className="text-xs font-semibold text-secondary flex items-center tracking-widest uppercase">ENGINE STATUS</h4>
              <p className="text-sm text-gray-300 leading-relaxed">Quantum processing units active. Geospatial buffers initialized for high-fidelity rendering.</p>
            </div>
          </Card>
        </section>

        {/* Right Intelligence Panel */}
        <section className="col-span-1 lg:col-span-8 flex flex-col gap-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            {/* Impact Map Header */}
            <Card className="rounded-xl p-0 overflow-hidden relative min-h-[400px] border-white/5">
              <div className="absolute top-6 left-6 z-10 flex flex-col gap-1">
                <h3 className="text-sm font-semibold text-primary tracking-widest">RISK HOTSPOTS</h3>
                <span className="text-xs text-gray-400">Real-time predictive projection</span>
              </div>
              <div className="absolute inset-0">
                <div 
                  className="w-full h-full bg-surface-container-lowest bg-cover bg-center" 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')" }}
                ></div>
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#081120] via-transparent to-transparent"></div>
              </div>
              <div className="absolute bottom-6 right-6 z-10 bg-surface/80 backdrop-blur-md p-3 rounded-lg border border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-danger shadow-[0_0_8px_rgba(239,68,68,0.5)]"></span>
                  <span className="text-[10px] font-mono font-semibold text-white">CRITICAL RISK</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-warning shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
                  <span className="text-[10px] font-mono font-semibold text-white">MODERATE RISK</span>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-6">
              
              <Card className="p-6 bg-surface/80 rounded-xl flex flex-col justify-between gap-6 border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-danger bg-danger/10 p-2 rounded-lg"><Waves size={20} /></span>
                  <span className="text-[10px] font-mono font-bold text-danger">+42% ↑</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-gray-400">Flood Risk</span>
                  <h4 className="text-4xl font-bold font-mono text-white leading-none">78<span className="text-xl">%</span></h4>
                </div>
              </Card>

              <Card className="p-6 bg-surface/80 rounded-xl flex flex-col justify-between gap-6 border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-warning bg-warning/10 p-2 rounded-lg"><Sprout size={20} /></span>
                  <span className="text-[10px] font-mono font-bold text-warning">-18% ↓</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-gray-400">Crop Yield</span>
                  <h4 className="text-4xl font-bold font-mono text-white leading-none">8.2<span className="text-xl">M</span></h4>
                </div>
              </Card>

              <Card className="p-6 bg-surface/80 rounded-xl flex flex-col justify-between gap-6 border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-secondary bg-secondary/10 p-2 rounded-lg"><Droplets size={20} /></span>
                  <span className="text-[10px] font-mono font-bold text-secondary">+12% ↑</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-gray-400">Water Stress</span>
                  <h4 className="text-3xl font-bold font-mono text-white leading-none">High</h4>
                </div>
              </Card>

              <Card className="p-6 bg-surface/80 rounded-xl flex flex-col justify-between gap-6 border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-primary bg-primary/10 p-2 rounded-lg"><ThermometerSun size={20} /></span>
                  <span className="text-[10px] font-mono font-bold text-primary">+8 Days</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-gray-400">Heatwave Freq.</span>
                  <h4 className="text-3xl font-bold font-mono text-white leading-none">14<span className="text-xl">/yr</span></h4>
                </div>
              </Card>

            </div>
          </div>

          {/* AI Narrative Section */}
          <Card className="p-6 bg-surface/80 rounded-xl relative overflow-hidden flex flex-col gap-6 border-white/5">
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Bot size={20} className="text-secondary" />
                </div>
                <h2 className="text-xl font-semibold text-white">AI Narrative Analysis</h2>
              </div>
              
              <div className="space-y-4 max-w-3xl">
                <p className="text-base text-gray-200 leading-relaxed font-medium">
                  Under the current simulation parameters (+{tempDelta.toFixed(1)}°C Warming, {rainShift > 0 ? '+'+rainShift : rainShift}% Rainfall), India's coastal economy faces significant transition risks. The model predicts a compounding effect in the Ganges-Brahmaputra delta, where saline intrusion will likely reduce arable land by 14% within the next decade.
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  While increased rainfall may provide short-term relief to ground water reservoirs in Central India, the volatility of monsoon patterns increases the probability of "flash-drought" events. Critical infrastructure in Mumbai and Chennai requires immediate adaptive reinforcement to mitigate sea-level rise impacts.
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-4">
                <Button variant="outline" className="text-secondary border-secondary/30 hover:bg-secondary/10 hover:text-secondary gap-2">
                  <Download size={18} />
                  Export Forecast PDF
                </Button>
                <Button variant="outline" className="gap-2">
                  <Share2 size={18} />
                  Share with Stakeholders
                </Button>
              </div>
            </div>
          </Card>

        </section>
      </div>
    </div>
  );
}
