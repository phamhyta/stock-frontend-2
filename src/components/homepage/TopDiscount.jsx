import { useEffect, useState } from 'react';
import icon from '../../assets/png/logo_company.png';
import { ReactComponent as Increase } from '../../assets/svg/homepage/increase.svg';
import { topGiamGia } from '../../common/api';
const TopDiscount = (props) => {
  const { mode } = props;
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await topGiamGia({ mode });
      if (res.code === 200) {
        setDatas(res.data);
      }
    };
    fetch();
  }, [mode]);
  console.log(datas);
  return (
    <div className="w-full">
      <div className="title">Top giảm giá</div>
      <div className="w-full flex label mt-2">
        <div className="w-1/4 mr-4">Mã cổ phiếu</div>
        <div className="w-5/12 mr-4"> Thay đổi giá (%)</div>
        <div className="w-1/2 mr-4">Khối lượng giao dịch</div>
      </div>
      {datas.map((data) => (
        <div className="flex mt-4">
          <div className="w-1/3 flex">
            <img className="" src={icon} alt="" />
            <div className="w-1/12 my-auto ml-2">{data.StockCode}</div>
          </div>
          <div className="w-1/4 flex m-auto change ml-3">
            <Increase className="my-auto mr-1" />
            {data.TotalPerChange}%
          </div>
          <div className="w-1/3 label flex justify-end items-end mr-4">
            {data.AvgVol}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopDiscount;
