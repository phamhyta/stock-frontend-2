import React, { useState } from 'react';
import TreeMaps from './recharts/TreeMaps/TreeMaps';
import LineCharts from './recharts/LineCharts';
import BarCharts from './recharts/BarCharts';
import BoxCharts from './recharts/BoxCharts';
import TableCharts from './recharts/TableCharts';
import { ReactComponent as Chart } from '../assets/svg/chart.svg';
import { ReactComponent as Table } from '../assets/svg/table.svg';
const Dashboard = () => {
  const [chart, setChart] = useState(1);
  const [lineChart, setLineChart] = useState(1);
  const [table, setTable] = useState(false);
  return (
    <div>
      <div className="p-10">
        <div className="font-semibold text-xl my-4">Bản đồ thị trường</div>
        <div className="flex mb-4 font-normal text-xl">
          <div
            className={`cursor-pointer ${chart === 1 ? 'active-item' : ''}`}
            onClick={() => setChart(1)}
          >
            Tổng Quan
          </div>
          <div
            className={`cursor-pointer mx-4 ${
              chart === 2 ? 'active-item' : ''
            }`}
            onClick={() => setChart(2)}
          >
            Nhịp Đập Thị Trường
          </div>
          <div
            className={`cursor-pointer mr-4 ${
              chart === 3 ? 'active-item' : ''
            }`}
            onClick={() => setChart(3)}
          >
            Nhóm Ngành
          </div>
        </div>
        <div className="xl:flex justify-center items-center">
          {chart === 1 && (
            <div className="w-5/6 h-full charts-box">
              <div className="title">
                Top cổ phiếu ảnh hưởng tới chỉ số index
              </div>
              <BarCharts />
            </div>
          )}
          {chart === 2 && (
            <div className="w-full h-full charts-box">
              <TreeMaps />
            </div>
          )}
          {chart === 3 && (
            <div className="w-4/5 h-full charts-box">
              <BoxCharts />
            </div>
          )}
        </div>
      </div>
      {/*LineChart*/}
      <div className="px-10 pb-10">
        <div className="font-semibold text-xl my-4">Xu hướng ngành</div>
        <div className="flex mb-4 font-normal text-xl">
          <div
            className={`cursor-pointer ${lineChart === 1 ? 'active-item' : ''}`}
            onClick={() => setLineChart(1)}
          >
            Tỷ suất lợi nhuận
          </div>
          <div
            className={`mx-4 cursor-pointer ${
              lineChart === 2 ? 'active-item' : ''
            }`}
            onClick={() => setLineChart(2)}
          >
            Định Giá
          </div>
        </div>
        <div className="flex mx-10 w-11/12 mb-10">
          {lineChart === 1 && (
            <div className="border rounded-md border-green-400 w-full px-4 pt-4 pb-12">
              <div className="flex justify-between text-gray-500 font-bold">
                <div className="flex mb-4 font-normal text-xl">
                  <div
                    className={`${table ? 'active-item' : ''}`}
                    onClick={() => setTable(true)}
                  >
                    Bảng
                  </div>
                  <div className="border border-gray-400 ml-4 my-1"></div>
                  <div
                    className={`mx-4 ${!table ? 'active-item' : ''}`}
                    onClick={() => setTable(false)}
                  >
                    Biểu đồ
                  </div>
                </div>
                <div className="flex mb-4 font-normal text-xl">
                  <div>7D</div>
                  <div className="mx-4 active-item">1M</div>
                  <div>YTD</div>
                  <div className="mx-4">1Y</div>
                  <div>3Y</div>
                  <div className="mx-4">5Y</div>
                  <div className="flex mx-8">
                    <div>
                      <Table />
                    </div>
                    <div className="h-1/2 mx-3 border"></div>
                    <div>
                      <Chart />
                    </div>
                  </div>
                </div>
              </div>
              {!table && (
                <div className="w-full h-96 my-10 line-hidden">
                  <LineCharts />
                </div>
              )}
              {table && (
                <div className="w-full h-5/6 mb-10 line-hidden table">
                  <TableCharts />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
