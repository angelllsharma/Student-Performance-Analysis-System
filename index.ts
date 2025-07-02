export interface Student {
  id: string;
  name: string;
  email: string;
  grade: string;
  enrollmentDate: string;
  avatar?: string;
  subjects: SubjectPerformance[];
  overallGPA: number;
  attendance: number;
}

export interface SubjectPerformance {
  subject: string;
  scores: Score[];
  currentGrade: string;
  gpa: number;
  trend: 'up' | 'down' | 'stable';
}

export interface Score {
  type: 'quiz' | 'exam' | 'assignment' | 'project';
  score: number;
  maxScore: number;
  date: string;
  title: string;
}

export interface AnalyticsData {
  totalStudents: number;
  averageGPA: number;
  attendanceRate: number;
  passRate: number;
  subjectPerformance: {
    subject: string;
    averageScore: number;
    passRate: number;
  }[];
  gradeDistribution: {
    grade: string;
    count: number;
  }[];
}