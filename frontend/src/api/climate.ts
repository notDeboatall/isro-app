import type { RegionalClimate } from '../types/climate';
import mockData from '../data/climate.json';

// In production, this would use axios to hit the FastAPI backend
// e.g. return axios.get<RegionalClimate>('/api/v1/climate/overview').then(res => res.data);

export const fetchRegionalClimate = async (): Promise<RegionalClimate> => {
  return new Promise((resolve) => {
    // Simulate network delay for loading states
    setTimeout(() => {
      resolve(mockData as RegionalClimate);
    }, 800);
  });
};
