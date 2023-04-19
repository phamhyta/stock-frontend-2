import { useEffect, useState } from 'react';
import icon from '../../assets/png/logo_company.png';
import { ReactComponent as Increase } from '../../assets/svg/homepage/reduce.svg';
import { topGiamGia, topMuaNuocNgoai } from '../../common/api';
const TopBuy = (props) => {
  const { mode } = props;
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await topMuaNuocNgoai({ mode });
      if (res.code === 200) {
        setDatas(res.data);
      }
    };
    fetch();
  }, [mode]);
  let max = 0;
  for (let i = 0; i < datas.length; i++) {
    if (max < datas[i].AvgVol) max = datas[i].AvgVol;
  }

  for (let i = 0; i < datas.length; i++) {
    datas[i].percent = '' + (datas[i].AvgVol * 100) / max + '%';
  }

  return (
    <div className="w-80">
      <div className="title">Top khối ngoại mua ròng</div>
      <div className="w-full flex label mt-2">
        <div className="w-1/4 mr-4">Mã cổ phiếu</div>
        <div className="w-5/12 mr-4"></div>
        <div className="w-1/2 mr-4">Giá trị giao dịch</div>
      </div>
      {datas.map((data) => (
        <div className="flex mt-4 w-full">
          <div className="w-1/3 flex">
            <img className="" src={icon} alt="" />
            <div className="w-1/12 my-auto ml-2">{data.StockCode}</div>
          </div>
          <div className="w-2/3 flex m-auto ml-3">
            <div
              className=" bg-green-500 h-6"
              style={{ width: data.percent }}
            ></div>
          </div>
          <div className="w-1/4 items-end flex justify-end font-semibold text-sm mr-4 my-auto text-green-500">
            {(data.AvgVol / 100000).toFixed(2)}T
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopBuy;
