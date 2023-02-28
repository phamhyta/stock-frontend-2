import React from "react";
import { ReactComponent as SidePicture2 } from "../../assets/svg/SidePicture2.svg";
import { ReactComponent as SidePictureRound } from "../../assets/svg/SidePictureRound.svg";
import { ReactComponent as Vectors } from "../../assets/svg/vector.svg";
import { ReactComponent as LeftGraph } from "../../assets/svg/LeftSide/LeftGraph.svg";
import { ReactComponent as MonthlyView } from "../../assets/svg/LeftSide/MonthlyView.svg";
import { ReactComponent as Logo1 } from "../../assets/svg/LeftSide/logo1.svg";
import { ReactComponent as Logo2 } from "../../assets/svg/LeftSide/logo2.svg";
import { ReactComponent as Graph1 } from "../../assets/svg/LeftSide/graph1.svg";
import { ReactComponent as Graph2 } from "../../assets/svg/LeftSide/graph2.svg";
import { ReactComponent as Graph3 } from "../../assets/svg/LeftSide/graph3.svg";
import { ReactComponent as Graph4 } from "../../assets/svg/LeftSide/graph4.svg";
import { ReactComponent as MenuIcon } from "../../assets/svg/LeftSide/MenuIcon.svg";

import { ReactComponent as Vinamilk } from "../../assets/svg/RightSide/Vinamilk.svg";
import { ReactComponent as IconVinhome } from "../../assets/svg/RightSide/IconVinhomes.svg";
import { ReactComponent as StockGroup } from "../../assets/svg/RightSide/StockGroup.svg";

import { ReactComponent as Vector_0 } from "../../assets/svg/Board/Vector0.svg";
import { ReactComponent as IconBlue } from "../../assets/svg/Board/IconBlue.svg";
import { ReactComponent as Vector_2 } from "../../assets/svg/WelcomeGoStock/Vector_2.svg";
import { ReactComponent as Vector_3 } from "../../assets/svg/WelcomeGoStock/Vector_3.svg";
import { ReactComponent as Vector_4 } from "../../assets/svg/WelcomeGoStock/Vector_4.svg";
import { ReactComponent as Vector_5 } from "../../assets/svg/WelcomeGoStock/Vector_5.svg";
import { ReactComponent as Vector_6 } from "../../assets/svg/WelcomeGoStock/Vector_6.svg";
import { ReactComponent as IconDollar } from "../../assets/svg/WelcomeGoStock/IconDollar.svg";

import { ReactComponent as BoardStock } from "../../assets/svg/Board/BoardStock.svg";

import { ReactComponent as BarChart } from "../../assets/svg/Board2/BarChart.svg";

import { ReactComponent as VectorDecor } from "../../assets/svg/Board3/Decor.svg";
import { ReactComponent as IconBell } from "../../assets/svg/Board3/IconBell.svg";
import { ReactComponent as IconHuman } from "../../assets/svg/Board3/IconHuman.svg";
import { ReactComponent as SearchBar } from "../../assets/svg/Board3/SearchBar.svg";
import { ReactComponent as LeftChart } from "../../assets/svg/Board3/LeftBarChart.svg";
import { ReactComponent as TotalEquity } from "../../assets/svg/Board3/TotalEquity.svg";
import { ReactComponent as RightBar } from "../../assets/svg/Board3/RightBar.svg";
import { ReactComponent as ChartScreen } from "../../assets/svg/Board3/ChartScreen.svg";

const Main = () => {
  const tag = "<";

  const brand = [
    {
      Icon: Vinamilk,
      Name: "VNM",
      Detail: "Vinamilk",
      Value: "+7.05%",
    },
    {
      Icon: IconVinhome,
      Name: "VIC",
      Detail: "Vingroup",
      Value: "+15.75%",
    },
    {
      Icon: Vinamilk,
      Name: "VNM",
      Detail: "Vinamilk",
      Value: "+12.45%",
    },
  ];

  const items = [
    {
      Icon: Vector_0,
      name: "Báo cáo",
    },
    {
      Icon: IconBlue,
      name: "Portfolio",
    },
    {
      Icon: Vector_2,
      name: "Khám phá",
    },
    {
      Icon: Vector_3,
      name: "Thanh toán",
    },
    {
      Icon: Vector_4,
      name: "Lịch sử",
    },
    {
      Icon: Vector_5,
      name: "Tin nhắn",
    },
    {
      Icon: Vector_6,
      name: "Cài đặt",
    },
  ];

  return (
    <div>
      <div className="lg:relative  lg:right-[20%] lg:top-[64px] lg:visible invisible  ">
        <SidePicture2 className="absolute  "></SidePicture2>
      </div>

      <div className="mt-10 mx-auto lg:w-[85%] w-[93%]  lg:grid flex flex-col lg:grid-flow-row lg:grid-cols-11  ">
        <div className="order-2 lg:order-1 lg:col-span-6 w-full h-[345px] lg:h-[600px] overflow-hidden  flex relative ">
          <div className="shadow-left w-[48%] ml-0 mr-[4%] lg:h-[500px] h-[275px] border  relative rounded-3xl flex flex-col pl-2 lg:pl-6 font-lato bg-white">
            <p className="main-second-color text-3xl lg:mb-9  mt-2 lg:visible invisible">
              {tag}
            </p>
            <h2 className="lg:text-color lg:text-xl text-xs font-blue-color-wt">
              LienViet <br></br> PostBank
            </h2>
            <h2 className="lg:text-2xl text-lg font-bold">SGD 788.42</h2>
            <p className="bg-font-color lg:text-lg text-[9px]  lg:mb-2">
              +6.2%
            </p>

            <div className="w-[full] h-[20%]  lg:h-[40%] mb-2   ">
              <LeftGraph className="w-full lg:pb-0 pb-[107px]"></LeftGraph>
            </div>
            <p className="text-color lg:text-lg text-[6px] font-bold lg:mt-0 mt-11">
              Today Volume
            </p>
            <p className="text-color lg:text-lg text-[6px] font-bold">
              343,323
            </p>
          </div>

          <div className="w-[48%] shadow-left shadow-middle h-[265px]  lg:h-[500px] mt-10 border  relative rounded-3xl  lg:rounded-3xl pt-5 lg:pt-7">
            <div className="w-[95%] lg:w-[93%] lg:h-[55px] mb-2 shadow-wt h-[25px] rounded-lg flex justify-evenly p-1 lg:p-2 mx-auto shadow-slg items-center">
              <div className="w-[18%] h-[80%] ">
                <Logo1 className="w-full lg:pb-0 pb-1 lg:mt-1"></Logo1>
              </div>
              <h1 className="w-[20%]  lg:text-xs text-[5px] font-bold">
                LienViet PostBank
              </h1>
              <div className="w-[25%] h-[88%] ">
                <Graph1 className="w-full mt-1 lg:pb-0 pb-3"></Graph1>
              </div>
              <h1 className="text-[5px] lg:text-xs font-bold">
                VND 24,321 <h1 className="text-right bg-font-color ">+3.14%</h1>
              </h1>
            </div>

            <div className="w-[95%] lg:w-[93%] lg:h-[55px]  mb-2 shadow-wt h-[25px]  rounded-lg flex justify-evenly p-1 lg:p-2 mx-auto shadow-slg items-center">
              <div className="w-[18%] h-[80%] ">
                <Logo2 className="w-full lg:pb-0 pb-1 lg:mt-1"></Logo2>
              </div>
              <h1 className="w-[20%] lg:text-xs text-[5px] font-bold">HPCS</h1>
              <div className="w-[25%] h-[88%] ">
                <Graph2 className="w-full mt-1 lg:pb-0 pb-2"></Graph2>
              </div>
              <h1 className="text-[5px] lg:text-xs font-bold">
                VND 24,321 <h1 className="text-right bg-font-color ">+3.14%</h1>
              </h1>
            </div>

            <div className="w-[95%] lg:w-[93%] lg:h-[55px]  mb-2 shadow-wt h-[25px]  rounded-lg flex justify-evenly p-1 lg:p-2 mx-auto shadow-slg items-center">
              <div className="w-[18%] h-[80%] ">
                <Logo1 className="w-full lg:pb-0 pb-1 lg:mt-1"></Logo1>
              </div>
              <h1 className="w-[20%] lg:text-xs text-[5px] font-bold">
                VinGroup
              </h1>
              <div className="w-[25%] h-[88%] ">
                <Graph3 className="w-full mt-1 lg:pb-0 pb-4"></Graph3>
              </div>
              <h1 className="text-[5px] lg:text-xs font-bold">
                VND 24,321 <h1 className="text-right bg-font-color ">+3.14%</h1>
              </h1>
            </div>

            <div className="w-[95%] lg:w-[93%] lg:h-[55px]   mb-2 shadow-wt h-[25px]  rounded-lg flex justify-evenly p-1 lg:p-2 mx-auto shadow-slg items-center">
              <div className="w-[18%] h-[80%] ">
                <Logo1 className="w-full lg:pb-0 pb-1 lg:mt-1"></Logo1>
              </div>
              <h1 className="w-[20%] lg:text-xs text-[5px] font-bold">FPT</h1>
              <div className="w-[25%] h-[88%] ">
                <Graph4 className="w-full mt-1 lg:pb-0 pb-4"></Graph4>
              </div>
              <h1 className="text-[5px] lg:text-xs font-bold">
                VND 24,321 <h1 className="text-right bg-font-color ">+3.14%</h1>
              </h1>
            </div>

            <div className="lg:w-[80%] w-[90%] flex justify-between h-[50px] lg:h-[85px] relative  mt-5  lg:mt-12 mx-auto">
              <div className="w-[45%] bg-gray-wt   h-full bg-gray-side">
                <h1 className="bg-font-color font-bold text-[14px] lg:text-2xl text-center mt-1 lg:mt-3">
                  +2.01%
                </h1>

                <div className="flex justify-center">
                  <Logo1 className="lg:mr-2 w-[40%]"></Logo1>
                  <p className="lg:text-xs text-[8px] mt-2 font-bold ">HPCS</p>
                </div>
              </div>

              <div className="w-[45%] bg-gray-wt   h-full bg-gray-side">
                <h1 className="bg-font-color  text-[14px] font-bold lg:text-2xl text-center mt-1 lg:mt-3">
                  +7.05%
                </h1>

                <div className="flex justify-center">
                  <Logo2 className="lg:mr-2  w-[35%]"></Logo2>
                  <p className="lg:text-xs text-[8px] mt-2 font-bold ">LVPB</p>
                </div>
              </div>
            </div>

            <div className="bottom-0 absolute w-full lg:h-[50px] h-[20px] bg-main-green rounded-b-3xl py-1  lg:py-3 flex justify-center">
              <MenuIcon className="h-[80%]" />
            </div>
          </div>

          <div className="w-[35%] absolute  lg:h-[210px] left-[32%]  rounded-lg  top-[32%]  lg:p-0 lg:m-0">
            <MonthlyView className="lg:w-full w-[95%] lg:pb-0 pb-[72px] overflow-visible lg:m-0"></MonthlyView>
          </div>
        </div>

        <section className="order-1 lg:order-2 lg:col-span-5 lg:p-10 lg:px-5 lg:mb-0 mb-6">
          <h1 className="font-inters  mt-7 lg:leading-[3rem] lg:font-medium lg:text-left text-center font-bold text-xl  lg:text-4xl text-main-green">
            Dễ dàng theo giõi các biến động cổ phiếu với{" "}
            <h1 className="lg:font-medium font-bold lg:text-4xl inline-block  lg:block text-xl  text-main-linear">
              GoStock
            </h1>{" "}
          </h1>

          <p className="font-inters main-second-color font-medium text-base mt-[45px] lg:text-left text-center  ">
            Theo dõi cổ phiếu mà bạn đang mong muốn với công nghệ real-time thật
            dễ dàng và chuẩn xác
          </p>

          <button className="bg-main-green rounded lg:rounded-lg  lg:w-[38%] lg:h-[61px] w-[45%] h-[38px] lg:shadow-md lg:mb-0 mb-[50px]  text-center mx-[28%] lg:ml-0 mt-[20px] lg:mt-[70px] ">
            <a className="text-lg lg:text-base font-roboto text-white" href="/">
              Tìm hiểu thêm
            </a>
          </button>
        </section>
      </div>

      <div className="lg:relative h-[5px] overflow-visible    lg:left-[79%] ">
        <SidePictureRound className="lg:absolute lg:visible invisible"></SidePictureRound>
      </div>

      <div className="lg:mt-10  mx-auto lg:w-[88%] lg:grid lg:grid-cols-2   ">
        <section className="lg:grid-cols-1 text-center lg:text-left lg:p-10">
          <h1 className="font-inters  lg:leading-[2rem] font-bold lg:font-medium lg:text-3xl text-xl lg:mt-0 mt-5   text-main-green">
            Tìm ra những cổ phiếu phát triển trong tương lai{" "}
          </h1>
          <p className="font-inters main-second-color font-medium text-base lg:text-lg mt-[12px] lg:mt-[45px]  ">
            Sử dụng công nghệ AI, chúng tôi sẽ giúp bạn tìm ra những cổ phiếu có
            tiềm năng tăng giá trong thời gian tới
          </p>
          <h1 className="lg:mt-10 mt-5  font-inters  leading-[2rem] font-bold lg:font-medium text-xl  lg:text-3xl text-main-green">
            Quản lí tài khoản của bạn{" "}
          </h1>
          <p className="font-inters main-second-color font-medium  text-base  lg:text-lg mt-[14px] lg:mt-[45px]  ">
            Mua và bán các cổ phiếu, theo dõi tất cả chỉ trong một ví duy nhất
            sử dụng thuyết Modern Portfolio được giới thiệu bởi chuyên gia kinh
            tế Harry Markowitz
          </p>

          <button className="bg-main-green  lg:rounded-lg w-[45%] rounded lg:w-[35%] h-[38px] lg:h-[61px]  shadow-md  text-center mt-[40px] mb-[90px] lg:mb-0 lg:mt-[70px]">
            <a className="text-lg lg:text-base font-roboto text-white" href="/">
              Tìm hiểu thêm
            </a>
          </button>
        </section>

        <div className="lg:grid-cols-1 lg:h-[600px]   relative">
          <div className="lg:w-[80%] w-[85%] ml-7 rounded-xl shadow-md  h-[340px] lg:h-[500px] bg-white border lg:mt-10  lg:p-10 lg:rounded-3xl lg:shadow-lg lg:ml-14 relative ">
            <h2 className="font-blue-color-wt lg:text-2xl lg:text-left lg:mt-0 mt-6   text-center text-[14px]  font-bold font-roboto mb-6">
              Các cổ phiếu tiềm năng
            </h2>

            {brand.map(({ Icon, Name, Detail, Value }, index) => (
              <div className="lg:w-[97%] w-[85%] border h-[70px] mb-6 lg:ml-0 ml-5 rounded-md lg:h-[101px] lg:mb-8 flex justify-start items-center lg:pl-3 lg:rounded-xl bg-color-wf ">
                <Icon className="w-[25%]   " />

                <div className="flex flex-col ml-5">
                  <h2 className="font-lato lg:text-color text-[10px] lg:text-lg font-bold">
                    {Name}
                  </h2>
                  <p className="font-lato bg-side-color text-[6px] lg:text-xs">
                    {Detail}
                  </p>
                </div>

                <div className="flex flex-col ml-[60px] lg:ml-[80px]">
                  <h2 className="lg:font-lato lg:text-color  text-[10px]  lg:text-lg font-bold">
                    {Value}
                  </h2>
                  <p className="bg-side-color lg:text-xs text-[6px]">
                    Return Value
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute w-[40%] h-[60px] bottom-4 lg:h-[130px] lg:bottom-10 lg:rounded-lg ">
            <StockGroup className=" lg:pr-[135px] lg:w-[230%] w-[170%] pb-[100px] lg:pl-0 pl-[6px]   overflow-visible  lg:pb-[80px]  " />
          </div>
        </div>
      </div>

      <div className="mt-10 w-full lg:h-[600px] h-[500px]    relative lg:flex lg:justify-center">
        <div className="right-0 top-0 w-full  h-[220px] overflow-hidden relative mx-auto">
          <Vectors className="w-full absolute lg:visible invisible"></Vectors>
        </div>

        <div className="top-5 lg:mt-0 mt-10  mx-auto lg:w-[88%] w-full lg:grid lg:grid-cols-11 h-[500px]  absolute ">
          <div className="lg:col-span-7 relative">
            <div className="w-full lg:mt-[46px] border lg:rounded-2xl relative  overflow-hidden h-[400px] shadow-md">
              {/*sidebar*/}
              <div className=" bg-main-picture lg:pt-6 lg:p-2 shadow-sm p-1 w-[20%] lg:h-full z-10 absolute  lg:rounded-l-2xl  lg:overflow-hidden  ">
                <div className="flex lg:mb-3 mb-1  ">
                  <IconDollar className="lg:mr-1 mr-1 w-[11px] lg:w-[50px] lg:h-[35px]"></IconDollar>
                  <h1 className="lg:text-lg mt-1 text-[4px]">Gostock</h1>
                </div>

                <button className="lg:w-[80%] w-[70%] ml-[10%] lg:h-[33px] lg:text-xs lg:mb-4 h-[13px] rounded-lg mb-4  text-[7px]   bg-main-button-picture text-center lg:rounded-lg  text-white">
                  Đầu tư ngay
                </button>

                <ul>
                  {items.map(({ Icon, name }, index) => (
                    <li
                      key={index}
                      className={`flex lg:mb-6 mb-2 ml-2 lg:ml-3 text-green-600 `}
                    >
                      <Icon className="lg:w-[15px] lg:mr-4 lg:h-[15px] h-[6px] w-[6px] mr-2    " />
                      <h2
                        className={`text-[#BFC3C8] text-[6px] lg:text-[10px]  ${
                          name === "Portfolio" ? "text-[#00BF71]" : ""
                        }`}
                      >
                        {name}
                      </h2>
                    </li>
                  ))}
                </ul>
              </div>
              {/* main */}
              <div className="w-full lg:top-0  lg:left-6 absolute bg-white">
                <BoardStock className="lg:w-full   " />
              </div>
            </div>
          </div>

          <section className="lg:col-span-3 lg:pl-6 ">
            <h1 className="mt-10 font-inters  leading-[2rem] lg:text-left text-center  text-xl font-bold  lg:text-[26px] text-main-green">
              Phát hiện dòng tiền thông minh tới từng nhóm ngành và cổ phiếu
            </h1>
            <p className="font-inters main-second-color  font-medium text-black text-center lg:text-left text-[17px] mt-[45px]  ">
              Sử dụng biểu đồ RRG của chúng tôi để phát hiện dòng tiền thông
              minh tới từng nhóm ngành và cổ phiếu
            </p>

            <button className="bg-main-green  lg:rounded-lg w-[45%] rounded lg:w-[55%] h-[38px] lg:h-[61px] lg:ml-0 ml-[70px]  shadow-md  text-center mt-[40px] mb-[90px] lg:mb-0 lg:mt-[70px]">
              <a
                className="text-lg lg:text-base font-roboto text-white"
                href="/"
              >
                Tìm hiểu thêm
              </a>
            </button>
          </section>
        </div>
      </div>

      <div className="w-full lg:h-[600px] h-[500px] relative lg:flex lg:justify-center">
        <div className="top-5 lg:mt-0 mt-10  mx-auto lg:w-[95%] w-full lg:grid lg:grid-cols-11 lg:ml-[90px] absolute ">
          <section className="lg:col-span-3   ">
            <h1 className="mt-10 font-inters  leading-[2rem] lg:text-left text-center  text-xl font-bold  lg:text-[26px] text-main-green">
              Phân tích mọi cổ phiếu chỉ trong 3 phút
            </h1>
            <p className="font-inters main-second-color  font-medium text-black text-center lg:text-left text-[17px] mt-[45px]  ">
              Chúng tôi giúp bạn phân tích mọi cổ phiếu về cơ bản và kỹ thuật,
              kèm theo đó thể hiện trực quan với dữ liệu trong quá khứ và các cổ
              phiếu trong cùng nhóm ngành nhằm giúp bạn tự tin hơn trong quyết
              định đầu tư
            </p>

            <button className="bg-main-green  lg:rounded-lg w-[45%] rounded lg:w-[55%] h-[38px] lg:h-[61px] lg:ml-0 ml-[70px]  shadow-md  text-center mt-[40px] mb-[90px] lg:mb-0 lg:mt-[70px]">
              <a
                className="text-lg lg:text-base font-roboto text-white"
                href="/"
              >
                Tìm hiểu thêm
              </a>
            </button>
          </section>

          <div className="lg:col-span-7 relative lg:ml-10">
            <div className="w-full lg:mt-[46px] lg:rounded-2xl relative h-[400px] ">
              {/*sidebar*/}
              <div className=" bg-main-picture lg:pt-6 lg:p-2 shadow-sm p-1 w-[20%] lg:h-full z-10 absolute  lg:rounded-l-2xl  lg:overflow-hidden  ">
                <div className="flex lg:mb-3 mb-1  ">
                  <IconDollar className="lg:mr-1 mr-1 w-[11px] lg:w-[50px] lg:h-[35px]"></IconDollar>
                  <h1 className="lg:text-lg mt-1 text-[4px]">Gostock</h1>
                </div>

                <button className="lg:w-[80%] w-[70%] ml-[10%] lg:h-[33px] lg:text-xs lg:mb-4 h-[13px] rounded-lg mb-4  text-[7px]   bg-main-button-picture text-center lg:rounded-lg  text-white">
                  Đầu tư ngay
                </button>

                <ul>
                  {items.map(({ Icon, name }, index) => (
                    <li
                      key={index}
                      className={`flex lg:mb-6 mb-2 ml-2 lg:ml-3 text-green-600 `}
                    >
                      <Icon className="lg:w-[15px] lg:mr-4 lg:h-[15px] h-[6px] w-[6px] mr-2    " />
                      <h2
                        className={`text-[#BFC3C8] text-[6px] lg:text-[10px]  ${
                          name === "Khám phá" ? "text-[#00BF71]" : ""
                        }`}
                      >
                        {name}
                      </h2>
                    </li>
                  ))}
                </ul>
              </div>
              {/* main */}
              <div className="lg:top-0 lg:left-0 w-full  absolute  lg:h-full  bg-white">
                <BarChart className="lg:w-[110%]   lg:pb-5   " />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:h-[700px] relative  ">
        <div className="relative w-full lg:h-[20px] lg:pt-5 ">
          <VectorDecor />
        </div>

        <div className="mt-10 mx-auto lg:w-[85%] w-[93%]  lg:grid lg:ml-10 lg:grid-flow-row lg:grid-cols-11 absolute  ">
          <section className="order-2 lg:order-1 lg:col-span-5 lg:p-10 lg:px-5 lg:mb-0 mb-6">
            <h1 className="font-inters  mt-7 lg:leading-[3rem]  lg:text-left text-center font-bold text-xl  lg:text-3xl text-main-green">
              Giảm chỉ phí doanh nghiệp và tăng tối đa lợi nhuận
            </h1>

            <p className="font-inters main-second-color font-medium text-lg mt-[45px] lg:text-left text-center  ">
              Với việc sử dụng sản phẩm này, quy trình làm việc của công ty sẽ
              đã giảm thiểu chi phí vận hành, từ đó tăng doanh thu tổng thê của
              doanh nghiệp
            </p>

            <button className="bg-[#2BCA89] rounded lg:rounded-lg  lg:w-[38%] lg:h-[61px] w-[45%] h-[38px] lg:shadow-md lg:mb-0 mb-[50px]  text-center mx-[28%] lg:ml-0 mt-[20px] lg:mt-[70px] ">
              <a
                className="text-lg lg:text-base font-roboto text-white"
                href="/"
              >
                Tìm hiểu thêm
              </a>
            </button>
          </section>

          <div className="order-1 lg:order-2 lg:col-span-6 w-full h-[345px] lg:h-[600px] overflow-hidden  flex relative ">
            <div className="shadow-left w-[48%] ml-10  lg:h-[550px] h-[275px]  mt-12   relative rounded-3xl flex flex-col  font-lato bg-white">
              <div className="flex w-full  text-center  items-center border-b h-[60px] lg:mb-1">
                <p className=" text-3xl lg:font-light text-[#667085] lg:mb-2 lg:mx-2 mt-2 ">
                  {tag}
                </p>
                <SearchBar className="w-[60%] lg:mr-4 h-auto border overflow-visible" />
                <IconBell className="lg:mr-4 " />
                <IconHuman className="lg:mr-4" />
              </div>

              <div className="flex flex-col lg:p-2 font-roboto">
                <h2 className="text-[#344054] lg:text-xs">
                  1.3 Loan to Customer
                </h2>

                <div className="lg:w-[100%] mx-auto  h-[220px]">
                  <LeftChart className="w-[100%] lg:top-0 lg:pb-10" />
                </div>

                <div className="lg:mt-16 lg:pl-2 w-full overflow-hidden ">
                  <TotalEquity />
                </div>
              </div>

              <div className="bottom-0 left-0 absolute w-full lg:h-[50px] h-[20px] bg-main-green rounded-b-3xl py-1  lg:py-3 flex justify-center">
                <MenuIcon className="h-[80%]" />
              </div>
            </div>

            <div className="w-[48%] shadow-left shadow-middle h-[265px]  lg:h-[550px] border  absolute lg:left-[50%] rounded-3xl  lg:rounded-3xl bg-white">
              <div className="flex w-full  text-center  items-center border-b h-[60px] lg:mb-1">
                <p className=" text-3xl text-[#667085] lg:mb-2 lg:mx-2 mt-2 ">
                  {tag}
                </p>
                <SearchBar className="w-[60%] lg:mr-4 h-auto border overflow-visible" />
                <IconBell className="lg:mr-4 " />
                <IconHuman className="lg:mr-4" />
              </div>
              <div className="lg:w-[100%] mx-auto h-[180px] overflow-hidden ">
                <RightBar className="w-full lg:bottom-0 lg:pb-10" />
              </div>
              <div className="lg:pl-2 w-full lg:mt-[5px]  ">
                <ChartScreen />
              </div>

              <div className="bottom-0 absolute w-full lg:h-[50px] h-[20px] bg-main-green rounded-b-3xl py-1  lg:py-3 flex justify-center">
                <MenuIcon className="h-[80%]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 mx-auto w-[55%]   align-center  flex flex-col justify-center mb-[200px]   ">
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
