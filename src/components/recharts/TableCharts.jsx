import React, { useState } from 'react';
import Pagination from 'rc-pagination';

const datatableUsers = [
  {
    sector: 'Dịch vụ lưu trú',
    change: '1,8181.12 (+0.33%) ',
    date: '02/02/2023',
    index: 2210,
    volume: 1214241421,
    value: 133000000000,
    foreign_volume_buy: 1214241421,
    foreign_volume_sell: 1214241421,
  },
  {
    sector: 'Dịch vụ lưu trú',
    change: '1,8181.12 (+0.33%) ',
    date: '02/02/2023',
    index: 2210,
    volume: 1214241421,
    value: 133000000000,
    foreign_volume_buy: 1214241421,
    foreign_volume_sell: 1214241421,
  },
  {
    sector: 'Dịch vụ lưu trú',
    change: '1,8181.12 (+0.33%) ',
    date: '02/02/2023',
    index: 2210,
    volume: 1214241421,
    value: 133000000000,
    foreign_volume_buy: 1214241421,
    foreign_volume_sell: 1214241421,
  },
  {
    sector: 'Dịch vụ lưu trú',
    change: '1,8181.12 (+0.33%) ',
    date: '02/02/2023',
    index: 2210,
    volume: 1214241421,
    value: 133000000000,
    foreign_volume_buy: 1214241421,
    foreign_volume_sell: 1214241421,
  },
  {
    sector: 'Dịch vụ lưu trú',
    change: '1,8181.12 (+0.33%) ',
    date: '02/02/2023',
    index: 2210,
    volume: 1214241421,
    value: 133000000000,
    foreign_volume_buy: 1214241421,
    foreign_volume_sell: 1214241421,
  },
  {
    sector: 'Dịch vụ lưu trú',
    change: '1,8181.12 (+0.33%) ',
    date: '02/02/2023',
    index: 2210,
    volume: 1214241421,
    value: 133000000000,
    foreign_volume_buy: 1214241421,
    foreign_volume_sell: 1214241421,
  },
  {
    sector: 'Dịch vụ lưu trú',
    change: '1,8181.12 (+0.33%) ',
    date: '02/02/2023',
    index: 2210,
    volume: 1214241421,
    value: 133000000000,
    foreign_volume_buy: 1214241421,
    foreign_volume_sell: 1214241421,
  },
  {
    sector: 'Dịch vụ lưu trú',
    change: '1,8181.12 (+0.33%) ',
    date: '02/02/2023',
    index: 2210,
    volume: 1214241421,
    value: 133000000000,
    foreign_volume_buy: 1214241421,
    foreign_volume_sell: 1214241421,
  },
  {
    sector: 'Dịch vụ lưu trú',
    change: '1,8181.12 (+0.33%) ',
    date: '02/02/2023',
    index: 2210,
    volume: 1214241421,
    value: 133000000000,
    foreign_volume_buy: 1214241421,
    foreign_volume_sell: 1214241421,
  },
  {
    sector: 'Dịch vụ lưu trú',
    change: '1,8181.12 (+0.33%) ',
    date: '02/02/2023',
    index: 2210,
    volume: 1214241421,
    value: 133000000000,
    foreign_volume_buy: 1214241421,
    foreign_volume_sell: 1214241421,
  },
  {
    sector: 'Dịch vụ lưu trú',
    change: '1,8181.12 (+0.33%) ',
    date: '02/02/2023',
    index: 2210,
    volume: 1214241421,
    value: 133000000000,
    foreign_volume_buy: 1214241421,
    foreign_volume_sell: 1214241421,
  },
  {
    sector: 'Dịch vụ lưu trú',
    change: '1,8181.12 (+0.33%) ',
    date: '02/02/2023',
    index: 2210,
    volume: 1214241421,
    value: 133000000000,
    foreign_volume_buy: 1214241421,
    foreign_volume_sell: 1214241421,
  },
];

const TableCharts = () => {
  const [perPage, setPerPage] = useState(10);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(datatableUsers.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };
  const getData = (current, pageSize) => {
    return datatableUsers.slice((current - 1) * pageSize, current * pageSize);
  };
  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize);
  };
  const PrevNextArrow = (current, type, originalElement) => {
    if (type === 'prev') {
      return (
        <button>
          <i className="fa fa-angle-double-left"></i>
        </button>
      );
    }
    if (type === 'next') {
      return (
        <button>
          <i className="fa fa-angle-double-right"></i>
        </button>
      );
    }
    return originalElement;
  };
  return (
    <div className="card">
      <div className="card-body p-0">
        <div className="table-responsive p-4 flex items-center justify-center">
          <table className="table mb-2 w-11/12">
            <thead className="table-sorting mx-4">
              <tr className="mb-4 text-center">
                <th>STT</th>
                <th>VS - Sector</th>
                <th>Thay đổi</th>
                <th>Ngày</th>
                <th>Khối lượng</th>
                <th>Giá trị</th>
                <th>KL NDTNN Mua</th>
                <th>KL NDTNN Bán</th>
              </tr>
            </thead>
            <tbody>
              {getData(current, size).map((data, index) => {
                return (
                  <tr key={data.index} className="mb-4 text-center border-b">
                    <td>{data.index}</td>
                    <td className=" text-blue-500">{data.sector}</td>
                    <td className="bg-font-color">{data.change}</td>
                    <td>{data.date}</td>
                    <td>{data.volume}</td>
                    <td>{data.value}</td>
                    <td>{data.foreign_volume_buy}</td>
                    <td>{data.foreign_volume_sell}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="table-filter-info">
          <Pagination
            className="pagination-data"
            showTotal={(total, range) =>
              `Showing ${range[0]}-${range[1]} of ${total}`
            }
            onChange={PaginationChange}
            total={datatableUsers.length}
            current={current}
            pageSize={size}
            showSizeChanger={false}
            itemRender={PrevNextArrow}
            onShowSizeChange={PerPageChange}
          />
        </div>
      </div>
    </div>
  );
};
export default TableCharts;
