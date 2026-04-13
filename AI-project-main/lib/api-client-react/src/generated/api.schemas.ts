export interface HealthStatus {
  status: string;
}

export interface ErrorResponse {
  error: string;
}

export interface MessageResponse {
  message: string;
}

export interface SignupBody {
  username: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
}

export interface AuthResponse {
  user: User;
  message: string;
}

export interface UserWithStats {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
  predictionCount: number;
  lastPredictionAt?: string | null;
}

export type PredictionInputGender =
  (typeof PredictionInputGender)[keyof typeof PredictionInputGender];

export const PredictionInputGender = {
  male: "male",
  female: "female",
} as const;

export type PredictionInputAlcoholConsumption =
  (typeof PredictionInputAlcoholConsumption)[keyof typeof PredictionInputAlcoholConsumption];

export const PredictionInputAlcoholConsumption = {
  none: "none",
  low: "low",
  moderate: "moderate",
  heavy: "heavy",
} as const;

export type PredictionInputPhysicalActivity =
  (typeof PredictionInputPhysicalActivity)[keyof typeof PredictionInputPhysicalActivity];

export const PredictionInputPhysicalActivity = {
  sedentary: "sedentary",
  light: "light",
  moderate: "moderate",
  active: "active",
  very_active: "very_active",
} as const;

export interface PredictionInput {
  /** Age in years */
  age: number;
  gender: PredictionInputGender;
  /** Body Mass Index */
  bmi: number;
  alcoholConsumption: PredictionInputAlcoholConsumption;
  physicalActivity: PredictionInputPhysicalActivity;
  /** Alanine Aminotransferase (U/L) */
  alt: number;
  /** Aspartate Aminotransferase (U/L) */
  ast: number;
  /** Total Cholesterol (mg/dL) */
  cholesterol: number;
  /** Fasting Blood Glucose (mg/dL) */
  glucose: number;
}

export type PredictionResultRiskLevel =
  (typeof PredictionResultRiskLevel)[keyof typeof PredictionResultRiskLevel];

export const PredictionResultRiskLevel = {
  low: "low",
  moderate: "moderate",
  high: "high",
} as const;

export interface Recommendations {
  diet: string[];
  exercise: string[];
  lifestyle: string[];
  warnings: string[];
}

export type NormalRangesAlt = {
  min: number;
  max: number;
  unit: string;
};

export type NormalRangesAst = {
  min: number;
  max: number;
  unit: string;
};

export type NormalRangesCholesterol = {
  min: number;
  max: number;
  unit: string;
};

export type NormalRangesGlucose = {
  min: number;
  max: number;
  unit: string;
};

export type NormalRangesBmi = {
  min: number;
  max: number;
  unit: string;
};

export interface NormalRanges {
  alt: NormalRangesAlt;
  ast: NormalRangesAst;
  cholesterol: NormalRangesCholesterol;
  glucose: NormalRangesGlucose;
  bmi: NormalRangesBmi;
}

export interface PredictionResult {
  riskLevel: PredictionResultRiskLevel;
  /** Risk probability 0-1 */
  probability: number;
  recommendations: Recommendations;
  normalRanges: NormalRanges;
  inputValues: PredictionInput;
  recordId?: number | null;
}

export type PredictionRecordRiskLevel =
  (typeof PredictionRecordRiskLevel)[keyof typeof PredictionRecordRiskLevel];

export const PredictionRecordRiskLevel = {
  low: "low",
  moderate: "moderate",
  high: "high",
} as const;

export interface PredictionRecord {
  id: number;
  userId?: number | null;
  riskLevel: PredictionRecordRiskLevel;
  probability: number;
  inputValues: PredictionInput;
  recommendations: Recommendations;
  normalRanges: NormalRanges;
  createdAt: string;
}

export interface HistoryResponse {
  predictions: PredictionRecord[];
  total: number;
}

export type DashboardStatsRiskDistribution = {
  low: number;
  moderate: number;
  high: number;
};

export type DashboardStatsRecentTrendItem = {
  date: string;
  count: number;
  avgProbability: number;
};

export interface DashboardStats {
  totalPredictions: number;
  riskDistribution: DashboardStatsRiskDistribution;
  averageProbability: number;
  recentTrend: DashboardStatsRecentTrendItem[];
}

export interface AdminPredictionsResponse {
  predictions: PredictionRecord[];
  total: number;
}

export interface RetrainResponse {
  message: string;
  accuracy: number;
  trainedAt: string;
}

export type AdminStatsRiskDistribution = {
  low: number;
  moderate: number;
  high: number;
};

export interface AdminStats {
  totalUsers: number;
  totalPredictions: number;
  riskDistribution: AdminStatsRiskDistribution;
  modelAccuracy: number;
  modelLastTrainedAt?: string | null;
}

export type ChatMessageContext = {
  riskLevel?: string | null;
  probability?: number | null;
} | null;

export interface ChatMessage {
  message: string;
  context?: ChatMessageContext;
}

export interface ChatResponse {
  reply: string;
  suggestions: string[];
}

export type GetHistoryParams = {
  limit?: number;
  offset?: number;
};

export type AdminGetUsers200 = {
  users: UserWithStats[];
};

export type AdminGetPredictionsParams = {
  limit?: number;
  offset?: number;
};
