import React, { useEffect, useState } from 'react';
import TreeMaps from './recharts/TreeMaps/TreeMaps';
import LineCharts from './recharts/LineCharts';
import BarCharts from './recharts/BarCharts';
import BoxCharts from './recharts/BoxCharts';
import TableCharts from './recharts/TableCharts';
import ValueChart from './recharts/ValueChart';
import { ReactComponent as Chart } from '../assets/svg/chart.svg';
import { ReactComponent as Table } from '../assets/svg/table.svg';
import './HomePage.css';
import VolChart from './recharts/VolChart';
import ValuationCharts from './recharts/ValuationCharts';
import MarketMovements from './homepage/MarketMovements';
const Dashboard = ({ loading }) => {
  const [chart, setChart] = useState(1);
  const [modeNdttn, setModeNtddn] = useState('1day');
  const [modeMarket, setModeMarket] = useState('1day');
  const [lineChart, setLineChart] = useState(1);
  const [table, setTable] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setModeNtddn('1day');
    };
    fetch();
  }, [loading, chart]);

  return (
    <div className="justify-center items-center flex">
      <div className="home-page-content">
        <div className="p-10">
          <div className="flex justify-between">
            <div className="font-semibold text-xl">Diễn biến thị trường</div>
            <div className="w-1/12 flex justify-between">
              <div
                className={`${
                  modeMarket === '1day' ? 'option-active' : 'option'
                }`}
                onClick={() => setModeMarket('1day')}
              >
                1D
              </div>
              <div
                className={`${
                  modeMarket === '1week' ? 'option-active' : 'option'
                }`}
                onClick={() => setModeMarket('1week')}
              >
                1W
              </div>
              <div
                className={`${
                  modeMarket === '1month' ? 'option-active' : 'option'
                }`}
                onClick={() => setModeMarket('1month')}
              >
                1M
              </div>
            </div>
          </div>
          <div className="w-full">
            <MarketMovements mode={modeMarket} />
          </div>
        </div>
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
          <div className="xl:flex justify-center items-center home-page">
            {chart === 1 && (
              <div className="w-full justify-center items-center">
                <div className="w-full h-full charts-box">
                  <div className="title">
                    Top cổ phiếu ảnh hưởng tới chỉ số index
                  </div>
                  <BarCharts />
                </div>
                <div className="w-full h-full charts-box mt-8 mb-8">
                  <div className="flex justify-between">
                    <div className="title">Giao dịch của NDTNN</div>
                    <div className="flex justify-between w-1/4 m-4">
                      <div
                        className={`index-time ${
                          modeNdttn === '1day' ? 'index-time-active' : ''
                        }`}
                        onClick={() => setModeNtddn('1day')}
                      >
                        1 ngày
                      </div>
                      <div
                        className={`index-time ${
                          modeNdttn === '1week' ? 'index-time-active' : ''
                        }`}
                        onClick={() => setModeNtddn('1week')}
                      >
                        1 tuần
                      </div>
                      <div
                        className={`index-time ${
                          modeNdttn === '1month' ? 'index-time-active' : ''
                        }`}
                        onClick={() => setModeNtddn('1month')}
                      >
                        1 tháng
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="w-1/2">
                      <div className="text-center value-chart-label">
                        Giá trị giao dịch
                      </div>
                      <div className="w-full">
                        <ValueChart mode={modeNdttn} />
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className="text-center value-chart-label">
                        Khối lượng giao dịch
                      </div>
                      <div>
                        <VolChart mode={modeNdttn} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full charts-box mt-8 mb-8">
                  <div className="flex justify-between">
                    <div className="title">Giao dịch của Tự doanh</div>
                    <div className="flex justify-between w-1/4 m-4">
                      <div
                        className={`index-time ${
                          modeNdttn === '1day' ? 'index-time-active' : ''
                        }`}
                        onClick={() => setModeNtddn('1day')}
                      >
                        1 ngày
                      </div>
                      <div
                        className={`index-time ${
                          modeNdttn === '1week' ? 'index-time-active' : ''
                        }`}
                        onClick={() => setModeNtddn('1week')}
                      >
                        1 tuần
                      </div>
                      <div
                        className={`index-time ${
                          modeNdttn === '1month' ? 'index-time-active' : ''
                        }`}
                        onClick={() => setModeNtddn('1month')}
                      >
                        1 tháng
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="w-1/2">
                      <div className="text-center value-chart-label">
                        Giá trị giao dịch
                      </div>
                      <div className="w-full">
                        <ValueChart mode={modeNdttn} />
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className="text-center value-chart-label">
                        Khối lượng giao dịch
                      </div>
                      <div>
                        <VolChart mode={modeNdttn} />
                      </div>
                    </div>
                  </div>
                </div>
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
              className={`cursor-pointer ${
                lineChart === 1 ? 'active-item' : ''
              }`}
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
            {lineChart === 2 && <ValuationCharts />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
