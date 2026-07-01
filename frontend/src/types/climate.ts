export interface ClimateKPI {
  temperature: number;
  tempTrend: number;
  rainfall: number;
  rainDeficit: number;
  humidity: number;
  heatIndex: number;
  healthScore: number;
  aiConfidence: number;
}

export interface Alert {
  id: string;
  type: 'warning' | 'danger' | 'info';
  title: string;
  timeAgo: string;
  description: string;
}

export interface TrendData {
  month: string;
  historical: number;
  predicted: number;
}

export interface RegionalClimate {
  kpis: ClimateKPI;
  alerts: Alert[];
  trend: TrendData[];
}
