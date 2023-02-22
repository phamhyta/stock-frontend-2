import React from 'react';
import { ReactComponent as Graph } from '../../assets/svg/WelcomeGoStock/graph.svg';
import { ReactComponent as VinHome } from '../../assets/svg/WelcomeGoStock/Icon-Vinhomes.svg';
import { ReactComponent as Apax } from '../../assets/svg/WelcomeGoStock/IconApax.svg';
import { ReactComponent as TechComBank } from '../../assets/svg/WelcomeGoStock/TechComBank.svg';
import { ReactComponent as RoundCircle } from '../../assets/svg/WelcomeGoStock/RoundCircle.svg';
import { ReactComponent as IconDollar } from '../../assets/svg/WelcomeGoStock/IconDollar.svg';
import { ReactComponent as Vector_0 } from '../../assets/svg/WelcomeGoStock/Vector.svg';
import { ReactComponent as Vector_1 } from '../../assets/svg/WelcomeGoStock/Vector_1.svg';
import { ReactComponent as Vector_2 } from '../../assets/svg/WelcomeGoStock/Vector_2.svg';
import { ReactComponent as Vector_3 } from '../../assets/svg/WelcomeGoStock/Vector_3.svg';
import { ReactComponent as Vector_4 } from '../../assets/svg/WelcomeGoStock/Vector_4.svg';
import { ReactComponent as Vector_5 } from '../../assets/svg/WelcomeGoStock/Vector_5.svg';
import { ReactComponent as Vector_6 } from '../../assets/svg/WelcomeGoStock/Vector_6.svg';
const Dashboard = () => {
  const items = [
    {
      Icon: Vector_0,
      name: 'Báo cáo',
    },
    {
      Icon: Vector_1,
      name: 'Portfolio',
    },
    {
      Icon: Vector_2,
      name: 'Khám phá',
    },
    {
      Icon: Vector_3,
      name: 'Thanh toán',
    },
    {
      Icon: Vector_4,
      name: 'Lịch sử',
    },
    {
      Icon: Vector_5,
      name: 'Tin nhắn',
    },
    {
      Icon: Vector_6,
      name: 'Cài đặt',
    },
  ];

  const cophieu = [
    {
      name: 'FPT Corp',
      unit: '77,200',
      price: '+0.39%',
    },
    {
      name: ' Vingroup JSC',
      unit: '71,200',
      price: '+1.86%',
    },
    {
      name: ' Vinhomes',
      unit: '55,400',
      price: ' -0.18%',
    },
    {
      name: ' HGM',
      unit: '40,000',
      price: ' +0.00%',
    },
    {
      name: 'Techcombank',
      unit: '28,000',
      price: ' +0.35%',
    },
    {
      name: 'GTNFoods JSC',
      unit: '19,100',
      price: ' +0.00%',
    },
    {
      name: ' APAX',
      unit: '6,120.0',
      price: ' -6.99%',
    },
  ];
  return (
    <div className=" mx-auto  w-[85%]  h-[900px] bg-cover overflow-hidden mt-10  relative">
      <div className="absolute w-[78%] border h-[800px] ml-12 rounded-2xl flex justify-center items-center mt-2 font-roboto">
        <div className="w-[91%]  h-[91%]  rounded-2xl grid grid-cols-3 font-roboto overflow-hidden">
          <div className="col-span-1   bg-main-picture p-6  ">
            <div className="flex mb-10   ">
              <IconDollar className="mr-2 w-[50px] h-[35px]"></IconDollar>
              <h1 className="text-2xl">Gostock</h1>
            </div>
            <button className="w-[80%] h-[53px] mb-16  bg-main-button-picture text-center rounded-lg  text-white">
              Đầu tư ngay
            </button>
            <ul>
              {items.map(({ Icon, name }, index) => (
                <li key={index} className="flex mb-8   ml-3">
                  <Icon className="w-[15px] mr-4 h-[15px]" />
                  <h2 className="bg-side-color text-sm">{name}</h2>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2  p-6 mr-[80px]">
            <h2 className="font-lato  font-bold text-xl  font-side-color">
              Chào mừng bạn tới với{' '}
              <h2 className="inline bg-font-color font-lato">
                Gostock Platform
              </h2>
            </h2>
            <p className="font-inters text-base mt-5 bg-side-color ">
              Chào buổi sáng,{' '}
              <p className="font-inters inline bg-font-color">Việt Hưng</p>
            </p>

            <p className="mt-10 font-side-color2 font-lato font-bold">
              Tóm tắt Portfolio
            </p>

            <div className="flex w-auto  mt-7  ">
              <p className="bg-side-color mr-4 ">Thời gian</p>

              <select
                name="date"
                id="date"
                className="inline-block w-[35%] border rounded-lg font-side-color2 text-center font-bold"
              >
                <option value="T10-2020">T10-2020</option>
                <option value="saab">Saab</option>
              </select>
            </div>

            <div className="mt-9 w-[99%] h-auto overflow-hidden">
              <Graph className="w-full"></Graph>
            </div>

            <div className="w-[95%] h-[70px] mt-4 mx-auto rounded-lg shadow-lg border flex justify-evenly flex-nowrap p-3">
              <VinHome className="w-[13%]"></VinHome>

              <div className="flex flex-col ">
                <h5 className="font-lato font-bold text-xs">VinHomes</h5>
                <p className=" bg-side-color text-ssm">Bất động sản</p>
              </div>

              <div className="flex flex-col ">
                <h4 className="font-lato font-bold text-xs">VND 50.000.000</h4>
                <p className=" bg-side-color text-ssm">Investment Value</p>
              </div>

              <h2 className="font-lato font-bold text-xs  bg-font-color">
                +10.75%
              </h2>
            </div>

            <div className="w-[95%] h-[70px] mt-4 mx-auto rounded-lg shadow-lg border flex flex-nowrap p-3 justify-evenly">
              <Apax className="w-[13%]"></Apax>

              <div className="flex flex-col ">
                <h5 className="font-lato font-bold text-xs">APAX</h5>
                <p className=" bg-side-color text-ssm">Teaching Platform</p>
              </div>

              <div className="flex flex-col ">
                <h4 className="font-lato font-bold text-xs">VND 50.000.000</h4>
                <p className=" bg-side-color text-ssm">Investment Value</p>
              </div>

              <h2 className="font-lato font-bold text-xs  bg-font-color">
                +4.75%
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-[26%] bg-white h-[450px] right-3 rounded-xl border shadow-lg  pointer-events-none top-[71px] ">
        <div className="flex justify-between p-2 font-side-color-w mb-5">
          <h2 className="font-side-color2 font-lato font-bold">
            Cổ phiếu tiềm năng
          </h2>
          <a href="/" className="text-sm">
            Xem tất cả
          </a>
        </div>

        <table className="table-auto w-[96%] mx-auto  font-lato ">
          <thead className="p-5">
            <tr className="text-xs h-12">
              <td className="w-[10%] font-side-color-wt">#</td>
              <td className="font-side-color2 font-bold">Tên</td>
              <td className="font-side-color-wt2 font-bold w-[35%]">
                Giá Tiền/Unit
              </td>
              <td className="footer-color w-[15%] ">Lợi tức</td>
            </tr>
          </thead>
          <tbody>
            {cophieu.map((value, index) => (
              <tr key={index} className="h-12 text-xs">
                <td className="w-[10%] font-side-color-wt">{index + 1}</td>
                <td className="font-side-color2 font-bold">{value.name}</td>
                <td className="font-side-color-wt2 font-bold w-[35%]">
                  {value.unit}
                </td>
                <td className="footer-color w-[15%] ">{value.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="absolute w-[30%] bottom-6 left-0  h-[248px] ">
        <TechComBank className="h-full"></TechComBank>
      </div>
      <div className="absolute w-[30%] bottom-7 right-2 bg-white border shadow-lg  h-[284px] rounded-lg">
        <div className="flex justify-between p-4 font-lato">
          <h2 className="text-base font-side-color-2 font-bold">
            Phân bố tài khoản
          </h2>
          <p className="bg-font-color text-sm">Chi tiết</p>
        </div>
        <div className="w-[89%] mt-3 h-[65%] mx-auto">
          <RoundCircle className="w-full"></RoundCircle>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
