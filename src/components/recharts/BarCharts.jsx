import React, { useEffect, useState } from 'react';
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
import { topCoPhieuAnhHuong } from '../../common/api';

const BarCharts = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await topCoPhieuAnhHuong();
      if (res.code === 200) {
        setDatas(res.data);
      }
    };
    fetch();
  }, []);
  for (let i = 0; i < datas.length; i++) {
    datas[i].fill = datas[i].PerChange > 0 ? '#00BF71' : '#F04438';
  }
  return (
    <div id="chart" width="100%" height="100%">
      <BarChart
        width={1150}
        height={300}
        data={datas}
        margin={{
          top: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="StockCode" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="PerChange">
          {datas.map((entry, index) => (
            <Cell fill={datas[index].fill} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};
export default BarCharts;
