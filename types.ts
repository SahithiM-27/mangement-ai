
export interface StatData {
  label: string;
  value: string | number;
  trend: number;
  trendLabel: string;
  unit?: string;
}

export interface ChartDataPoint {
  time: string;
  count: number;
}

export interface User {
  id: string;
  name: string;
  role: string;
}

export enum View {
  OVERVIEW = 'Overview',
  CROWD_ENTRIES = 'Crowd Entries',
  ANALYTICS = 'Analytics',
  SETTINGS = 'Settings'
}
