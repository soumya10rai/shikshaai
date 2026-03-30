// Role types
export type UserRole = 'ADMIN' | 'BLOCK_OFFICER' | 'SCHOOL' | null;

// School attendance types
export interface AttendanceRecord {
  date: string; // ISO date string
  totalPresent: number;
  totalAbsent: number;
  boysPresentPercentage: number;
  girlsPresentPercentage: number;
}

// School data types
export interface School {
  id: string;
  name: string;
  blockId: string;
  districtId: string;
  class: string; // Class range: e.g., "I-V", "VI-VIII"
  type: 'Primary' | 'Secondary' | 'Combined';
  girls: number;
  boys: number;
  totalStudents: number;
  girls_sanitation: boolean;
  girls_classroom: boolean;
  anganwadi: boolean;
  mdm: boolean; // Mid-Day Meal
  teachers: number;
  femaleTeachers: number;
  infrastructure_score: number; // 0-100
  dropoutRate: number; // 0-100, percentage of students who dropped out
  safety_score: number; // 0-100
  scholarship_girls: number;
  dbt_coverage: number; // 0-100
  rural: boolean;
  riskScore: number; // 0-100
  interventionNeeded: string[];
  aiRecommendations: string[];
  lastInspection?: string; // ISO date string
  // School-added details
  attendanceRecords?: AttendanceRecord[];
  currentAttendancePercentage?: number; // 0-100
  principalName?: string;
  principalPhone?: string;
  schoolEmail?: string;
}

// Block data types
export interface Block {
  id: string;
  name: string;
  districtId: string;
  schools: School[];
  population: number;
  averageRiskScore: number;
  prioritySchools: number; // Schools with risk score > 70
}

// District data types
export interface District {
  id: string;
  name: string;
  blocks: Block[];
  state: string;
  population: number;
  metrics: DistrictMetrics;
}

export interface DistrictMetrics {
  overallRiskScore: number; // 0-100
  girlProtectionIndex: number; // 0-100
  structuralVulnerability: number; // 0-100
  teacherShortage: number; // 0-100
  infrastructureRisk: number; // 0-100
  scholarshipCoverage: number; // 0-100
  dbtAdoptionRate: number; // 0-100
  girlEnrollmentRate: number; // 0-100
  schoolsWithGirlsToilet: number;
  totalSchools: number;
  avgTeacherStudentRatio: number;
}

// Trend data for charts
export interface TrendPoint {
  month: string;
  value: number;
  target?: number;
}

// Block comparison data
export interface BlockComparisonData {
  blockId: string;
  blockName: string;
  riskScore: number;
  schoolsAtRisk: number;
  totalSchools: number;
  averageScore: number;
}

// AI Recommendation types
export interface Recommendation {
  id: string;
  schoolId: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  category: 'Infrastructure' | 'Gender-Safety' | 'Nutrition' | 'Teacher' | 'Enrollment';
  action: string;
  reasoning: string;
  estimatedImpact: string;
  assignedTo?: string;
  status?: 'Open' | 'In Progress' | 'Completed';
}

// Filter types
export interface RiskFilters {
  minRiskScore: number;
  maxRiskScore: number;
  schoolType?: 'Primary' | 'Secondary' | 'Combined' | 'All';
  priorityOnly: boolean;
  categories?: string[];
}

// Student types
export interface Student {
  id: string;
  enrollmentId: string; // Format: STU-001
  schoolId: string;
  name: string;
  className: string; // Class I-XII
  gender: 'Male' | 'Female' | 'Other';
  dateOfBirth: string; // ISO date
  fatherName: string;
  motherName: string;
  guardianPhone: string;
  caste: string;
  religion: string;
  enrollmentDate: string; // ISO date
  previousSchool?: string;
  scholarshipStatus: 'Active' | 'Inactive' | 'Pending';
  attendancePercentage: number; // 0-100
}

// Teacher types
export interface Teacher {
  id: string;
  employeeId: string; // Format: TEA-001
  schoolId: string;
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  qualifications: string;
  classesTeaching: string[]; // e.g., ['Class I', 'Class II']
  subjects: string[]; // e.g., ['Math', 'Science']
  dateOfJoining: string; // ISO date
  designations: string;
  phone: string;
  email?: string;
  trainingCompleted: string[]; // Training programs completed
}

// Infrastructure data types
export interface InfrastructureData {
  schoolId: string;
  buildingCondition: 'Good' | 'Fair' | 'Poor';
  classroomsTotal: number;
  classroomsInGoodCondition: number;
  toilets: number;
  girlsToiletAvailable: boolean;
  drinkingWaterAvailable: boolean;
  electricity: boolean;
  library: boolean;
  laboratoryAvailable: boolean;
  playground: boolean;
  boundaryWall: boolean;
  lastMaintenanceDate?: string; // ISO date
  infrastructureScore: number; // 0-100
  safetyScore: number; // 0-100
  notes: string;
}

// School Registration types
export interface SchoolRegistration {
  schoolId: string;
  registrationDate: string; // ISO date
  principalName: string;
  principalPhone: string;
  principalEmail: string;
  schoolEmail: string;
  schoolPhone: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  established: string; // ISO date
  registrationNumber: string;
  recognitionNumber: string;
  boardAffiliation: string;
  registrationStatus: 'Complete' | 'Incomplete' | 'Under Review';
  lastUpdated: string; // ISO date
}
