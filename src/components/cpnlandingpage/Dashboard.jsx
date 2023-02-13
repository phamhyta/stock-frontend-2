import React from 'react';
import { ReactComponent as Graph } from '../../assets/svg/WelcomeGoStock/graph.svg';
import { ReactComponent as IconVinhomes } from '../../assets/svg/WelcomeGoStock/IconVinhomes.svg';
import { ReactComponent as Apax } from '../../assets/svg/WelcomeGoStock/IconApax.svg';
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
  return (
    <div className="mx-auto  w-5/6  h-[900px] bg-cover overflow-hidden mt-10 border relative">
      {/* <Multiple_Board1 className="w-full left-0 top-0   "></Multiple_Board1> */}
      <div className="absolute w-[84%] border h-[800px] ml-16 rounded-2xl flex justify-center items-center mt-2 font-roboto ">
        {/* div cha */}
        <div className="w-[90%] border h-[91%]  rounded-2xl grid grid-cols-3 font-roboto overflow-hidden">
          <div className="col-span-1   bg-main-picture p-6  ">
            <div className="flex mb-10   ">
              <IconDollar className="mr-2 w-[50px] h-[35px]"></IconDollar>
              <div className="text-2xl">Gostock</div>
            </div>
            <button className="w-[80%] h-[53px] mb-16  bg-main-button-picture text-center rounded-lg  text-white">
              Đầu tư ngay
            </button>
            <ul>
              {items.map(({ Icon, name }, index) => (
                <li key={index} className="flex mb-8   ml-3">
                  <Icon className="w-[15px] mr-4 h-[15px]" />
                  <div className="bg-side-color text-sm">{name}</div>
                </li>
              ))}
            </ul>
          </div>
          {/* welcome go stock */}
          <div className="col-span-2 border p-6">
            <div className="font-lato  font-bold text-xl  font-side-color">
              Chào mừng bạn tới với{' '}
              <div className="inline bg-font-color font-lato">
                Gostock Platform
              </div>
            </div>
            <div className="font-inters text-base mt-5 bg-side-color ">
              Chào buổi sáng,{' '}
              <div className="font-inters inline bg-font-color">Việt Hưng</div>
            </div>
            <div className="mt-10 font-side-color2 font-lato font-bold">
              Tóm tắt Portfolio
            </div>
            <div className="flex w-auto  mt-7  ">
              <div className="bg-side-color mr-4 ">Thời gian</div>
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
            <div className="w-[95%] h-[70px] mt-4 mx-auto rounded-lg shadow-lg border flex flex-nowrap p-3">
              <IconVinhomes />
              <div className="flex flex-col ml-2">
                <h5 className="font-lato font-bold text-xs">VinHomes</h5>
                <div className=" bg-side-color text-ssm">Bất động sản</div>
              </div>
              <div className="flex flex-col ml-20">
                <h4 className="font-lato font-bold text-xs">VND 50.000.000</h4>
                <div className=" bg-side-color text-ssm">Investment Value</div>
              </div>
              <div className="font-lato font-bold text-xs ml-16 bg-font-color">
                +10.75%
              </div>
            </div>
            <div className="w-[95%] h-[70px] mt-4 mx-auto rounded-lg shadow-lg border flex flex-nowrap p-3">
              <Apax />
              <div className="flex flex-col ml-2">
                <h5 className="font-lato font-bold text-xs">APAX</h5>
                <div className=" bg-side-color text-ssm">Teaching Platform</div>
              </div>
              <div className="flex flex-col ml-[72px]">
                <h4 className="font-lato font-bold text-xs">VND 50.000.000</h4>
                <div className=" bg-side-color text-ssm">Investment Value</div>
              </div>
              <div className="font-lato font-bold text-xs ml-16 bg-font-color">
                +4.75%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
