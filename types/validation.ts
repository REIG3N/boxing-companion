export interface ValidationLevel {
  key: string;
  label: string;
  desc: string;
}

export interface ValidationState {
  successByLevel: Record<string, boolean>;
  perceivedMastery: number;
  context: string;
} 