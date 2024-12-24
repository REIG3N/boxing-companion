import { ComponentType } from 'react';

export interface ProgressBarProps {
  progress: number;
  title: string;
  currentSessions: number;
  totalSessions: number;
}

export interface SwotCardProps {
  title: string;
  items: string[];
  borderColor: string;
  type: 'strengths' | 'weaknesses' | 'opportunities' | 'threats';
}

export type SubGoalCardProps = SubGoal;

export interface MainGoal {
  title: string;
  progress: number;
  currentSessions: number;
  totalSessions: number;
}

export interface SwotAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export interface SubGoal {
  id: number;
  title: string;
  instruction: string;
  longInstruction: string;
  validationMetric: string;
  completionStatus: 'unknown' | 'inProgress' | 'completed';
}

export interface PreviousTrainingGoal {
  id: number;
  title: string;
  description: string;
  date: string;
}

export interface GoalsData {
  mainGoal: MainGoal;
  swot: SwotAnalysis;
  subGoals: SubGoal[];
  previousTrainingGoals: PreviousTrainingGoal[];
}