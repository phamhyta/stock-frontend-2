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
    industry: 'Bảo hiểm',
    data: [
      {
        date: '02/02/2023',
        index: 2210,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '03/02/2023',
        index: 1730,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '04/02/2023',
        index: 1234,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '05/02/2023',
        index: 3440,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '06/02/2023',
        index: 620,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '07/02/2023',
        index: 120,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '08/02/2023',
        index: 1530,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '09/02/2023',
        index: 160,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '10/02/2023',
        index: 1680,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '11/02/2023',
        index: 1520,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '12/02/2023',
        index: 2470,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '13/02/2023',
        index: 1670,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '14/02/2023',
        index: 1800,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '15/02/2023',
        index: 2100,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
    ],
    color: '#F04438',
  },
  {
    industry: 'Tài chính',
    data: [
      {
        date: '02/02/2023',
        index: 400,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '03/02/2023',
        index: 1100,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '04/02/2023',
        index: 2200,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '05/02/2023',
        index: 1300,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '06/02/2023',
        index: 1340,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '07/02/2023',
        index: 200,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '08/02/2023',
        index: 2400,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '09/02/2023',
        index: 2600,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '10/02/2023',
        index: 3100,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '11/02/2023',
        index: 800,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '12/02/2023',
        index: 470,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '13/02/2023',
        index: 200,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '14/02/2023',
        index: 1000,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '15/02/2023',
        index: 2200,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
    ],
    color: '#1AAB22',
  },
  {
    industry: 'Chứng khoán',
    data: [
      {
        date: '02/02/2023',
        index: 100,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '03/02/2023',
        index: 2000,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '04/02/2023',
        index: 400,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '05/02/2023',
        index: 1000,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '06/02/2023',
        index: 1340,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '07/02/2023',
        index: 1100,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '08/02/2023',
        index: 2200,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '09/02/2023',
        index: 1300,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '10/02/2023',
        index: 1400,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '11/02/2023',
        index: 1100,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '12/02/2023',
        index: 1270,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '13/02/2023',
        index: 1300,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '14/02/2023',
        index: 2100,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
      {
        date: '15/02/2023',
        index: 200,
        volume: 1214241421,
        value: 133000000000,
        foreign_volume_buy: 1214241421,
        foreign_volume_sell: 1214241421,
      },
    ],
    color: '#9100FF',
  },
];

const LineCharts = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300}>
        <CartesianGrid strokeDasharray="0 0" />
        <XAxis dataKey="date" allowDuplicatedCategory={false} />
        <YAxis dataKey="index" />
        <Tooltip />
        <Legend />
        {series.map((s) => (
          <Line
            dataKey="index"
            data={s.data}
            name={s.industry}
            key={s.industry}
            stroke={s.color}
            strokeWidth="2"
            tooltipType="none"
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};
export default LineCharts;
