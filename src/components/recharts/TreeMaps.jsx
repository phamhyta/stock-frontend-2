import React from 'react';
import { Treemap, ResponsiveContainer } from 'recharts';
import ReactApexChart from 'react-apexcharts';

const series = [
  {
    data: [
      {
        x: 'INTC',
        y: 1.2,
      },
      {
        x: 'GS',
        y: 0.4,
      },
      {
        x: 'CVX',
        y: 1.4,
      },
      {
        x: 'MMM',
        y: 2.31,
      },
      {
        x: 'NKE',
        y: 3.98,
      },
      {
        x: 'IYT',
        y: 1,
      },
    ],
  },
  {
    data: [
      {
        x: 'INTC',
        y: 1.2,
      },
      {
        x: 'GS',
        y: 0.4,
      },
      {
        x: 'CVX',
        y: 1,
      },
      {
        x: 'NKE',
        y: 3.98,
      },
      {
        x: 'IYT',
        y: 0,
      },
    ],
  },
  {
    data: [
      {
        x: 'INTC',
        y: 1.2,
      },
      {
        x: 'CVX',
        y: 1.4,
      },
      {
        x: 'MMM',
        y: 2.31,
      },
      {
        x: 'NKE',
        y: 0.8,
      },
      {
        x: 'IYT',
        y: 1.67,
      },
    ],
  },
];

const options = {
  legend: {
    show: false,
  },
  title: {
    text: 'Thị trường',
  },
  chart: {
    height: 350,
    type: 'treemap',
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: '12px',
    },
    formatter: function (text, op) {
      return [text, op.value];
    },
    offsetY: -4,
  },
  plotOptions: {
    treemap: {
      enableShades: true,
      shadeIntensity: 0.5,
      reverseNegativeShade: true,
      colorScale: {
        ranges: [
          {
            from: 0,
            to: 0.9999,
            color: '#F04438',
          },
          {
            from: 0.9991,
            to: 1.00001,
            color: '#E2DA2F',
          },
          {
            from: 1.00001,
            to: 3,
            color: '#00BF71',
          },
        ],
      },
    },
  },
};

const TreeMaps = () => {
  return (
    // <ResponsiveContainer width="100%" height="100%">
    //   <Treemap
    //     width={400}
    //     height={200}
    //     data={data}
    //     dataKey="size"
    //     aspectRatio={4 / 3}
    //     stroke="#fff"
    //     fill={data.change < 0 ? '#0065FF' : '#00BF71'}
    //   />
    // </ResponsiveContainer>
    <div id="chart" width="100%" height="100%">
      <ReactApexChart
        options={options}
        series={series}
        type="treemap"
        height={350}
      />
    </div>
  );
};
export default TreeMaps;
