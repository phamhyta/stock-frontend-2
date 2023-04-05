import React from 'react';
import ReactApexChart from 'react-apexcharts';

const series = [
  {
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
  },
];
const option = {
  chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      'South Korea',
      'Canada',
      'United Kingdom',
      'Netherlands',
      'Italy',
      'France',
      'Japan',
      'United States',
      'China',
      'Germany',
    ],
  },
  fill: {
    colors: ['#00BF71'],
  },
};

const ValuationCharts = () => {
  return (
    <div id="chart">
      <ReactApexChart
        options={option}
        series={series}
        type="bar"
        height={450}
        width={1200}
      />
    </div>
  );
};
export default ValuationCharts;
