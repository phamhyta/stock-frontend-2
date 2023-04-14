import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
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
import { ketQuaGiaoDichNdtnn } from '../../common/api';

const ValueChart = (props) => {
  const { mode } = props;
  const [datas, setDatas] = useState([]);
  let unit = '';
  useEffect(() => {
    const fetch = async () => {
      const res = await ketQuaGiaoDichNdtnn({ mode });
      if (res.code === 200) {
        setDatas(res.data);
      }
    };
    fetch();
  }, [mode]);
  for (let i = 0; i < datas.length; i++) {
    // datas[i].ValueChange = parseFloat(datas[i].ValueChange).toFixed(2);
    datas[i].fill = datas[i].ValueChange > 0 ? '#00BF71' : '#F04438';
    datas[i].StockCode = dayjs(datas[i].TradingDate).format('d MMM');
    unit = datas[i].Unit;
  }
  return (
    <div id="chart">
      <BarChart
        width={600}
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
        <XAxis dataKey="StockCode" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="ValueChange" unit={unit}>
          {datas.map((entry, index) => (
            <Cell fill={datas[index].fill} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};
export default ValueChart;
