import { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { 
  Layers, 
  ThermometerSun, 
  MapPin, 
  RefreshCcw, 
  ShieldAlert, 
  Radio, 
  Clock4
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { cn } from '../utils/cn';

// Leaflet map needs a defined height. We use absolute inset-0 on parent and h-full on MapContainer.

export default function ClimateMap() {
  const [activeLayer, setActiveLayer] = useState<'surface'|'precipitation'|'wind'|'vulnerability'>('surface');

  // Simulated live sensor data
  const sensorData = [
    { id: 1, pos: [28.6139, 77.2090] as [number, number], name: "New Delhi Node", status: "critical", temp: 42.1, precip: 0 },
    { id: 2, pos: [19.0760, 72.8777] as [number, number], name: "Mumbai Node", status: "warning", temp: 33.5, precip: 15 },
    { id: 3, pos: [13.0827, 80.2707] as [number, number], name: "Chennai Node", status: "stable", temp: 35.2, precip: 5 },
    { id: 4, pos: [22.5726, 88.3639] as [number, number], name: "Kolkata Node", status: "stable", temp: 34.8, precip: 45 },
    { id: 5, pos: [26.9124, 75.7873] as [number, number], name: "Jaipur Node", status: "critical", temp: 45.3, precip: 0 },
  ];

  return (
    <div className="flex-1 relative flex flex-col h-[calc(100vh-64px)] w-full overflow-hidden animate-in fade-in duration-500">
      
      {/* Map Background Leaflet */}
      <div className="absolute inset-0 z-0 bg-[#081120]">
        <MapContainer 
          center={[22.3511, 78.6677]} 
          zoom={5} 
          zoomControl={false}
          className="h-full w-full custom-map-style"
        >
          {/* A dark themed tile layer */}
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />
          <ZoomControl position="bottomright" />
          
          {sensorData.map(sensor => (
            <CircleMarker 
              key={sensor.id}
              center={sensor.pos} 
              radius={8}
              pathOptions={{ 
                color: sensor.status === 'critical' ? '#ef4444' : sensor.status === 'warning' ? '#f59e0b' : '#22d3ee',
                fillColor: sensor.status === 'critical' ? '#ef4444' : sensor.status === 'warning' ? '#f59e0b' : '#22d3ee',
                fillOpacity: 0.6,
                weight: 2
              }}
            >
              <Popup className="custom-popup">
                <div className="flex flex-col gap-1 p-1">
                  <span className="font-bold text-gray-800 text-sm">{sensor.name}</span>
                  <span className="text-gray-600 text-xs">Temp: {sensor.temp}°C</span>
                  <span className="text-gray-600 text-xs">Precip: {sensor.precip}mm</span>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      {/* Map Global Scan overlay Effect */}
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-30 mix-blend-screen bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-[scan_6s_linear_infinite]" style={{ backgroundSize: '100% 200%' }}></div>

      {/* Left Overlay Panels: Spatial Filters */}
      <div className="absolute left-6 top-6 z-10 w-80 flex flex-col gap-4 max-h-[calc(100%-120px)] overflow-y-auto custom-scrollbar pr-2 hidden md:flex">
        <Card className="bg-surface/80 backdrop-blur-xl border border-white/10 shadow-2xl">
          <CardHeader className="py-3 border-b border-white/5">
            <CardTitle className="text-sm flex items-center gap-2 text-white">
              <Layers size={16} className="text-primary" />
              Spatial Intelligence Layers
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 flex flex-col gap-3">
            {[
              { id: 'surface', label: 'Surface Temperature', icon: ThermometerSun, color: 'text-error' },
              { id: 'precipitation', label: 'Precipitation Radar', icon: Radio, color: 'text-primary' },
              { id: 'wind', label: 'Atmospheric Wind', icon: RefreshCcw, color: 'text-emerald-400' },
              { id: 'vulnerability', label: 'Vulnerability Index', icon: ShieldAlert, color: 'text-warning' }
            ].map((layer) => (
              <label 
                key={layer.id} 
                className={cn(
                  "flex items-center justify-between p-2 rounded border cursor-pointer transition-all",
                  activeLayer === layer.id ? "bg-primary/20 border-primary shadow-[0_0_10px_rgba(37,99,235,0.2)]" : "bg-cards/50 border-transparent hover:bg-white/5"
                )}
                onClick={() => setActiveLayer(layer.id as any)}
              >
                <div className="flex items-center gap-3">
                  <layer.icon size={16} className={layer.color} />
                  <span className="text-xs font-medium text-white">{layer.label}</span>
                </div>
                <div className={cn(
                  "w-3 h-3 rounded-full border border-gray-400 flex items-center justify-center",
                  activeLayer === layer.id ? "border-primary" : ""
                )}>
                  {activeLayer === layer.id && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </div>
              </label>
            ))}
          </CardContent>
        </Card>

        {/* Global Stats context */}
        <Card className="bg-surface/80 backdrop-blur-xl border-white/10">
          <CardContent className="p-4">
             <div className="text-xs text-gray-400 font-medium mb-2 flex items-center gap-2">
                <MapPin size={12} className="text-accent"/> Focus: Indian Subcontinent
             </div>
             <div className="grid grid-cols-2 gap-2 mt-3">
                <div className="bg-cards rounded p-2 border border-white/5">
                  <div className="text-[10px] text-gray-500 uppercase">Avg Temp</div>
                  <div className="text-lg font-bold text-white mt-1">33.5°</div>
                </div>
                <div className="bg-cards rounded p-2 border border-white/5">
                  <div className="text-[10px] text-gray-500 uppercase">Anomalies</div>
                  <div className="text-lg font-bold text-danger mt-1">12</div>
                </div>
             </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Overlay Panels: Live Feeds */}
      <div className="absolute right-6 top-6 z-10 w-80 flex flex-col gap-4 hidden lg:flex">
         <Card className="bg-surface/80 backdrop-blur-xl border border-white/10 shadow-2xl">
          <CardHeader className="py-3 border-b border-white/5 flex flex-row items-center justify-between">
            <CardTitle className="text-sm flex items-center gap-2 text-white">
              <ShieldAlert size={16} className="text-danger" />
              Live Location Intelligence
            </CardTitle>
            <Badge variant="outline" className="text-[9px] bg-danger/20 text-danger border-danger/50 px-1 py-0 h-4 animate-pulse">4 CRISIS</Badge>
          </CardHeader>
          <CardContent className="p-0 max-h-[400px] overflow-y-auto custom-scrollbar">
            {/* Feed List Items */}
            {[
              { id: 101, type: 'CRITICAL', title: 'Severe Heat Dome Active', loc: 'Jaipur, RJ', time: 'LIVE', class: 'border-danger/50' },
              { id: 102, type: 'WARNING', title: 'Monsoon Front Accelerating', loc: 'Coastal MH', time: '-2h projection', class: 'border-warning/50' },
              { id: 103, type: 'INFO', title: 'Station Calibration', loc: 'Node Alpha (KOL)', time: 'Completed', class: 'border-accent/50' },
            ].map(item => (
              <div key={item.id} className={cn("p-4 border-b bg-gradient-to-r hover:bg-white/5 cursor-pointer transition-colors", `from-transparent to-[${item.class.split('/')[0]}]/5`)}>
                <div className="flex justify-between items-center mb-1">
                  <span className={cn("text-[9px] font-bold uppercase", item.type === 'CRITICAL' ? 'text-danger' : item.type === 'WARNING' ? 'text-warning' : 'text-accent')}>{item.type}</span>
                  <span className="text-[10px] text-gray-500 flex items-center gap-1"><Clock4 size={10}/> {item.time}</span>
                </div>
                <div className="text-xs font-semibold text-white">{item.title}</div>
                <div className="text-[10px] text-gray-400 mt-1 flex items-center gap-1">
                  <MapPin size={10}/> {item.loc}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Bottom Timeline Overlay */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-full max-w-2xl px-6">
        <Card className="bg-surface/90 backdrop-blur-xl border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
           <CardContent className="p-4 flex flex-col gap-3">
             <div className="flex justify-between items-center">
                <span className="text-xs font-medium text-white flex items-center gap-2">
                  <Clock4 size={14} className="text-primary"/>
                  Temporal Predictor
                </span>
                <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded font-mono">T+48H FORECAST</span>
             </div>
             
             {/* Simple timeline slider */}
             <div className="relative pt-2 pb-1">
                <input type="range" min="0" max="100" defaultValue="25" className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-primary" />
                <div className="flex justify-between text-[9px] text-gray-500 font-mono mt-2 px-1">
                  <span>[-24H] HISTORICAL</span>
                  <span>[00H] LIVE</span>
                  <span>[+24H] SIM</span>
                  <span>[+48H] SIM</span>
                  <span>[+72H] SIM</span>
                </div>
             </div>
           </CardContent>
        </Card>
      </div>

    </div>
  );
}
