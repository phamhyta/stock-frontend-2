import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  Cell,
} from 'recharts';

const datas = [
  { ticker: 'GAS', point: 1.8 },
  { ticker: 'VNM', point: 1.5 },
  { ticker: 'VGC', point: 1.4 },
  { ticker: 'VHM', point: 1.2 },
  { ticker: 'VOS', point: 1.1 },
  { ticker: 'AAA', point: 0.93 },
  { ticker: 'ABB', point: 0.88 },
  { ticker: 'MBB', point: 0.71 },
  { ticker: 'TCB', point: 0.6 },
  { ticker: 'TTF', point: 0.42 },
  { ticker: 'HAG', point: -0.54 },
  { ticker: 'HHV', point: -0.76 },
  { ticker: 'GEX', point: -0.89 },
  { ticker: 'PLX', point: -1.12 },
  { ticker: 'IDC', point: -1.34 },
  { ticker: 'IDV', point: -1.56 },
  { ticker: 'DBC', point: -1.9 },
  { ticker: 'VCG', point: -2.1 },
  { ticker: 'LCG', point: -2.4 },
  { ticker: 'HSG', point: -2.5 },
];

const BarCharts = () => {
  for (let i = 0; i < datas.length; i++) {
    datas[i].fill = datas[i].point > 0 ? '#00BF71' : '#F04438';
  }
  return (
    <div id="chart" width="100%" height="100%">
      <BarChart
        width={1000}
        height={300}
        data={datas}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ticker" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="point">
          {datas.map((entry, index) => (
            <Cell fill={datas[index].fill} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};
export default BarCharts;
