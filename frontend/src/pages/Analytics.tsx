import { 
  Filter, 
  BarChart4, 
  TrendingUp, 
  TrendingDown,
  Droplets,
  Info, 
  FileText,
  AlertTriangle,
  Sparkles,
  Download
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const SEASONAL_DATA = [
  { name: 'JAN-MAR', baseline: 120, current: 172 },
  { name: 'APR-JUN', baseline: 80, current: 110 },
  { name: 'JUL-SEP', baseline: 180, current: 80 },
  { name: 'OCT-DEC', baseline: 100, current: 140 },
];

export default function Analytics() {
  return (
    <div className="animate-in fade-in duration-500 pb-20 w-full max-w-[1400px] mx-auto px-6 pt-6">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <nav className="flex items-center gap-2 text-gray-500 text-xs font-mono mb-2 uppercase tracking-wider">
            <span>Intelligence</span>
            <span className="text-[14px]">{'>'}</span>
            <span className="text-secondary font-bold">Analytics Hub</span>
          </nav>
          <h2 className="text-3xl text-white font-bold tracking-tight">Data Analytics & Reports</h2>
          <p className="text-gray-400 text-sm max-w-2xl mt-2 leading-relaxed">Historical climate modeling and high-fidelity intelligence report generation for cross-state policy planning.</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="gap-2">
            <Filter size={18} /> Filter View
          </Button>
          <Button className="gap-2 bg-secondary text-on-secondary hover:bg-secondary/90 shadow-[0_0_15px_rgba(93,230,255,0.3)]">
            <BarChart4 size={18} /> Generate Custom Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* District Ranking Table */}
        <Card className="col-span-1 md:col-span-12 lg:col-span-8 p-6 flex flex-col bg-surface/80">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-secondary rounded-full"></div>
              <h3 className="text-xl font-semibold text-white">District Vulnerability Ranking</h3>
            </div>
            <div className="flex items-center gap-2 bg-cards px-3 py-1.5 rounded-md border border-white/5">
              <span className="text-xs text-gray-400 font-mono tracking-wider font-bold">PERIOD: Q3 2024</span>
            </div>
          </div>
          
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-500 font-mono text-xs uppercase tracking-wider border-b border-white/5">
                  <th className="pb-4 px-4 font-semibold">Rank</th>
                  <th className="pb-4 px-4 font-semibold">District / State</th>
                  <th className="pb-4 px-4 font-semibold">Risk Index</th>
                  <th className="pb-4 px-4 font-semibold">Anomaly Trend</th>
                  <th className="pb-4 px-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="text-white text-sm">
                
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer group">
                  <td className="py-4 px-4 font-mono text-secondary font-bold">#01</td>
                  <td className="py-4 px-4">
                    <div className="font-semibold text-white group-hover:text-secondary transition-colors">Kutch</div>
                    <div className="text-xs text-gray-500">Gujarat</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-mono text-danger font-bold text-lg">9.4</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1 text-danger">
                      <TrendingUp size={16} />
                      <span className="text-xs font-mono font-bold">+1.2°C</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant="outline" className="bg-danger/10 text-danger border-danger/30 gap-1.5 tracking-wider px-2 py-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-danger animate-pulse"></div>
                      CRITICAL
                    </Badge>
                  </td>
                </tr>

                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer group">
                  <td className="py-4 px-4 font-mono text-secondary font-bold">#02</td>
                  <td className="py-4 px-4">
                    <div className="font-semibold text-white group-hover:text-tertiary transition-colors">Barmer</div>
                    <div className="text-xs text-gray-500">Rajasthan</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-mono text-warning font-bold text-lg">8.8</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1 text-warning">
                      <TrendingUp size={16} />
                      <span className="text-xs font-mono font-bold">+0.9°C</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                     <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30 gap-1.5 tracking-wider px-2 py-0.5">
                      HIGH ALERT
                    </Badge>
                  </td>
                </tr>

                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer group">
                  <td className="py-4 px-4 font-mono text-secondary font-bold">#03</td>
                  <td className="py-4 px-4">
                    <div className="font-semibold text-white group-hover:text-tertiary transition-colors">Sundarbans</div>
                    <div className="text-xs text-gray-500">West Bengal</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-mono text-warning font-bold text-lg">8.2</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1 text-warning">
                      <Droplets size={16} />
                      <span className="text-xs font-mono font-bold">+4mm SLR</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                     <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30 gap-1.5 tracking-wider px-2 py-0.5">
                      HIGH ALERT
                    </Badge>
                  </td>
                </tr>

                 <tr className="hover:bg-white/5 transition-colors cursor-pointer group">
                  <td className="py-4 px-4 font-mono text-secondary font-bold">#04</td>
                  <td className="py-4 px-4">
                    <div className="font-semibold text-white group-hover:text-primary transition-colors">Anantapur</div>
                    <div className="text-xs text-gray-500">Andhra Pradesh</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-mono text-primary font-bold text-lg">7.5</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1 text-primary">
                      <TrendingDown size={16} />
                      <span className="text-xs font-mono font-bold">-15% Rain</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                     <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 gap-1.5 tracking-wider px-2 py-0.5">
                      MONITORING
                    </Badge>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex justify-center border-t border-white/5 pt-4">
            <button className="text-secondary font-mono text-xs uppercase tracking-widest hover:underline font-bold">View All 766 Districts</button>
          </div>
        </Card>

        {/* Heatmap Visualization */}
        <Card className="col-span-1 md:col-span-12 lg:col-span-4 p-6 flex flex-col h-full bg-surface/80">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Climate Anomaly Heatmap</h3>
            <Info size={18} className="text-gray-500 cursor-pointer hover:text-secondary transition-colors" />
          </div>
          <div className="flex-1 relative rounded-lg overflow-hidden bg-cards border border-white/5 min-h-[250px]">
             {/* Mock Map Background */}
            <div 
              className="w-full h-full bg-cover bg-center opacity-80" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')" }}
            >
              <div className="absolute inset-0 bg-[#081120]/60 mix-blend-multiply"></div>
            </div>
            
            {/* Legend */}
            <div className="absolute bottom-4 left-4 right-4 p-3 bg-surface-container/90 backdrop-blur rounded border border-white/10">
              <div className="text-[10px] text-gray-400 font-bold uppercase mb-2 tracking-wider text-center">Temperature Variance (°C)</div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-[10px] font-mono font-bold text-gray-300">-2</span>
                <div className="h-2 flex-1 rounded-full bg-gradient-to-r from-primary via-[#5de6ff] to-danger max-w-[120px]"></div>
                <span className="text-[10px] font-mono font-bold text-gray-300">+4</span>
              </div>
            </div>
          </div>
          <Button variant="outline" className="mt-4 w-full border-secondary/30 text-secondary hover:bg-secondary/10 hover:text-secondary">
            Expand Map View
          </Button>
        </Card>

        {/* Seasonal Comparison Bar Charts */}
        <Card className="col-span-1 md:col-span-12 lg:col-span-6 p-6 flex flex-col bg-surface/80">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-semibold text-white">Seasonal Variance</h3>
              <p className="text-gray-500 text-xs mt-1">2024 vs Historical Baseline (1990-2020)</p>
            </div>
            <select className="bg-cards border border-white/10 text-sm font-semibold rounded px-4 py-2 ring-1 ring-white/5 focus:ring-secondary cursor-pointer text-white">
              <option>Precipitation (mm)</option>
              <option>Heat Index</option>
              <option>Humidity</option>
            </select>
          </div>
          
          <div className="w-full flex-1 min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={SEASONAL_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: '#8d90a0', fontSize: 10, fontWeight: 'bold' }} 
                  axisLine={false} 
                  tickLine={false} 
                  dy={10}
                />
                <YAxis 
                  tick={{ fill: '#8d90a0', fontSize: 12 }} 
                  axisLine={false} 
                  tickLine={false}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(23, 32, 51, 0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ fontWeight: 'bold' }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  iconType="circle"
                  wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
                />
                <Bar dataKey="baseline" name="Historical Baseline" fill="rgba(255,255,255,0.1)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="current" name="Current (2024)" fill="#b4c5ff" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Recent Intelligence Reports */}
        <Card className="col-span-1 md:col-span-12 lg:col-span-6 p-6 flex flex-col bg-surface/80">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Intelligence Reports</h3>
            <button className="text-secondary text-[12px] font-mono hover:underline font-bold tracking-wider uppercase">History</button>
          </div>
          
          <div className="space-y-4 max-h-[300px] overflow-y-auto custom-scrollbar pr-2 flex-1">
            
            {/* Report Item */}
            <div className="flex items-center justify-between p-4 bg-cards rounded-lg border border-white/5 hover:border-secondary/30 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20">
                  <FileText className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm group-hover:text-secondary transition-colors">Monsoon Anomaly Analysis - West India</h4>
                  <p className="text-[12px] text-gray-500 mt-1 font-mono">Generated: Oct 24, 2024 • 14.2 MB</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-white/10 rounded-md transition-colors text-gray-400 hover:text-white" title="Download Document">
                  <Download size={18} />
                </button>
              </div>
            </div>

            {/* Report Item */}
            <div className="flex items-center justify-between p-4 bg-cards rounded-lg border border-white/5 hover:border-warning/30 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center border border-warning/20">
                  <AlertTriangle className="text-warning" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm group-hover:text-warning transition-colors">Heatwave Projection Report - Q4</h4>
                  <p className="text-[12px] text-gray-500 mt-1 font-mono">Generated: Oct 20, 2024 • 8.5 MB</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-white/10 rounded-md transition-colors text-gray-400 hover:text-white" title="Download Document">
                  <Download size={18} />
                </button>
              </div>
            </div>

            {/* Report Item */}
            <div className="flex items-center justify-between p-4 bg-cards rounded-lg border border-white/5 hover:border-primary/30 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                  <BarChart4 className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm group-hover:text-primary transition-colors">Annual Sustainability Index Draft</h4>
                  <p className="text-[12px] text-gray-500 mt-1 font-mono">Generated: Oct 15, 2024 • 22.1 MB</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-white/10 rounded-md transition-colors text-gray-400 hover:text-white" title="Download Document">
                  <Download size={18} />
                </button>
              </div>
            </div>
            
          </div>
        </Card>

        {/* Custom Report Builder Section */}
        <Card className="col-span-1 md:col-span-12 p-0 overflow-hidden bg-surface/80 border-white/5 shadow-2xl mt-4">
          <div className="p-6 border-b border-white/5 bg-white/5">
            <h3 className="text-xl font-semibold text-white mb-2">Generate Specialized Intelligence Report</h3>
            <p className="text-gray-400 text-sm">Configure parameters for deep-learning powered climate projections and structural risk assessment.</p>
          </div>
          
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Date Range */}
            <div>
              <label className="block text-xs font-mono text-secondary uppercase mb-4 tracking-widest font-bold">Date Range Scope</label>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Start Date</span>
                  <input type="date" defaultValue="2024-01-01" className="w-full bg-cards border-white/10 rounded text-sm focus:ring-secondary focus:border-secondary text-white p-2.5 [color-scheme:dark]" />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">End Date</span>
                  <input type="date" defaultValue="2030-12-31" className="w-full bg-cards border-white/10 rounded text-sm focus:ring-secondary focus:border-secondary text-white p-2.5 [color-scheme:dark]" />
                </div>
              </div>
            </div>

            {/* Parameter Selection */}
            <div>
              <label className="block text-xs font-mono text-secondary uppercase mb-4 tracking-widest font-bold">Primary Parameters</label>
              <div className="flex flex-wrap gap-2">
                <Button className="bg-secondary text-on-secondary hover:bg-secondary/90 shadow-lg shadow-secondary/20 h-auto py-2 font-bold text-sm">Surface Temp</Button>
                <Button variant="outline" className="h-auto py-2 font-semibold text-sm">Sea Level</Button>
                <Button variant="outline" className="h-auto py-2 font-semibold text-sm">CO2 Concentration</Button>
                <Button variant="outline" className="h-auto py-2 font-semibold text-sm">Precipitation</Button>
                <Button variant="outline" className="h-auto py-2 font-semibold text-sm">Wind Velocity</Button>
              </div>
            </div>

            {/* Export Format */}
            <div className="flex flex-col justify-between">
              <div>
                <label className="block text-xs font-mono text-secondary uppercase mb-4 tracking-widest font-bold">Advanced Options</label>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" defaultChecked className="rounded bg-cards border-white/10 text-secondary focus:ring-secondary mt-1 w-4 h-4" />
                    <span className="text-sm font-semibold text-white">Include AI Predictive Uncertainty Layers</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="rounded bg-cards border-white/10 text-secondary focus:ring-secondary mt-1 w-4 h-4" />
                    <span className="text-sm font-semibold text-white">Export High-Res GeoTIFF Data</span>
                  </div>
                </div>
              </div>
              <Button className="mt-6 w-full py-6 bg-secondary text-on-secondary text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-secondary/20 hover:scale-[1.02] transition-transform">
                <Sparkles size={18} /> 
                COMPILE CUSTOM INTELLIGENCE
              </Button>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
}
