import React from 'react';

interface SubjectPerformanceData {
  subject: string;
  averageScore: number;
  passRate: number;
}

interface SubjectPerformanceChartProps {
  data: SubjectPerformanceData[];
}

const SubjectPerformanceChart: React.FC<SubjectPerformanceChartProps> = ({ data }) => {
  const maxScore = Math.max(...data.map(d => d.averageScore));

  const getPerformanceColor = (score: number) => {
    if (score >= 85) return 'bg-emerald-600';
    if (score >= 75) return 'bg-blue-600';
    if (score >= 65) return 'bg-amber-600';
    return 'bg-red-600';
  };

  const getPerformanceStatus = (score: number) => {
    if (score >= 85) return 'Excellent';
    if (score >= 75) return 'Good';
    if (score >= 65) return 'Fair';
    return 'Needs Improvement';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Subject Performance Overview</h3>
      <div className="space-y-6">
        {data.map((subject) => (
          <div key={subject.subject} className="space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-semibold text-gray-900">{subject.subject}</span>
                <div className="flex items-center space-x-3 mt-1">
                  <span className="text-sm text-gray-600">{subject.averageScore.toFixed(1)}% average</span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    subject.averageScore >= 85 ? 'bg-emerald-100 text-emerald-700' :
                    subject.averageScore >= 75 ? 'bg-blue-100 text-blue-700' :
                    subject.averageScore >= 65 ? 'bg-amber-100 text-amber-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {getPerformanceStatus(subject.averageScore)}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">{subject.passRate}%</div>
                <div className="text-xs text-gray-500">Pass Rate</div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-700 ease-out ${getPerformanceColor(subject.averageScore)}`}
                style={{ width: `${(subject.averageScore / maxScore) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectPerformanceChart;