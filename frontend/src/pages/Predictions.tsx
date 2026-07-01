import { useState } from 'react';
import { 
  Download, 
  Share2, 
  Clock, 
  ChevronRight, 
  BrainCircuit, 
  Database, 
  Zap,
  AlertTriangle,
  TrendingUp,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { cn } from '../utils/cn';
import { 
  ComposedChart, 
  Line, 
  Area, 
  XAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const FORECAST_DATA = [
  { day: 'Mon', temp: 31, rain: 5, confidenceLow: 29, confidenceHigh: 33 },
  { day: 'Tue', temp: 32, rain: 8, confidenceLow: 30, confidenceHigh: 34 },
  { day: 'Wed', temp: 34, rain: 2, confidenceLow: 31, confidenceHigh: 36 },
  { day: 'Thu', temp: 34.4, rain: 0, confidenceLow: 32, confidenceHigh: 38, anomaly: true },
  { day: 'Fri', temp: 33, rain: 15, confidenceLow: 30, confidenceHigh: 36 },
  { day: 'Sat', temp: 31, rain: 25, confidenceLow: 27, confidenceHigh: 34 },
  { day: 'Sun', temp: 30, rain: 12, confidenceLow: 26, confidenceHigh: 33 },
];

const TIMELINES = [
  { id: 'today', label: 'REAL-TIME', title: 'Today', value: '32°C', sub: 'Cloudy Intervals', color: 'border-l-secondary', valColor: 'text-secondary' },
  { id: 'tomorrow', label: '+24 HOURS', title: 'Tomorrow', value: '34°C', sub: 'High Humidity', color: 'border-l-primary/30', valColor: 'text-primary' },
  { id: '7day', label: 'MEDIUM RANGE', title: '7-Day', value: 'Avg 31°C', sub: 'Light Precipitation', color: 'border-l-primary/30', valColor: 'text-primary' },
  { id: '15day', label: 'EXTENDED RANGE', title: '15-Day', value: 'Variability High', sub: 'Monsoon Onset Shift', color: 'border-l-primary/30', valColor: 'text-primary' },
  { id: 'seasonal', label: 'LONG RANGE', title: 'Seasonal Outlook', value: 'Q3 Analysis', sub: 'Agricultural Impact', color: 'border-l-primary/30', valColor: 'text-primary' },
];

export default function Predictions() {
  const [activeTimeline, setActiveTimeline] = useState('today');

  return (
    <div className="animate-in fade-in duration-500 pb-12 w-full max-w-7xl mx-auto px-6 pt-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Multi-Temporal Forecast Hub</h1>
          <p className="text-gray-400 font-medium max-w-2xl text-sm leading-relaxed">
            Hyper-local climatic predictions across varying temporal resolutions, powered by the Indian Earth System Model (IITM-ESM) and DeepAtmosphere neural networks.
          </p>
        </div>
        <div className="flex gap-3">
          <Button onClick={() => alert("Recalibrating variance models...")} variant="outline" className="gap-2">
            <Download size={18} />
            Export Dataset
          </Button>
          <Button onClick={() => alert("Forcing manual IMD dataset sync...")} variant="default" className="gap-2">
            <Share2 size={18} />
            Share Briefing
          </Button>
        </div>
      </div>

      {/* Horizontal Scrollable Timeline */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-secondary uppercase mb-4 tracking-widest flex items-center gap-2">
          <Clock size={18} />
          Temporal Resolution Select
        </h3>
        <div className="flex gap-6 overflow-x-auto pb-4 custom-scrollbar items-stretch snap-x">
          {TIMELINES.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTimeline(item.id)}
              className={cn(
                "min-w-[240px] snap-start bg-cards/80 backdrop-blur-xl border border-white/5 p-6 rounded-xl border-l-[4px] text-left group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden",
                item.color,
                activeTimeline === item.id ? "bg-white/10 border-white/20 shadow-[0_0_20px_rgba(37,99,235,0.15)]" : ""
              )}
            >
              {activeTimeline === item.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />
              )}
              <p className="text-[10px] font-mono text-gray-400 mb-1 tracking-wider">{item.label}</p>
              <h4 className="text-xl font-semibold text-white mb-4">{item.title}</h4>
              <div className="flex justify-between items-end">
                <div>
                  <p className={cn("text-2xl font-bold font-mono tracking-tight", item.valColor)}>{item.value}</p>
                  <p className="text-xs text-gray-400">{item.sub}</p>
                </div>
                <ChevronRight size={20} className={cn(
                  "transition-all duration-300",
                  activeTimeline === item.id ? "text-primary opacity-100 translate-x-1" : "text-primary/30 opacity-50 group-hover:opacity-100 group-hover:translate-x-1"
                )} />
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Visualization */}
        <Card className="col-span-1 md:col-span-12 lg:col-span-8 p-6 flex flex-col pt-6 bg-surface/80">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white">Projected Atmosphere Dynamics</h3>
              <p className="text-gray-400 text-sm mt-1">Region: Western Ghats Corridor | confidence: σ = 0.92</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-secondary"></span>
                <span className="text-sm text-gray-400">Temperature (°C)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ffb95f]"></span>
                <span className="text-sm text-gray-400">Rainfall (mm)</span>
              </div>
            </div>
          </div>
          
          <div className="w-full flex-1 min-h-[300px] mt-4 relative bg-cards/50 rounded-xl border border-white/5 pt-4 pl-0 pr-4 pb-2">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={FORECAST_DATA} margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
                <defs>
                  <linearGradient id="colorConfidence" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5de6ff" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#5de6ff" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis 
                  dataKey="day" 
                  stroke="rgba(255,255,255,0.2)" 
                  tick={{ fill: '#8d90a0', fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                />
                
                {/* Confidence Interval Area */}
                <Area 
                  type="monotone" 
                  dataKey="confidenceHigh" 
                  stroke="none" 
                  fill="url(#colorConfidence)" 
                  isAnimationActive={true}
                />
                <Area 
                  type="monotone" 
                  dataKey="confidenceLow" 
                  stroke="none" 
                  fill="#0c1322" // Mask lower part to create range effect, basic approach
                  isAnimationActive={true}
                />

                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(23, 32, 51, 0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff', fontWeight: 'bold' }}
                />
                
                {/* Temperature Line */}
                <Line 
                  type="monotone" 
                  dataKey="temp" 
                  stroke="#5de6ff" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#5de6ff', strokeWidth: 0 }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
                
                {/* Rainfall Line */}
                <Line 
                  type="monotone" 
                  dataKey="rain" 
                  stroke="#ffb95f" 
                  strokeWidth={2} 
                  strokeDasharray="8 4"
                  dot={false}
                />
              </ComposedChart>
            </ResponsiveContainer>
            
            {/* Custom Anomaly Marker Positioned manually for the demo based on Thu */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-8 flex flex-col items-center pointer-events-none">
              <span className="text-secondary font-mono text-xs bg-secondary/10 px-2 py-1 rounded border border-secondary/20 backdrop-blur-sm shadow-[0_0_15px_rgba(93,230,255,0.2)]">
                Anomaly Detected (+2.4°)
              </span>
            </div>
          </div>
        </Card>

        {/* Model Metadata Sidebar */}
        <div className="col-span-1 md:col-span-12 lg:col-span-4 flex flex-col gap-6">
          <Card className="flex-1 bg-surface/80 p-6 flex flex-col">
            <h3 className="text-sm font-semibold text-secondary uppercase mb-6 tracking-widest flex items-center gap-2">
              <BrainCircuit size={18} />
              Model Intelligence
            </h3>
            
            <div className="space-y-6 flex-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cards rounded-lg flex items-center justify-center border border-white/5">
                  <BrainCircuit className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">DeepAtmosphere v4.2</p>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">Recursive Neural Network with Transformer architecture for spatio-temporal modeling.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cards rounded-lg flex items-center justify-center border border-white/5">
                  <Database className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Training Corpus</p>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">40 Years National History (IMD) merged with Sentinel-5P satellite data.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cards rounded-lg flex items-center justify-center border border-white/5">
                  <Zap className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Compute Power</p>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">Pratyush & Mihir Supercomputing Cluster (8.6 Petaflops).</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-400">Prediction Latency</span>
                <span className="text-sm font-mono text-primary font-bold">124ms</span>
              </div>
              <div className="w-full h-1.5 bg-cards rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[92%] shadow-[0_0_10px_rgba(180,197,255,0.8)]"></div>
              </div>
            </div>
          </Card>
        </div>

        {/* Prediction Cards: Extreme Event Probability */}
        <div className="col-span-1 md:col-span-12 mt-4">
          <h3 className="text-sm font-semibold text-secondary uppercase mb-6 tracking-widest flex items-center gap-2">
            <AlertTriangle size={18} />
            Extreme Event Probability (72h Window)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Cyclone */}
            <Card className="p-6 flex items-center justify-between group hover:border-[#ffb4ab]/30 transition-all cursor-crosshair">
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Cyclonic Storm</h4>
                <p className="text-xs text-gray-400">Bay of Bengal Formation</p>
                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-danger/20 text-danger rounded-full text-[10px] font-bold">
                  <TrendingUp size={12} />
                  HIGH RISK
                </div>
              </div>
              <div className="relative w-20 h-20 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90 transform">
                  <circle cx="40" cy="40" fill="none" r="34" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="6"></circle>
                  <circle cx="40" cy="40" fill="none" r="34" stroke="#ffb4ab" strokeDasharray="213" strokeDashoffset="32" strokeWidth="6" className="transition-all duration-1000 group-hover:stroke-[8px]"></circle>
                </svg>
                <span className="absolute text-xl font-bold font-mono text-white">85%</span>
              </div>
            </Card>

            {/* Cloudburst */}
            <Card className="p-6 flex items-center justify-between group hover:border-[#ffb95f]/30 transition-all cursor-crosshair">
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Cloudburst Event</h4>
                <p className="text-xs text-gray-400">Himalayan Foothills</p>
                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-warning/20 text-warning rounded-full text-[10px] font-bold">
                  <AlertCircle size={12} />
                  MONITORING
                </div>
              </div>
              <div className="relative w-20 h-20 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90 transform">
                  <circle cx="40" cy="40" fill="none" r="34" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="6"></circle>
                  <circle cx="40" cy="40" fill="none" r="34" stroke="#ffb95f" strokeDasharray="213" strokeDashoffset="144" strokeWidth="6" className="transition-all duration-1000 group-hover:stroke-[8px]"></circle>
                </svg>
                <span className="absolute text-xl font-bold font-mono text-white">32%</span>
              </div>
            </Card>

            {/* Heatwave */}
            <Card className="p-6 flex items-center justify-between group hover:border-[#5de6ff]/30 transition-all cursor-crosshair">
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Heatwave Surge</h4>
                <p className="text-xs text-gray-400">North-Central Plains</p>
                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-secondary/20 text-secondary rounded-full text-[10px] font-bold">
                  <CheckCircle2 size={12} />
                  NOMINAL
                </div>
              </div>
              <div className="relative w-20 h-20 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90 transform">
                  <circle cx="40" cy="40" fill="none" r="34" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="6"></circle>
                  <circle cx="40" cy="40" fill="none" r="34" stroke="#5de6ff" strokeDasharray="213" strokeDashoffset="187" strokeWidth="6" className="transition-all duration-1000 group-hover:stroke-[8px]"></circle>
                </svg>
                <span className="absolute text-xl font-bold font-mono text-white">12%</span>
              </div>
            </Card>

          </div>
        </div>

        {/* Regional Prediction Snapshot */}
        <div className="col-span-1 md:col-span-12 mt-4">
          <Card className="p-0 overflow-hidden relative border-white/10 group">
            <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-20 md:opacity-40 transition-opacity group-hover:opacity-50">
               <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596484552993-86b24d9c7923?q=80&w=600&auto=format&fit=crop')" }}></div>
               {/* Overlay effect to blend the image */}
               <div className="absolute inset-0 bg-gradient-to-r from-[#0c1322] via-[#0c1322]/80 to-transparent"></div>
            </div>
            
            <div className="relative z-10 p-8 w-full md:w-2/3">
              <h3 className="text-xl font-semibold text-white mb-6">Regional Confidence Clusters</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-1">LADAKH</p>
                  <p className="text-2xl font-bold font-mono text-primary">Stable</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-1">KERALA</p>
                  <p className="text-2xl font-bold font-mono text-danger">Critical</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-1">RAJASTHAN</p>
                  <p className="text-2xl font-bold font-mono text-warning">Fluctuating</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-1">ODISHA</p>
                  <p className="text-2xl font-bold font-mono text-primary animate-pulse">Improving</p>
                </div>
              </div>
              
              <Button onClick={() => alert("Opening advanced predictive algorithms panel...")} variant="outline" className="mt-8 hover:bg-secondary/10 hover:text-secondary hover:border-secondary/50">
                View Localized Predictions
              </Button>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
}
