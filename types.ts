
export interface StrengthCheck {
  id: string;
  label: string;
  regex: RegExp;
  met: boolean;
}

export interface PasswordMetrics {
  score: number; // 0 to 4
  strength: 'Very Weak' | 'Weak' | 'Medium' | 'Strong' | 'Very Strong';
  entropy: number;
  checks: StrengthCheck[];
}

export type AppView = 'analyzer' | 'documentation';
