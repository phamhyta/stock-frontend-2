import React from 'react';
import { Cell } from 'recharts';

const datas = [
  { ticker: 'Chứng Khoán', point: 1.8 },
  { ticker: 'Bán Buôn', point: 1.5 },
  { ticker: 'Bất Động Sản', point: -1.4 },
  { ticker: 'Chứng Khoán', point: 1.2 },
  { ticker: 'Bảo Hiểm', point: 1.1 },
  { ticker: 'Chứng Khoán', point: -0.93 },
  { ticker: 'Bất Động Sản', point: 0.88 },
  { ticker: 'Bán Buôn', point: 0.71 },
  { ticker: 'Chứng Khoán', point: 0.6 },
  { ticker: 'Bất Động Sản', point: 0.42 },
  { ticker: 'Chứng Khoán', point: 0.54 },
  { ticker: 'Bất Động Sản', point: 0.76 },
  { ticker: 'Bất Động Sản', point: 0.89 },
  { ticker: 'Chứng Khoán', point: -1.12 },
  { ticker: 'Bảo Hiểm', point: 1.34 },
  { ticker: 'Bất Động Sản', point: 1.56 },
  { ticker: 'Bán Buôn', point: 1.9 },
  { ticker: 'Chứng Khoán', point: -2.1 },
  { ticker: 'Cộng Nghệ', point: 2.4 },
  { ticker: 'Bảo Hiểm', point: -2.5 },
];

const BoxCharts = () => {
  for (let i = 0; i < datas.length; i++) {
    datas[i].fill = datas[i].point > 0 ? '#00BF71' : '#F04438';
  }
  return (
    <div
      id="chart"
      width="100%"
      height="100%"
      className="grid grid-cols-4 gap-4 p-10"
    >
      {datas.map((data) => (
        <div
          className={`p-4 rounded text-white text-lg text-center ${
            data.point > 0 ? 'bg-main-green' : 'bg-main-red'
          }`}
        >
          <div>{data.ticker}</div>
          <div>{data.point}%</div>
        </div>
      ))}
    </div>
  );
};
export default BoxCharts;
