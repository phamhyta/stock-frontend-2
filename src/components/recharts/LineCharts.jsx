import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const series = [
  {
    name: 'Tài chính',
    data: [
      { category: 'A', value: 10 },
      { category: 'B', value: 45 },
      { category: 'D', value: 33 },
      { category: 'E', value: 15 },
      { category: 'F', value: 39 },
      { category: 'G', value: 50 },
      { category: 'K', value: 40 },
      { category: 'M', value: 30 },
      { category: 'N', value: 55 },
    ],
    color: '#F04438',
  },
  {
    name: 'Bất động sản',
    data: [
      { category: 'A', value: 16 },
      { category: 'D', value: 55 },
      { category: 'E', value: 42 },
      { category: 'F', value: 35 },
      { category: 'K', value: 25 },
      { category: 'M', value: 40 },
      { category: 'N', value: 40 },
    ],
    color: '#1AAB22',
  },
  {
    name: 'Thực phẩm',
    data: [
      { category: 'A', value: 40 },
      { category: 'B', value: 22 },
      { category: 'D', value: 25 },
      { category: 'E', value: 27 },
      { category: 'G', value: 20 },
      { category: 'K', value: 37 },
      { category: 'M', value: 10 },
      { category: 'N', value: 48 },
    ],
    color: '#A9BD83',
  },
];

const LineCharts = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300}>
        <CartesianGrid strokeDasharray="0 0" />
        <XAxis
          dataKey="category"
          type="category"
          allowDuplicatedCategory={false}
        />
        <YAxis dataKey="value" unit="%" />
        <Tooltip />
        <Legend />
        {series.map((s) => (
          <Line
            dataKey="value"
            data={s.data}
            name={s.name}
            key={s.name}
            stroke={s.color}
            tooltipType="none"
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};
export default LineCharts;
