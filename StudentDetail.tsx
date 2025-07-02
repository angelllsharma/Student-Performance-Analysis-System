import React from 'react';
import { ArrowLeft, Mail, Calendar, TrendingUp, TrendingDown, Minus, BookOpen } from 'lucide-react';
import { Student } from '../types';

interface StudentDetailProps {
  student: Student;
  onBack: () => void;
}

const StudentDetail: React.FC<StudentDetailProps> = ({ student, onBack }) => {
  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-emerald-500" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return <Minus className="h-4 w-4 text-gray-400" />;
    }
  };

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    if (grade.startsWith('B')) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (grade.startsWith('C')) return 'text-amber-600 bg-amber-50 border-amber-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-amber-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900">Student Details</h2>
      </div>

      {/* Student Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-start space-x-6">
          <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold text-xl">
              {student.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900">{student.name}</h3>
            <p className="text-gray-600 mt-1">{student.grade}</p>
            <div className="flex items-center space-x-6 mt-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <span>{student.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>Enrolled: {new Date(student.enrollmentDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-gray-900">{student.overallGPA.toFixed(2)}</div>
            <div className="text-sm text-gray-600">Overall GPA</div>
            <div className="mt-2 text-sm">
              <span className="text-gray-600">Attendance: </span>
              <span className="font-semibold">{student.attendance}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subject Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {student.subjects.map((subject, index) => (
          <div key={subject.subject} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{subject.subject}</h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-1 rounded border text-xs font-medium ${getGradeColor(subject.currentGrade)}`}>
                      {subject.currentGrade}
                    </span>
                    {getTrendIcon(subject.trend)}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-gray-900">{subject.gpa.toFixed(1)}</div>
                <div className="text-xs text-gray-500">Subject GPA</div>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="font-medium text-gray-700 text-sm">Recent Scores</h5>
              {subject.scores.map((score, scoreIndex) => (
                <div key={scoreIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm text-gray-900">{score.title}</p>
                    <p className="text-xs text-gray-500 capitalize">{score.type} • {new Date(score.date).toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${getScoreColor((score.score / score.maxScore) * 100)}`}>
                      {score.score}/{score.maxScore}
                    </p>
                    <p className="text-xs text-gray-500">
                      {((score.score / score.maxScore) * 100).toFixed(0)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDetail;