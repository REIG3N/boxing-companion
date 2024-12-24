import { ReactNode } from 'react';

export type TabType = 'basic' | 'focus' | 'notes';

export interface TabBarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export interface SessionType {
  id: string;
  label: string;
  isLive: boolean;
  description: string;
}

export interface PrescribedGoal {
  id: string;
  label: string;
  description: string;
  validationMetric: string;
}

export interface ValidationLevel {
  key: 'easier' | 'same' | 'harder';
  label: string;
}

export interface ValidationSuccessLevel {
  easier: boolean;
  same: boolean;
  harder: boolean;
  clean: boolean;
  smooth: boolean;
  ready: boolean;
}

export interface Validation {
  successByLevel: ValidationSuccessLevel;
  perceivedMastery: number;
  context: string;
}

export interface FormData {
  date: string;
  duration: string;
  sessionType: string;
  selectedGoal: string;
  rpe: number;
  enjoyment: number;
  insights: string;
  challenges: string;
  validation: Validation;
}

export interface NewSessionScreenProps {
  navigation: any;
} 