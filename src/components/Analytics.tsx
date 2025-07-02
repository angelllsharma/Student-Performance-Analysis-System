import React from 'react';
import { TrendingUp, Users, Award, AlertTriangle, BookOpen, Clock } from 'lucide-react';
import StatCard from './StatCard';
import SubjectPerformanceChart from './SubjectPerformanceChart';
import { mockAnalytics, mockStudents } from '../data/mockData';

const Analytics: React.FC = () => {
  const topPerformers = mockStudents
    .sort((a, b) => b.overallGPA - a.overallGPA)
    .slice(0, 2);

  const strugglingStudents = mockStudents
    .filter(s => s.overallGPA < 2.5)
    .sort((a, b) => a.overallGPA - b.overallGPA);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">Academic Performance Analytics</h2>
          <p className="text-slate-600 mt-1">Engineering Program Performance Overview & Insights</p>
        </div>
        <div className="text-sm text-slate-500 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
          Academic Year 2023-2024 • Engineering Department
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="High Achievers (3.5+ GPA)"
          value={mockStudents.filter(s => s.overallGPA >= 3.5).length}
          change={`${Math.round((mockStudents.filter(s => s.overallGPA >= 3.5).length / mockStudents.length) * 100)}% of cohort`}
          changeType="positive"
          icon={Award}
          color="emerald"
        />
        <StatCard
          title="Students at Risk"
          value={mockStudents.filter(s => s.overallGPA < 2.5).length}
          change="Require immediate academic intervention"
          changeType="negative"
          icon={AlertTriangle}
          color="red"
        />
        <StatCard
          title="Avg. Weekly Study Time"
          value="3.8h"
          change="Below recommended 8-10h for engineering"
          changeType="negative"
          icon={Clock}
          color="amber"
        />
        <StatCard
          title="Course Completion Rate"
          value="75%"
          change="25% below engineering standards"
          changeType="negative"
          icon={Users}
          color="slate"
        />
      </div>

      {/* Performance Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SubjectPerformanceChart data={mockAnalytics.subjectPerformance} />
        
        {/* Critical Insights */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-slate-600" />
            Performance Analysis
          </h3>
          <div className="space-y-5">
            <div className="p-5 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-800">Critical Concern: Engineering Mathematics</h4>
                  <p className="text-sm text-red-700 mt-1">
                    Engineering Mathematics showing concerning performance with 25% failure rate. Average score of 73.5% indicates fundamental gaps in calculus and linear algebra concepts.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-5 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
              <div className="flex items-start">
                <TrendingUp className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-800">Attendance-Performance Correlation</h4>
                  <p className="text-sm text-amber-700 mt-1">
                    Strong correlation between attendance and academic performance. Students below 75% attendance show significant grade decline, particularly in mathematical subjects.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-5 bg-emerald-50 border-l-4 border-emerald-400 rounded-r-lg">
              <div className="flex items-start">
                <Award className="h-5 w-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-emerald-800">Strength Areas</h4>
                  <p className="text-sm text-emerald-700 mt-1">
                    Computer Science and Networking demonstrate strong performance with 100% pass rates. Students show excellent engagement in practical programming and network implementation projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student Performance Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Academic Leaders */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Academic Excellence</h3>
          <div className="space-y-4">
            {topPerformers.map((student, index) => (
              <div key={student.id} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg border border-emerald-100">
                <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-full border-2 border-emerald-200">
                  <span className="text-emerald-700 font-bold text-sm">#{index + 1}</span>
                </div>
                <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-white font-semibold text-sm">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{student.name}</p>
                  <p className="text-sm text-slate-600">{student.grade} • {student.attendance}% attendance</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-emerald-600">{student.overallGPA.toFixed(2)}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">GPA</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Intervention Required */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Academic Intervention Required</h3>
          <div className="space-y-4">
            {strugglingStudents.map((student) => (
              <div key={student.id} className="p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-100">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-full border-2 border-red-200">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-slate-900">{student.name}</p>
                      <p className="text-xl font-bold text-red-600">{student.overallGPA.toFixed(2)}</p>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">{student.grade} • {student.attendance}% attendance</p>
                    
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="font-medium text-red-700">Critical Issues:</span>
                        <div className="mt-1 space-y-1">
                          {student.attendance < 75 && (
                            <div className="flex items-center text-xs text-red-600">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                              Chronic absenteeism ({student.attendance}% attendance) - Below minimum 75% requirement
                            </div>
                          )}
                          {student.subjects.filter(s => s.gpa < 2.0).map(subject => (
                            <div key={subject.subject} className="flex items-center text-xs text-red-600">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                              Failing {subject.subject} ({subject.currentGrade}) - Requires immediate tutoring support
                            </div>
                          ))}
                          {student.subjects.filter(s => s.gpa < 2.5 && s.gpa >= 2.0).map(subject => (
                            <div key={subject.subject} className="flex items-center text-xs text-amber-600">
                              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div>
                              At-risk in {subject.subject} ({subject.currentGrade}) - Additional support recommended
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;