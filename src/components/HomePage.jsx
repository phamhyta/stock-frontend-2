import React from 'react';
import TreeMaps from './recharts/TreeMaps';
import LineCharts from './recharts/LineCharts';
import MarketChart from './recharts/marketchart/MarketChart';
const Dashboard = () => {
  return (
    <div>
      {/* Market Chart */}
      <MarketChart />
      {/* Treemap */}
      <div className="p-10">
        <div className="font-semibold text-xl my-4">Bản đồ thị trường</div>
        <div className="flex mb-4 font-normal text-xl">
          <div>Tổng Quan</div>
          <div className="mx-4 active-item">Nhịp Đập Thị Trường</div>
          <div className="mx-4">Nhóm Ngành</div>
        </div>
        <div className="xl:flex">
          <div className="border rounded-md w-full xl:w-2/3 px-4 pt-4 pb-12">
            <div className="w-full h-full">
              <TreeMaps />
            </div>
          </div>
          <div className="border rounded-md w-full xl:w-1/3 p-4 mt-4 xl:mt-0 xl:ml-4 px-4 pt-4 pb-12">
            <div className="w-full h-full">
              <TreeMaps />
            </div>
          </div>
        </div>
      </div>
      {/*LineChart*/}
      <div className="px-10 pb-10">
        <div className="font-semibold text-xl my-4">Xu hướng ngành</div>
        <div className="flex mb-4 font-normal text-xl">
          <div>Tỷ suất lợi nhuận</div>
          <div className="mx-4 active-item">Định Giá</div>
        </div>
        <div className="flex mx-10 w-11/12 mb-10">
          <div className="border rounded-md border-green-400 w-full h-96 px-4 pt-4 pb-12">
            <div className="flex justify-between text-gray-500 font-bold">
              <div className="flex mb-4 font-normal text-xl">
                <div>Bảng</div>
                <div className="border border-gray-400 ml-4 my-1"></div>
                <div className="mx-4 active-item">Biểu đồ</div>
              </div>
              <div className="flex mb-4 font-normal text-xl">
                <div>7D</div>
                <div className="mx-4 active-item">1M</div>
                <div>YTD</div>
                <div className="mx-4">1Y</div>
                <div>3Y</div>
                <div className="mx-4">5Y</div>
              </div>
            </div>
            <div className="w-full h-5/6 my-10">
              <LineCharts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
