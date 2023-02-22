import React from 'react';
import { ReactComponent as SidePicture2 } from '../../assets/svg/SidePicture2.svg';
import { ReactComponent as SidePictureRound } from '../../assets/svg/SidePictureRound.svg';
import { ReactComponent as Vectors } from '../../assets/svg/vector.svg';
import { ReactComponent as LeftGraph } from '../../assets/svg/LeftSide/LeftGraph.svg';
import { ReactComponent as MonthlyView } from '../../assets/svg/LeftSide/MonthlyView.svg';
import { ReactComponent as Logo1 } from '../../assets/svg/LeftSide/logo1.svg';
import { ReactComponent as Logo2 } from '../../assets/svg/LeftSide/logo2.svg';
import { ReactComponent as Graph1 } from '../../assets/svg/LeftSide/graph1.svg';
import { ReactComponent as Graph2 } from '../../assets/svg/LeftSide/graph2.svg';
import { ReactComponent as Graph3 } from '../../assets/svg/LeftSide/graph3.svg';
import { ReactComponent as Graph4 } from '../../assets/svg/LeftSide/graph4.svg';
import { ReactComponent as MenuIcon } from '../../assets/svg/LeftSide/MenuIcon.svg';

const Main = () => {
  const tag = '<';
  return (
    <div>
      <div className="relative  right-[20%] top-[64px]  ">
        <SidePicture2 className="absolute  "></SidePicture2>
      </div>
      <div className="mt-10 mx-auto w-[85%]   grid grid-cols-11 border  ">
        <div className="col-span-6 w-full  border h-[600px] overflow-hidden  flex relative ">
          <div className="shadow-left w-[48%] ml-0 mr-[4%] h-[500px] border  relative rounded-3xl flex flex-col pl-6 font-lato bg-white">
            <p className="main-second-color text-3xl mb-9 mt-2">{tag}</p>
            <h2 className="text-color text-xl">
              LienViet <br></br> PostBank
            </h2>
            <h2 className="text-2xl font-bold">SGD 788.42</h2>
            <p className="bg-font-color text-sm mb-2">+6.2%</p>

            <div className="w-[full] h-[40%] mb-2 ">
              <LeftGraph className="w-full"></LeftGraph>
            </div>
            <p className="text-color text-sm font-bold">Today Volume</p>
            <p className="text-color text-sm font-bold">343,323</p>
          </div>

          <div className="w-[48%] shadow-left shadow-middle   h-[500px] mt-10 border  relative rounded-3xl pt-7">
            <div className="w-[95%] h-[55px]  rounded-lg flex justify-evenly p-2 mx-auto shadow-ssm">
              <div className="w-[18%] h-[80%] ">
                <Logo1 className="w-full mt-1"></Logo1>
              </div>
              <h1 className="w-[20%] text-xs font-bold">LienViet PostBank</h1>
              <div className="w-[25%] h-[88%] ">
                <Graph1 className="w-full mt-1"></Graph1>
              </div>
              <h1 className="text-xs font-bold">
                VND 24,321 <h1 className="text-right bg-font-color">+3.14%</h1>
              </h1>
            </div>

            <div className="w-[95%] h-[55px]  rounded-lg mt-2 flex justify-evenly p-2 mx-auto shadow-ssm">
              <div className="w-[18%] h-[80%] ">
                <Logo2 className="w-full mt-1"></Logo2>
              </div>
              <h1 className="w-[20%] text-xs font-bold">HPCS</h1>
              <div className="w-[25%] h-[88%] ">
                <Graph2 className="w-full mt-1"></Graph2>
              </div>
              <h1 className="text-xs font-bold">
                VND 84,000 <h1 className="text-right bg-font-color">+0.36%</h1>
              </h1>
            </div>

            <div className="w-[95%] h-[55px]  rounded-lg mt-2 flex justify-evenly p-2 mx-auto shadow-ssm">
              <div className="w-[18%] h-[80%] ">
                <Logo1 className="w-full mt-1"></Logo1>
              </div>
              <h1 className="w-[20%] text-xs font-bold">VinGroup</h1>
              <div className="w-[25%] h-[88%] ">
                <Graph3 className="w-full mt-1"></Graph3>
              </div>
              <h1 className="text-xs font-bold">
                VND 106,000<h1 className="text-right bg-font-color">+5.92%</h1>
              </h1>
            </div>

            <div className="w-[95%] h-[55px]  rounded-lg mt-2 flex justify-evenly p-2 mx-auto shadow-ssm">
              <div className="w-[18%] h-[80%] ">
                <Logo1 className="w-full mt-1"></Logo1>
              </div>
              <h1 className="w-[20%] text-xs font-bold">FPT</h1>
              <div className="w-[25%] h-[88%] ">
                <Graph4 className="w-full mt-1"></Graph4>
              </div>
              <h1 className="text-xs font-bold">
                VND 78,842<h1 className="text-right bg-font-color">+6.72% </h1>
              </h1>
            </div>

            <div className="w-[80%] flex justify-between h-[85px] relative    mt-12 mx-auto">
              <div className="w-[45%]  h-full bg-gray-side">
                <h1 className="bg-font-color font-bold text-2xl text-center mt-3">
                  +2.01%
                </h1>

                <div className="flex justify-center">
                  <Logo1 className="mr-2"></Logo1>
                  <p className="text-xs mt-2 font-bold ">HPCS</p>
                </div>
              </div>

              <div className="w-[45%]  h-full bg-gray-side">
                <h1 className="bg-font-color font-bold text-2xl text-center mt-3">
                  +7.05%
                </h1>

                <div className="flex justify-center">
                  <Logo2 className="mr-2"></Logo2>
                  <p className="text-xs mt-2 font-bold ">LVPB</p>
                </div>
              </div>
            </div>

            <div className="bottom-0 absolute w-full h-[50px] bg-main-green  rounded-b-3xl py-3 flex justify-center">
              <MenuIcon />
            </div>
          </div>

          <div className="w-[35%] absolute h-[210px] left-[32%]  rounded-lg  top-[32%] p-0 m-0">
            <MonthlyView className="w-full m-0"></MonthlyView>
          </div>
        </div>

        <section className="col-span-5 p-10">
          <h1 className="font-inters  mt-7 leading-[3rem] font-medium text-4xl text-main-green">
            Dễ dàng theo giõi các biến động cổ phiếu với{' '}
            <h1 className="font-medium text-4xl text-main-linear">GoStock</h1>{' '}
          </h1>

          <p className="font-inters main-second-color font-medium text-sm mt-[45px]  ">
            Theo dõi cổ phiếu mà bạn đang mong muốn với công nghệ real-time thật
            dễ dàng và chuẩn xác
          </p>

          <button className="bg-main-green  rounded-lg w-[35%] h-[61px]  shadow-md  text-center mt-[70px]">
            <a className="text-base font-roboto text-white" href="/">
              Tìm hiểu thêm
            </a>
          </button>
        </section>
      </div>

      <div className="relative  left-[79%] ">
        <SidePictureRound className="absolute  "></SidePictureRound>
      </div>

      <div className="mt-10 mx-auto w-3/4 grid grid-cols-2 border  ">
        <section className="grid-cols-1 p-10">
          <h1 className="font-inters  leading-[2rem] font-medium text-3xl text-main-green">
            Tìm ra những cổ phiếu phát triển trong tương lai{' '}
          </h1>
          <p className="font-inters main-second-color font-medium text-lg mt-[45px]  ">
            Sử dụng công nghệ AI, chúng tôi sẽ giúp bạn tìm ra những cổ phiếu có
            tiềm năng tăng giá trong thời gian tới
          </p>
          <h1 className="mt-10 font-inters  leading-[2rem] font-medium text-3xl text-main-green">
            Quản lí tài khoản của bạn{' '}
          </h1>
          <p className="font-inters main-second-color font-medium text-lg mt-[45px]  ">
            Mua và bán các cổ phiếu, theo dõi tất cả chỉ trong một ví duy nhất
            sử dụng thuyết Modern Portfolio được giới thiệu bởi chuyên gia kinh
            tế Harry Markowitz
          </p>

          <button className="bg-main-green  rounded-lg w-[35%] h-[61px]  shadow-md  text-center mt-[70px]">
            <a className="text-base font-roboto text-white" href="/">
              Tìm hiểu thêm
            </a>
          </button>
        </section>

        <div className="grid-cols-1 "></div>
      </div>
      <div className="mt-10 w-full h-[600px]  relative flex justify-center">
        <div className="right-0 top-0 w-full overflow-hidden h-[220px] relative mx-auto">
          <Vectors className="w-full absolute "></Vectors>
        </div>
        <div className="top-5 mx-auto w-[88%] grid grid-cols-11 h-[500px] border absolute ">
          <div className="col-span-6"></div>
          <section className="col-span-5 p-10">
            <h1 className="mt-10 font-inters  leading-[2rem] font-medium text-3xl text-main-green">
              Phát hiện dòng tiền thông minh tới từng nhóm ngành và cổ phiếu
            </h1>
            <p className="font-inters main-second-color font-medium text-lg mt-[45px]  ">
              Sử dụng biểu đồ RRG của chúng tôi để phát hiện dòng tiền thông
              minh tới từng nhóm ngành và cổ phiếu
            </p>
            <button className="bg-main-green  rounded-lg w-[35%] h-[61px]  shadow-md  text-center mt-[70px]">
              <a className="text-base font-roboto text-white" href="/">
                Tìm hiểu thêm
              </a>
            </button>
          </section>
        </div>
      </div>
      <div className="mt-10 mx-auto w-3/4 grid grid-cols-2 border ">
        <section className="grid-cols-1 p-10">
          <h1 className="mt-10 font-inters  leading-[2rem] font-medium text-3xl text-main-green">
            Phân tích mọi cổ phiếu chỉ trong 3 phút
          </h1>
          <p className="font-inters main-second-color font-medium text-lg mt-[45px]  ">
            Chúng tôi giúp bạn phân tích mọi cổ phiếu về cơ bản và kỹ thuật, kèm
            theo đó thể hiện trực quan với dữ liệu trong quá khứ và các cổ phiếu
            trong cùng nhóm ngành nhằm giúp bạn tự tin hơn trong quyết định đầu
            tư
          </p>

          <button className="bg-main-green  rounded-lg w-[35%] h-[61px]  shadow-md  text-center mt-[70px]">
            <a className="text-base font-roboto text-white" href="/">
              Tìm hiểu thêm
            </a>
          </button>
        </section>

        <div className="grid-cols-1"></div>
      </div>

      <div className="mt-10 mx-auto w-[55%]   align-center border flex flex-col justify-center mb-[200px]   ">
        <h1 className="mt-10 font-inters  leading-[2rem] font-medium text-4xl text-main-green text-center">
          Trải Nghiệm Hoàn Toàn Miễn Phí
        </h1>

        <p className="font-inters main-second-color font-medium text-lg mt-[45px] text-center  ">
          Tham gia GoStock cùng các nhà đầu tư chuyên nghiệp, Dẫn đầu và chiến
          thắng thị trường cùng GoStock
        </p>

        <button className="bg-main-green  rounded-lg w-[35%] h-[61px]  shadow-md self-center  mt-[70px]">
          <a className="text-base font-roboto text-white" href="/">
            Đăng Ký Ngay
          </a>
        </button>
      </div>
    </div>
  );
};

export default Main;
