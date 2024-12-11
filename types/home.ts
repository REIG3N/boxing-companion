import { ComponentType } from 'react';

export interface MetricCardProps {
  title: string;
  value: string;
  icon: ComponentType<any>;
  trend?: number;
  subtitle?: string;
}

export interface SessionCardProps {
  date: string;
  duration: string;
  focus: string;
  onPress?: () => void;
}

export interface WeekOverviewProps {
  days: string[];
  activeDaysIndices: number[];
}

export interface NextSessionFocusProps {
  onStartSession: () => void;
}