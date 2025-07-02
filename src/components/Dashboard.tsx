import React from 'react';
import { Users, GraduationCap, TrendingUp, Calendar } from 'lucide-react';
import StatCard from './StatCard';
import SubjectPerformanceChart from './SubjectPerformanceChart';
import GradeDistributionChart from './GradeDistributionChart';
import { mockAnalytics, mockStudents } from '../data/mockData';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Students"
          value={mockAnalytics.totalStudents}
          change="+12% from last month"
          changeType="positive"
          icon={Users}
          color="blue"
        />
        <StatCard
          title="Average GPA"
          value={mockAnalytics.averageGPA.toFixed(2)}
          change="+0.2 from last semester"
          changeType="positive"
          icon={GraduationCap}
          color="green"
        />
        <StatCard
          title="Attendance Rate"
          value={`${mockAnalytics.attendanceRate}%`}
          change="-2% from last month"
          changeType="negative"
          icon={Calendar}
          color="yellow"
        />
        <StatCard
          title="Pass Rate"
          value={`${mockAnalytics.passRate}%`}
          change="+5% from last semester"
          changeType="positive"
          icon={TrendingUp}
          color="green"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SubjectPerformanceChart data={mockAnalytics.subjectPerformance} />
        <GradeDistributionChart data={mockAnalytics.gradeDistribution} />
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {mockStudents.slice(0, 3).map((student) => (
            <div key={student.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-sm">
                  {student.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{student.name}</p>
                <p className="text-sm text-gray-500">
                  Latest score: {student.subjects[0].scores[student.subjects[0].scores.length - 1].score}% 
                  in {student.subjects[0].subject}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">GPA: {student.overallGPA}</p>
                <p className="text-xs text-gray-500">{student.attendance}% attendance</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;