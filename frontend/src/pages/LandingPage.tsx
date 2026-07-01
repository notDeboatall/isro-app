import { useNavigate } from 'react-router-dom';
import { 
  Rocket, 
  Map, 
  CloudRain, 
  Thermometer, 
  Globe, 
  Brain,
  AlertTriangle,
  BarChart4,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const FEATURES = [
  { icon: CloudRain, title: 'AI Rainfall Forecast', desc: 'High-precision monsoon prediction models with block-level granularity.', color: 'text-secondary', bg: 'bg-secondary/10', border: 'border-secondary/20' },
  { icon: Thermometer, title: 'Heat Stress Analysis', desc: 'Heatwave mapping using surface-level humidity and temperature coupling.', color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' },
  { icon: Globe, title: 'Planetary Digital Twin', desc: 'Integrated earth system model for holistic atmosphere-ocean interaction.', color: 'text-secondary', bg: 'bg-secondary/20', border: 'border-secondary/40', highlight: true },
  { icon: Brain, title: 'Scenario Simulation', desc: "Run 'What-If' scenarios for policy testing and urban development impact.", color: 'text-tertiary', bg: 'bg-tertiary/10', border: 'border-tertiary/20' },
  { icon: AlertTriangle, title: 'Risk Assessment', desc: 'Probabilistic risk profiling for disaster mitigation and urban planning.', color: 'text-danger', bg: 'bg-danger/10', border: 'border-danger/20' },
  { icon: BarChart4, title: 'District Analytics', desc: 'Custom dashboards for district-level administrative action plans.', color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' },
];

const MAP_FEATURES = [
  { title: '30m Hyper-Resolution', desc: 'Observe localized impact zones across the entire sub-continent.' },
  { title: 'Real-time IMD Sync', desc: 'Direct integration with national meteorological sensor grids.' },
  { title: 'Satellite Multi-Band', desc: 'Overlay NDVI, Surface Water, and Urban Heat layers instantly.' },
];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0c1322] text-gray-200 overflow-x-hidden">
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0c1322]/80 backdrop-blur-xl border-b border-white/10 h-16 px-8 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-primary tracking-tight">ClimateTwin India</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => navigate('/dashboard')} className="text-secondary font-bold text-sm font-mono">Dashboard</button>
          <button onClick={() => navigate('/map')} className="text-gray-400 hover:text-secondary transition-colors text-sm font-mono">Climate Map</button>
          <button onClick={() => navigate('/simulator')} className="text-gray-400 hover:text-secondary transition-colors text-sm font-mono">Simulations</button>
          <button onClick={() => navigate('/analytics')} className="text-gray-400 hover:text-secondary transition-colors text-sm font-mono">Analytics</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.12) 0%, transparent 70%)' }}></div>
        
        <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_#5de6ff]"></span>
              <span className="text-xs font-mono text-primary uppercase tracking-widest">Mission Control: AI Confidence 98.4%</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              <span className="block">ClimateTwin</span>
              <span className="text-secondary" style={{ textShadow: '0 0 20px rgba(93, 230, 255, 0.4)' }}>India</span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Sovereign AI Digital Twin of India's climate ecosystems. High-fidelity modeling using national satellite datasets for resilience and planetary protection.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button 
                onClick={() => navigate('/dashboard')}
                className="px-8 py-4 bg-primary text-white rounded-xl font-semibold text-lg hover:brightness-110 active:scale-95 transition-all shadow-lg flex items-center gap-3 group"
              >
                Launch Dashboard
                <Rocket size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('/map')}
                className="px-8 py-4 bg-transparent border border-secondary/50 text-secondary rounded-xl font-semibold text-lg hover:bg-secondary/10 transition-all flex items-center gap-3"
              >
                Explore Climate Map
                <Map size={20} />
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 opacity-70">
              <div className="text-center">
                <div className="text-xl font-bold text-white font-mono">1.2 PB</div>
                <div className="text-xs font-mono text-gray-500">Satellite Data</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="text-center">
                <div className="text-xl font-bold text-white font-mono">30m</div>
                <div className="text-xs font-mono text-gray-500">Grid Resolution</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="text-center">
                <div className="text-xl font-bold text-white font-mono">4Hz</div>
                <div className="text-xs font-mono text-gray-500">Real-time Sync</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-[500px] aspect-square" style={{ animation: 'float 6s ease-in-out infinite' }}>
              {/* Floating HUD Cards */}
              <div className="absolute top-1/4 -right-4 bg-[rgba(25,31,47,0.7)] backdrop-blur-xl border border-white/10 p-4 rounded-xl max-w-[180px] z-20 shadow-2xl hover:border-secondary/30 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Thermometer size={18} className="text-secondary" />
                  <span className="text-xs font-mono text-white">Avg. Temp</span>
                </div>
                <div className="text-2xl font-semibold text-secondary">+1.42°C</div>
                <div className="text-[10px] text-danger font-mono uppercase tracking-wider">Anomaly Alert</div>
              </div>
              
              <div className="absolute bottom-1/4 -left-4 bg-[rgba(25,31,47,0.7)] backdrop-blur-xl border border-white/10 p-4 rounded-xl max-w-[200px] z-20 shadow-2xl hover:border-primary/30 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <CloudRain size={18} className="text-primary" />
                  <span className="text-xs font-mono text-white">Precipitation</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-primary w-[75%]"></div>
                </div>
                <div className="text-xs text-gray-400 font-mono">Normal Range: 60-80%</div>
              </div>
              
              {/* Decorative Rings */}
              <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-secondary/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            </div>
          </div>
        </div>
        
        {/* Bottom tagline */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs font-mono text-gray-500">Monitor. Predict. Simulate. Protect.</span>
          <div className="w-px h-12 bg-gradient-to-b from-secondary to-transparent"></div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 bg-[#0c1322] relative">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-white">Sovereign Climate Intelligence</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A multi-layered digital twin architecture processing petabytes of geospatial data to safeguard the Indian subcontinent.
            </p>
            <div className="mx-auto w-32 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(93, 230, 255, 0.4), transparent)' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, index) => (
              <div 
                key={index}
                className={`bg-[rgba(25,31,47,0.4)] backdrop-blur-xl border border-white/[0.08] p-8 rounded-xl group relative overflow-hidden hover:bg-[rgba(30,38,58,0.6)] hover:border-secondary/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_15px_rgba(93,230,255,0.1)] hover:-translate-y-1 transition-all duration-300 ${feature.highlight ? 'border-secondary/30 bg-secondary/5' : ''}`}
              >
                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-6 border ${feature.border}`}>
                  <feature.icon size={24} className={feature.color} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Preview Section */}
      <section className="py-24 bg-[#070e1d]">
        <div className="container mx-auto px-8 bg-[rgba(25,31,47,0.4)] backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden min-h-[600px] flex flex-col md:flex-row relative">
          <div className="w-full md:w-1/3 p-12 z-10 bg-[#141b2b]/90 backdrop-blur-md flex flex-col justify-center border-r border-white/10">
            <h2 className="text-3xl font-bold text-white mb-8">Interactive Map Explorer</h2>
            <ul className="space-y-6">
              {MAP_FEATURES.map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <CheckCircle2 className="text-secondary mt-1 group-hover:scale-110 transition-transform flex-shrink-0" size={22} />
                  <div>
                    <div className="text-white font-semibold">{item.title}</div>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => navigate('/map')}
              className="mt-12 w-fit px-8 py-4 border border-secondary text-secondary rounded-xl font-semibold hover:bg-secondary/10 transition-all flex items-center gap-2 group"
            >
              Open Full Map
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="w-full md:w-2/3 h-80 md:h-auto relative">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#141b2b]/40 to-transparent"></div>
            {/* Animated Hotspot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-32 h-32 bg-secondary/10 rounded-full animate-ping"></div>
                <div className="absolute w-16 h-16 bg-secondary/20 rounded-full animate-pulse"></div>
                <div className="w-4 h-4 bg-secondary rounded-full border-2 border-white shadow-[0_0_15px_rgba(93,230,255,0.8)]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#070e1d] border-t border-white/10 py-12 px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xl font-bold text-primary">ClimateTwin India</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                A sovereign AI-powered climate digital twin for India, built on national satellite datasets and advanced atmospheric modeling for resilience planning.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><button onClick={() => navigate('/dashboard')} className="hover:text-secondary transition-colors">Dashboard</button></li>
                <li><button onClick={() => navigate('/map')} className="hover:text-secondary transition-colors">Climate Map</button></li>
                <li><button onClick={() => navigate('/predictions')} className="hover:text-secondary transition-colors">Predictions</button></li>
                <li><button onClick={() => navigate('/simulator')} className="hover:text-secondary transition-colors">Simulator</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Intelligence</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><button onClick={() => navigate('/analytics')} className="hover:text-secondary transition-colors">Analytics</button></li>
                <li><button onClick={() => navigate('/settings')} className="hover:text-secondary transition-colors">Settings</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs font-mono">© 2024 ClimateTwin India. Built for ISRO Bharatiya Antariksh Hackathon.</p>
            <p className="text-gray-600 text-xs font-mono">Engine: TWIN-V4.2 | Status: OPERATIONAL</p>
          </div>
        </div>
      </footer>

      {/* Keyframe for float animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
