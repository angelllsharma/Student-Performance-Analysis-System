import React from 'react';

interface GradeDistributionData {
  grade: string;
  count: number;
}

interface GradeDistributionChartProps {
  data: GradeDistributionData[];
}

const GradeDistributionChart: React.FC<GradeDistributionChartProps> = ({ data }) => {
  const maxCount = Math.max(...data.map(d => d.count));
  const total = data.reduce((sum, d) => sum + d.count, 0);

  const gradeColors = {
    A: 'bg-emerald-600',
    B: 'bg-blue-600',
    C: 'bg-amber-600',
    D: 'bg-red-600'
  };

  const gradeLabels = {
    A: 'Excellent (90-100%)',
    B: 'Good (80-89%)',
    C: 'Satisfactory (70-79%)',
    D: 'Needs Improvement (<70%)'
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Grade Distribution Analysis</h3>
      <div className="space-y-5">
        {data.map((grade) => (
          <div key={grade.grade} className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-semibold text-gray-900">Grade {grade.grade}</span>
                <span className="text-sm text-gray-600 ml-2">
                  {gradeLabels[grade.grade as keyof typeof gradeLabels]}
                </span>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-gray-900">{grade.count}</span>
                <span className="text-sm text-gray-600 ml-2">
                  ({((grade.count / total) * 100).toFixed(0)}%)
                </span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all duration-700 ease-out ${
                  gradeColors[grade.grade as keyof typeof gradeColors]
                }`}
                style={{ width: `${(grade.count / maxCount) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradeDistributionChart;