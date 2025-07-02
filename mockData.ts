import { Student, AnalyticsData } from '../types';

export const mockStudents: Student[] = [
  {
    id: '1',
    name: 'Angel Sharma',
    email: 'angel.sharma@university.edu',
    grade: '2nd Year Engineering',
    enrollmentDate: '2023-09-01',
    overallGPA: 3.9,
    attendance: 96,
    subjects: [
      {
        subject: 'Engineering Mathematics',
        currentGrade: 'A',
        gpa: 4.0,
        trend: 'up',
        scores: [
          { type: 'quiz', score: 95, maxScore: 100, date: '2024-01-15', title: 'Calculus III Quiz' },
          { type: 'exam', score: 92, maxScore: 100, date: '2024-01-28', title: 'Linear Algebra Midterm' },
          { type: 'assignment', score: 98, maxScore: 100, date: '2024-02-10', title: 'Differential Equations Problem Set' },
        ]
      },
      {
        subject: 'Networking',
        currentGrade: 'A-',
        gpa: 3.7,
        trend: 'stable',
        scores: [
          { type: 'assignment', score: 88, maxScore: 100, date: '2024-01-20', title: 'Network Protocol Analysis' },
          { type: 'quiz', score: 90, maxScore: 100, date: '2024-02-05', title: 'OSI Model Quiz' },
          { type: 'project', score: 94, maxScore: 100, date: '2024-02-15', title: 'Network Security Implementation' },
        ]
      },
      {
        subject: 'Computer Science',
        currentGrade: 'A',
        gpa: 4.0,
        trend: 'up',
        scores: [
          { type: 'exam', score: 96, maxScore: 100, date: '2024-01-25', title: 'Data Structures Exam' },
          { type: 'assignment', score: 100, maxScore: 100, date: '2024-02-08', title: 'Algorithm Implementation' },
          { type: 'quiz', score: 92, maxScore: 100, date: '2024-02-18', title: 'Object-Oriented Programming Quiz' },
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Krishna Singh',
    email: 'krishna.singh@university.edu',
    grade: '2nd Year Engineering',
    enrollmentDate: '2023-09-01',
    overallGPA: 3.6,
    attendance: 89,
    subjects: [
      {
        subject: 'Engineering Mathematics',
        currentGrade: 'B+',
        gpa: 3.3,
        trend: 'stable',
        scores: [
          { type: 'quiz', score: 82, maxScore: 100, date: '2024-01-15', title: 'Calculus III Quiz' },
          { type: 'exam', score: 85, maxScore: 100, date: '2024-01-28', title: 'Linear Algebra Midterm' },
          { type: 'assignment', score: 80, maxScore: 100, date: '2024-02-10', title: 'Differential Equations Problem Set' },
        ]
      },
      {
        subject: 'Networking',
        currentGrade: 'A-',
        gpa: 3.7,
        trend: 'up',
        scores: [
          { type: 'assignment', score: 90, maxScore: 100, date: '2024-01-20', title: 'Network Protocol Analysis' },
          { type: 'quiz', score: 88, maxScore: 100, date: '2024-02-05', title: 'OSI Model Quiz' },
          { type: 'project', score: 92, maxScore: 100, date: '2024-02-15', title: 'Network Security Implementation' },
        ]
      },
      {
        subject: 'Computer Science',
        currentGrade: 'A',
        gpa: 4.0,
        trend: 'up',
        scores: [
          { type: 'exam', score: 94, maxScore: 100, date: '2024-01-25', title: 'Data Structures Exam' },
          { type: 'assignment', score: 96, maxScore: 100, date: '2024-02-08', title: 'Algorithm Implementation' },
          { type: 'quiz', score: 90, maxScore: 100, date: '2024-02-18', title: 'Object-Oriented Programming Quiz' },
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'Akshay Kumar',
    email: 'akshay.kumar@university.edu',
    grade: '2nd Year Engineering',
    enrollmentDate: '2023-09-01',
    overallGPA: 3.1,
    attendance: 82,
    subjects: [
      {
        subject: 'Engineering Mathematics',
        currentGrade: 'B-',
        gpa: 2.7,
        trend: 'down',
        scores: [
          { type: 'quiz', score: 72, maxScore: 100, date: '2024-01-15', title: 'Calculus III Quiz' },
          { type: 'exam', score: 75, maxScore: 100, date: '2024-01-28', title: 'Linear Algebra Midterm' },
          { type: 'assignment', score: 68, maxScore: 100, date: '2024-02-10', title: 'Differential Equations Problem Set' },
        ]
      },
      {
        subject: 'Networking',
        currentGrade: 'B',
        gpa: 3.0,
        trend: 'stable',
        scores: [
          { type: 'assignment', score: 78, maxScore: 100, date: '2024-01-20', title: 'Network Protocol Analysis' },
          { type: 'quiz', score: 80, maxScore: 100, date: '2024-02-05', title: 'OSI Model Quiz' },
          { type: 'project', score: 82, maxScore: 100, date: '2024-02-15', title: 'Network Security Implementation' },
        ]
      },
      {
        subject: 'Computer Science',
        currentGrade: 'B+',
        gpa: 3.3,
        trend: 'up',
        scores: [
          { type: 'exam', score: 85, maxScore: 100, date: '2024-01-25', title: 'Data Structures Exam' },
          { type: 'assignment', score: 88, maxScore: 100, date: '2024-02-08', title: 'Algorithm Implementation' },
          { type: 'quiz', score: 83, maxScore: 100, date: '2024-02-18', title: 'Object-Oriented Programming Quiz' },
        ]
      }
    ]
  },
  {
    id: '4',
    name: 'Akash Soni',
    email: 'akash.soni@university.edu',
    grade: '2nd Year Engineering',
    enrollmentDate: '2023-09-01',
    overallGPA: 2.3,
    attendance: 68,
    subjects: [
      {
        subject: 'Engineering Mathematics',
        currentGrade: 'D+',
        gpa: 1.3,
        trend: 'down',
        scores: [
          { type: 'quiz', score: 45, maxScore: 100, date: '2024-01-15', title: 'Calculus III Quiz' },
          { type: 'exam', score: 52, maxScore: 100, date: '2024-01-28', title: 'Linear Algebra Midterm' },
          { type: 'assignment', score: 38, maxScore: 100, date: '2024-02-10', title: 'Differential Equations Problem Set' },
        ]
      },
      {
        subject: 'Networking',
        currentGrade: 'C-',
        gpa: 1.7,
        trend: 'stable',
        scores: [
          { type: 'assignment', score: 62, maxScore: 100, date: '2024-01-20', title: 'Network Protocol Analysis' },
          { type: 'quiz', score: 58, maxScore: 100, date: '2024-02-05', title: 'OSI Model Quiz' },
          { type: 'project', score: 65, maxScore: 100, date: '2024-02-15', title: 'Network Security Implementation' },
        ]
      },
      {
        subject: 'Computer Science',
        currentGrade: 'C',
        gpa: 2.0,
        trend: 'up',
        scores: [
          { type: 'exam', score: 68, maxScore: 100, date: '2024-01-25', title: 'Data Structures Exam' },
          { type: 'assignment', score: 72, maxScore: 100, date: '2024-02-08', title: 'Algorithm Implementation' },
          { type: 'quiz', score: 70, maxScore: 100, date: '2024-02-18', title: 'Object-Oriented Programming Quiz' },
        ]
      }
    ]
  }
];

export const mockAnalytics: AnalyticsData = {
  totalStudents: 4,
  averageGPA: 3.23,
  attendanceRate: 84,
  passRate: 75,
  subjectPerformance: [
    { subject: 'Engineering Mathematics', averageScore: 73.5, passRate: 75 },
    { subject: 'Networking', averageScore: 79.8, passRate: 100 },
    { subject: 'Computer Science', averageScore: 82.1, passRate: 100 }
  ],
  gradeDistribution: [
    { grade: 'A', count: 6 },
    { grade: 'B', count: 4 },
    { grade: 'C', count: 2 },
    { grade: 'D', count: 1 }
  ]
};