import React, { useEffect, useState } from 'react';
import { danhSachThayDoi } from '../../common/api';

const BoxCharts = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await danhSachThayDoi();
      if (res.code === 200) {
        setDatas(res.data);
      }
    };
    fetch();
  }, []);
  for (let i = 0; i < datas.length; i++) {
    datas[i].fill = datas[i].ChangePct > 0 ? '#00BF71' : '#F04438';
    if (datas[i].Text === 'Dịch vụ tư vấn, hỗ trợ') {
      datas.splice(i, 1);
    }
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
            data.ChangePct > 0 ? 'bg-main-green' : 'bg-main-red'
          }`}
        >
          <div className="truncate hover:text-ellipsis">{data.Text}</div>
          <div>{data.ChangePct}%</div>
        </div>
      ))}
    </div>
  );
};
export default BoxCharts;
