import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.tsx';
import Dashboard from './pages/Dashboard.tsx';
import ClimateMap from './pages/ClimateMap.tsx';
import Predictions from './pages/Predictions.tsx';
import Simulator from './pages/Simulator.tsx';
import Analytics from './pages/Analytics.tsx';
import Settings from './pages/Settings.tsx';

import LandingPage from './pages/LandingPage.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<MainLayout />}>
        {/* We will add page routes here incrementally */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/map" element={<ClimateMap />} />
        <Route path="/predictions" element={<Predictions />} />
        <Route path="/simulator" element={<Simulator />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/reports" element={<div className="p-8 text-xl">Reports Content Coming Soon...</div>} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
