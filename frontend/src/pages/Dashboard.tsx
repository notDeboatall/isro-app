import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Sun, 
  Activity, 
  BrainCircuit,
  TrendingDown,
  TrendingUp,
  Clock4,
  BellRing,
  Globe2,
  Award
} from 'lucide-react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, CartesianGrid, YAxis } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useClimateOverview } from '../hooks/useClimate';
import { cn } from '../utils/cn';

export default function Dashboard() {
  const { data, isLoading, error } = useClimateOverview();

  if (error) {
    return <div className="p-8 text-danger text-center">Failed to load climate data.</div>;
  }

  if (isLoading || !data) {
    return (
      <div className="p-8 flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
          <p className="text-gray-400 text-sm animate-pulse">Initializing Mesh Network...</p>
        </div>
      </div>
    );
  }

  const { kpis, alerts, trend } = data;

  return (
    <div className="p-6 md:p-8 flex flex-col gap-6 max-w-[1600px] mx-auto w-full animate-in fade-in duration-500">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white font-sans">
            Regional Climate Overview
          </h2>
          <p className="text-gray-400 mt-1 text-sm">
            Live data feed from Pan-India Sensor Mesh Network
          </p>
        </div>
        
        <div className="flex gap-3 items-center">
          <Badge variant="outline" className="gap-2 px-3 py-1.5 bg-cards/50 cursor-default">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
            Live: New Delhi Station
          </Badge>
          <Badge variant="outline" className="gap-2 px-3 py-1.5 bg-cards/50 text-gray-400 cursor-default">
            <Clock4 size={14} />
            Last Update: Just now
          </Badge>
        </div>
      </div>

      {/* KPI Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <Card className="hover:border-accent/30 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.05)] cursor-default group">
          <CardContent className="p-5 flex flex-col gap-2">
            <div className="flex justify-between items-center text-gray-400 group-hover:text-gray-300 transition-colors">
              <span className="text-[10px] font-medium uppercase tracking-wider">Temperature</span>
              <Thermometer className="text-accent" size={18} />
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-bold tracking-tighter">{kpis.temperature}</span>
              <span className="text-sm font-medium text-gray-400">°C</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-warning mt-1">
              {kpis.tempTrend > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              <span className="truncate">{kpis.tempTrend > 0 ? '+' : ''}{kpis.tempTrend}° vs yesterday</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:border-primary/30 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.05)] cursor-default group">
          <CardContent className="p-5 flex flex-col gap-2">
            <div className="flex justify-between items-center text-gray-400 group-hover:text-gray-300 transition-colors">
              <span className="text-[10px] font-medium uppercase tracking-wider">Rainfall</span>
              <Droplets className="text-primary" size={18} />
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-bold tracking-tighter">{kpis.rainfall}</span>
              <span className="text-sm font-medium text-gray-400">mm</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-accent mt-1">
              <TrendingDown size={12} />
              <span className="truncate">Monsoon Deficit: {kpis.rainDeficit}%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:border-emerald-400/30 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.05)] cursor-default group">
          <CardContent className="p-5 flex flex-col gap-2">
            <div className="flex justify-between items-center text-gray-400 group-hover:text-gray-300 transition-colors">
              <span className="text-[10px] font-medium uppercase tracking-wider">Humidity</span>
              <Wind className="text-emerald-400" size={18} />
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-bold tracking-tighter">{kpis.humidity}</span>
              <span className="text-sm font-medium text-gray-400">%</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-1">
              <span className="truncate">Stable conditions</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:border-danger/30 transition-all hover:shadow-[0_0_20px_rgba(239,68,68,0.05)] cursor-default group">
          <CardContent className="p-5 flex flex-col gap-2">
            <div className="flex justify-between items-center text-gray-400 group-hover:text-gray-300 transition-colors">
              <span className="text-[10px] font-medium uppercase tracking-wider">Heat Index</span>
              <Sun className="text-danger" size={18} />
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-bold tracking-tighter">{kpis.heatIndex}</span>
              <span className="text-sm font-medium text-gray-400">°C</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-danger mt-1">
              <TrendingUp size={12} />
              <span className="truncate">High Risk Warning</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:border-accent/30 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.05)] cursor-default group">
          <CardContent className="p-5 flex flex-col gap-2">
            <div className="flex justify-between items-center text-gray-400 group-hover:text-gray-300 transition-colors">
              <span className="text-[10px] font-medium uppercase tracking-wider">Health Score</span>
              <Activity className="text-accent" size={18} />
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-bold tracking-tighter">{kpis.healthScore}</span>
              <span className="text-sm font-medium text-gray-400">/100</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-accent mt-1">
              <span className="truncate">Moderate Stability</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:border-primary/30 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.05)] cursor-default group">
          <CardContent className="p-5 flex flex-col gap-2">
            <div className="flex justify-between items-center text-gray-400 group-hover:text-gray-300 transition-colors">
              <span className="text-[10px] font-medium uppercase tracking-wider">AI Confidence</span>
              <BrainCircuit className="text-primary" size={18} />
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl font-bold tracking-tighter">{kpis.aiConfidence}</span>
              <span className="text-sm font-medium text-gray-400">%</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-primary mt-1">
              <span className="truncate flex gap-1 items-center">
                <Award size={12}/> High Model Accuracy
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Grid: Charts & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Charts Area */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <Card className="flex-1 min-h-[350px] flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Temperature Trend Analysis</CardTitle>
                  <p className="text-xs text-gray-400 mt-1">Historical baseline vs AI predicted variances</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-accent hover:shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all"></div> Predicted
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-white/40"></div> Historical
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 min-h-[250px] p-0 pr-6 pb-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22D3EE" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#22D3EE" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorHistorical" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ffffff" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis 
                    dataKey="month" 
                    stroke="rgba(255,255,255,0.2)" 
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11 }} 
                    axisLine={false}
                    tickLine={false}
                    dy={10}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.2)" 
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11 }} 
                    axisLine={false}
                    tickLine={false}
                    domain={['dataMin - 5', 'dataMax + 5']}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(23,32,51,0.9)', 
                      borderColor: 'rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
                    }} 
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="historical" stroke="rgba(255,255,255,0.3)" strokeWidth={2} fillOpacity={1} fill="url(#colorHistorical)" />
                  <Area type="monotone" dataKey="predicted" stroke="#22D3EE" strokeWidth={2} fillOpacity={1} fill="url(#colorPredicted)" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Alerts & Recs */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <Card className="flex-1 flex flex-col">
            <CardHeader className="py-4 border-b border-white/5 flex flex-row items-center justify-between shrink-0">
              <CardTitle className="text-base flex items-center gap-2">
                <BellRing size={16} className="text-warning" />
                Live Intelligence Feed
              </CardTitle>
              <Button onClick={() => alert('Loading full historical intelligence log...')} variant="ghost" size="sm" className="h-auto py-1 text-xs">View All</Button>
            </CardHeader>
            <CardContent className="p-4 flex flex-col gap-3 flex-1 overflow-y-auto max-h-[320px] custom-scrollbar">
              {alerts.map((alert) => (
                <div 
                  key={alert.id} 
                  className={cn(
                    "p-3 rounded-r-lg border-l-2 group transition-colors",
                    alert.type === 'danger' && "border-danger bg-danger/10 hover:bg-danger/20",
                    alert.type === 'warning' && "border-warning bg-warning/10 hover:bg-warning/20",
                    alert.type === 'info' && "border-accent bg-accent/10 hover:bg-accent/20"
                  )}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className={cn(
                      "text-[10px] font-bold uppercase",
                      alert.type === 'danger' && "text-danger",
                      alert.type === 'warning' && "text-warning",
                      alert.type === 'info' && "text-accent"
                    )}>
                      {alert.title}
                    </span>
                    <span className="text-[10px] text-gray-400">{alert.timeAgo}</span>
                  </div>
                  <p className="text-sm font-medium text-white">{alert.description.split('.')[0]}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-2">
                    {alert.description.split('.').slice(1).join('.').trim()}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Dynamic Climate Mesh Map placeholder */}
      <Card className="overflow-hidden">
        <CardHeader className="absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-background/90 to-transparent pb-10 border-none">
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <Globe2 size={18} className="text-primary"/>
              Dynamic Climate Mesh
            </CardTitle>
            <div className="flex gap-2">
              <Badge variant="secondary" className="text-[10px] hidden sm:inline-flex">Surface Temp</Badge>
              <Badge variant="default" className="text-[10px] bg-accent text-gray-900 border-none hover:bg-accent/90">Precipitation</Badge>
              <Badge variant="secondary" className="text-[10px] hidden sm:inline-flex">Wind Vector</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0 h-[400px] relative bg-slate-900 overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-screen scale-105"></div>
             
             {/* Map overlays mock */}
             <div className="absolute top-16 left-6 p-3 bg-cards/80 backdrop-blur-md rounded-lg border border-white/10 flex flex-col gap-2 z-10 hidden md:flex">
                <div className="flex items-center gap-2 text-[10px] font-medium"><span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span> Cluster 7A: Stable</div>
                <div className="flex items-center gap-2 text-[10px] font-medium"><span className="w-1.5 h-1.5 rounded-full bg-warning animate-pulse"></span> Cluster 2B: Anomalous</div>
                <div className="flex items-center gap-2 text-[10px] font-medium"><span className="w-1.5 h-1.5 rounded-full bg-danger animate-pulse"></span> Cluster 9F: Critical</div>
             </div>

             {/* Scan line effect */}
             <div className="absolute inset-0 w-full h-[1px] bg-accent/30 shadow-[0_0_15px_rgba(34,211,238,0.5)] animate-[pulse_3s_ease-in-out_infinite] top-1/3"></div>
        </CardContent>
      </Card>
      
    </div>
  );
}
