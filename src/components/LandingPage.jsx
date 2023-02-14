import React from "react";
// import "./landing.css";

//import * as svg from "../assets/svg  ";
import { ReactComponent as Decorate } from "../assets/svg/Decorate.svg";
import { ReactComponent as Left_chart } from "../assets/svg/LeftChart.svg";
import { ReactComponent as Vectors } from "../assets/svg/vector.svg";

import { ReactComponent as IconRoundFooter } from "../assets/svg/Icon_Round_footer.svg";

import { ReactComponent as MessFooter } from "../assets/svg/messenger_footer.svg";
import { ReactComponent as GmailFooter } from "../assets/svg/GmailFooter.svg"; //GmailFooter ->
import { ReactComponent as Icon } from "../assets/svg/Icon.svg";
import { ReactComponent as SidePicture } from "../assets/svg/SidePicture.svg";
import { ReactComponent as SidePicture2 } from "../assets/svg/SidePicture2.svg";
import { ReactComponent as SidePictureRound } from "../assets/svg/SidePictureRound.svg";

//welcome go stock
import { ReactComponent as IconDollar } from "../assets/svg/WelcomeGoStock/IconDollar.svg";
import { ReactComponent as Vector_0 } from "../assets/svg/WelcomeGoStock/Vector.svg";
import { ReactComponent as Vector_1 } from "../assets/svg/WelcomeGoStock/Vector_1.svg";
import { ReactComponent as Vector_2 } from "../assets/svg/WelcomeGoStock/Vector_2.svg";
import { ReactComponent as Vector_3 } from "../assets/svg/WelcomeGoStock/Vector_3.svg";
import { ReactComponent as Vector_4 } from "../assets/svg/WelcomeGoStock/Vector_4.svg";
import { ReactComponent as Vector_5 } from "../assets/svg/WelcomeGoStock/Vector_5.svg";
import { ReactComponent as Vector_6 } from "../assets/svg/WelcomeGoStock/Vector_6.svg";
import { ReactComponent as Graph } from "../assets/svg/WelcomeGoStock/graph.svg";
import { ReactComponent as VinHome } from "../assets/svg/WelcomeGoStock/Icon-Vinhomes.svg";
import { ReactComponent as Apax } from "../assets/svg/WelcomeGoStock/Icon-Apax.svg";
import {ReactComponent as TechComBank} from "../assets/svg/WelcomeGoStock/TechComBank.svg";
import {ReactComponent as  RoundCircle} from "../assets/svg/WelcomeGoStock/RoundCircle.svg";

// import Board from "../assets/img/Board.jpg";

//first left side
import {ReactComponent as  LeftGraph} from "../assets/svg/LeftSide/LeftGraph.svg";
import {ReactComponent as  MonthlyView} from "../assets/svg/LeftSide/MonthlyView.svg";

function LandingPage() {
  const items = [
    {
      Icon: Vector_0,
      name: "Báo cáo",
    },
    {
      Icon: Vector_1,
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

  const cophieu = [
    {
      name: "FPT Corp",
      unit: "77,200",
      price: "+0.39%",
    },
    {
      name: " Vingroup JSC",
      unit: "71,200",
      price: "+1.86%",
    },
    {
      name: " Vinhomes",
      unit: "55,400",
      price: " -0.18%",
    },
    {
      name: " HGM",
      unit: "40,000",
      price: " +0.00%",
    },
    {
      name: "Techcombank",
      unit: "28,000",
      price: " +0.35%",
    },
    {
      name: "GTNFoods JSC",
      unit: "19,100",
      price: " +0.00%",
    },
    {
      name: " APAX",
      unit: "6,120.0",
      price: " -6.99%",
    },
  ];
  const tag = "<";

  const widthpage = "88%";

  return (
    <React.Fragment>
      <div className="w-full h-screen overflow-auto bg-white  ">
        <nav className="text-color font-lato m-0 p-0">
          <div className="max-w-full w-full h-56  bg-white text-color font-lato relative">
            <Decorate className="absolute" />

            <div className="flex flex-nowrap max-w-full justify-between items-center border-yellow-300    ">
              <div className="flex  flex-nowrap ml-6 my-8  ">
                <div className="   mr-2  h-9  overflow-hidden">
                  <Icon className="h-full"></Icon>
                </div>

                <a href="#" className="text-color text-3xl font-bold">
                  GoStock
                </a>
              </div>

              <ul className="flex    ">
                <li>
                  <a
                    className="menu-item"
                    style={{ color: "#20D088" }}
                    href="#"
                  >
                    Trang Chủ
                  </a>
                </li>
                <li>
                  <a className="menu-item" href="#">
                    Tin Tức
                  </a>
                </li>
                <li>
                  <a className="menu-item" href="#">
                    Tài Nguyên
                  </a>
                </li>
                <li>
                  <a className="menu-item" href="#">
                    Về Chúng Tôi
                  </a>
                </li>
                <li>
                  <a className="menu-item" href="#">
                    Liên Hệ
                  </a>
                </li>
              </ul>

              <button className="box-shadow-button mr-24 mb-5 rounded bg-green-button text-white w-24 h-8  text-base ">
                Đăng Nhập
              </button>
            </div>

            <h1 className="text-center mt-1  font-lato text-3xl leading-11 font-lato bg-font-color font-bold">
              Nhanh Chóng Phát triển <br></br>Tài Chính Của Bạn Với GoStock
            </h1>
            <br></br>
          </div>
        </nav>

        <div className="relative  left-[80%] ">
          <SidePicture className="absolute  "></SidePicture>
        </div>

        {/* //height */}
        <main className="w-full  h-auto text-color  justify-center items-center bg-white ">
          <section>
            <h1 className="text-center  text-color font-lato text-2xl font-bold pt-4 ">
              Đăng ký ngay để bắt đầu sử dụng miễn<br></br>phí dịch vụ của chúng
              tôi
            </h1>{" "}
          </section>

          {/* bắt đầu */}
          <form className="flex flex-nowrap mx-auto justify-center mt-6 w-2/5 border-red-400 ">
            <input
              className="w-2/3 h-14 border border-r-0  pl-2 rounded-lg rounded-r-none "
              type="text"
              id="DangNhap"
              name="fname"
              placeholder="Nhập địa chỉ email của bạn"
            ></input>
            <br></br>
            <button
              className="w-1/3 bg-green-500 rounded-lg "
              type="submit"
              id="submit"
            >
              Bắt Đầu
            </button>
          </form>

          <div className=" mx-auto  w-[85%]  h-[900px] bg-cover overflow-hidden mt-10  relative">
            <div className="absolute w-[78%]  h-[800px] ml-12 rounded-2xl flex justify-center items-center mt-2 font-roboto">
              <div className="w-[91%] border h-[91%]  rounded-2xl grid grid-cols-3 font-roboto overflow-hidden">
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

                {/* welcome go stock */}
                <div className="col-span-2  p-6 mr-[80px]">
                  <h2 className="font-lato  font-bold text-xl  font-side-color">
                    Chào mừng bạn tới với{" "}
                    <h2 className="inline bg-font-color font-lato">
                      Gostock Platform
                    </h2>
                  </h2>
                  <p className="font-inters text-base mt-5 bg-side-color ">
                    Chào buổi sáng,{" "}
                    <p className="font-inters inline bg-font-color">
                      Việt Hưng
                    </p>
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

                  <div className="w-[95%] h-[70px] mt-4 mx-auto rounded-lg shadow-lg border flex flex-nowrap p-3">
                    <VinHome></VinHome>

                    <div className="flex flex-col ml-2">
                      <h5 className="font-lato font-bold text-xs">VinHomes</h5>
                      <p className=" bg-side-color text-ssm">Bất động sản</p>
                    </div>

                    <div className="flex flex-col ml-20">
                      <h4 className="font-lato font-bold text-xs">
                        VND 50.000.000
                      </h4>
                      <p className=" bg-side-color text-ssm">
                        Investment Value
                      </p>
                    </div>

                    <h2 className="font-lato font-bold text-xs ml-16 bg-font-color">
                      +10.75%
                    </h2>
                  </div>

                  <div className="w-[95%] h-[70px] mt-4 mx-auto rounded-lg shadow-lg border flex flex-nowrap p-3">
                    <Apax></Apax>

                    <div className="flex flex-col ml-2">
                      <h5 className="font-lato font-bold text-xs">APAX</h5>
                      <p className=" bg-side-color text-ssm">
                        Teaching Platform
                      </p>
                    </div>

                    <div className="flex flex-col ml-[72px]">
                      <h4 className="font-lato font-bold text-xs">
                        VND 50.000.000
                      </h4>
                      <p className=" bg-side-color text-ssm">
                        Investment Value
                      </p>
                    </div>

                    <h2 className="font-lato font-bold text-xs ml-16 bg-font-color">
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
                <a href="#" className="text-sm">
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
                      <td className="w-[10%] font-side-color-wt">
                        {index + 1}
                      </td>
                      <td className="font-side-color2 font-bold">
                        {value.name}
                      </td>
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
                <h2 className="text-base font-side-color-2 font-bold">Phân bố tài khoản</h2>
                <p className="bg-font-color text-sm">Chi tiết</p>
              </div>

              <div className="w-[89%] mt-3 h-[65%] mx-auto">
                <RoundCircle className="w-full"></RoundCircle>
                   
              </div>
                  
            </div>

            
          </div>

          <div className="relative  right-[20%] top-[64px]  ">
            <SidePicture2 className="absolute  "></SidePicture2>
          </div>






          <div className="mt-10 mx-auto w-[85%] grid grid-cols-11 border  ">
            <div className="col-span-6 w-full  border h-[600px] overflow-hidden  flex relative ">
             
              <div className="shadow-left w-[48%] ml-0 mr-[4%] h-[500px] border  relative rounded-3xl flex flex-col pl-6 font-lato bg-white">
                <p className="main-second-color text-3xl mb-9 ">{tag}</p>
                <h2 className="text-color text-xl">LienViet <br></br> PostBank</h2>
                <h2 className="text-2xl font-bold">SGD 788.42</h2>
                <p className="bg-font-color text-sm mb-2">+6.2%</p>
                
                <div className="w-[full] h-[40%] mb-2 "><LeftGraph className="w-full"></LeftGraph></div>
                <p className="text-color text-sm font-bold">Today Volume</p>
                <p className="text-color text-sm font-bold">343,323</p>
              </div>

              <div className="w-[48%] shadow-left shadow-middle   h-[500px] mt-10 border bg-yellow-400 relative rounded-3xl">
              </div>

              <div className="w-[25%] absolute h-[200px] left-[39%]  top-[32%] p-0 m-0">
                <MonthlyView className="w-full m-0"></MonthlyView>

              </div>

            </div>

            <section className="col-span-5 p-10">
              <h1 className="font-inters  mt-7 leading-[3rem] font-medium text-4xl text-main-green">
                Dễ dàng theo giõi các biến động cổ phiếu với{" "}
                <h1 className="font-medium text-4xl text-main-linear">
                  GoStock
                </h1>{" "}
              </h1>

              <p className="font-inters main-second-color font-medium text-sm mt-[45px]  ">
                Theo dõi cổ phiếu mà bạn đang mong muốn với công nghệ real-time
                thật dễ dàng và chuẩn xác
              </p>

              <button className="bg-main-green  rounded-lg w-[35%] h-[61px]  shadow-md  text-center mt-[70px]">
                <a className="text-base font-roboto text-white">
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
                Tìm ra những cổ phiếu phát triển trong tương lai{" "}
              </h1>
              <p className="font-inters main-second-color font-medium text-lg mt-[45px]  ">
                Sử dụng công nghệ AI, chúng tôi sẽ giúp bạn tìm ra những cổ
                phiếu có tiềm năng tăng giá trong thời gian tới
              </p>
              <h1 className="mt-10 font-inters  leading-[2rem] font-medium text-3xl text-main-green">
                Quản lí tài khoản của bạn{" "}
              </h1>
              <p className="font-inters main-second-color font-medium text-lg mt-[45px]  ">
                Mua và bán các cổ phiếu, theo dõi tất cả chỉ trong một ví duy
                nhất sử dụng thuyết Modern Portfolio được giới thiệu bởi chuyên
                gia kinh tế Harry Markowitz
              </p>

              <button className="bg-main-green  rounded-lg w-[35%] h-[61px]  shadow-md  text-center mt-[70px]">
                <a className="text-base font-roboto text-white">
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
                <a className="text-base font-roboto text-white">
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
                Chúng tôi giúp bạn phân tích mọi cổ phiếu về cơ bản và kỹ thuật,
                kèm theo đó thể hiện trực quan với dữ liệu trong quá khứ và các
                cổ phiếu trong cùng nhóm ngành nhằm giúp bạn tự tin hơn trong
                quyết định đầu tư
              </p>

              <button className="bg-main-green  rounded-lg w-[35%] h-[61px]  shadow-md  text-center mt-[70px]">
                <a className="text-base font-roboto text-white">
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
              Tham gia GoStock cùng các nhà đầu tư chuyên nghiệp, Dẫn đầu và
              chiến thắng thị trường cùng GoStock
            </p>

            <button className="bg-main-green  rounded-lg w-[35%] h-[61px]  shadow-md self-center  mt-[70px]">
              <a className="text-base font-roboto text-white">Đăng Ký Ngay</a>
            </button>
          </div>
        </main>

        <footer className=" w-full h-auto  bg-footer-color  flex justify-center p-7">
          <div className="w-[86%] grid grid-cols-11  ">
            <nav className="col-span-7 pl-6 font-roboto text-white flex flex-col w-full text-lg">
              <div className="  h-14 w-full flex  align-center mb-12 ">
                <IconRoundFooter className="h-full "></IconRoundFooter>
                <a
                  href=""
                  className="p-3 font-lato text-3xl text-white drop-shadow-md  "
                >
                  GoStock
                </a>
              </div>

              <p className=" text-white font-bold">CÔNG TY CỔ PHẦN GoStock</p>
              <p className=" text-white">MST: 0109620361</p>
              <p className=" text-white">Số 5 ngõ 316 Lê Trọng Tấn</p>
            </nav>

            <div className="col-span-4 ">
              <nav className="flex flex-wrap  box-border   justify-center font-inter text-base ">
                <a href="#" className="text-white m-5 hover:text-sky-700">
                  Về chúng tôi
                </a>
                <a href="#" className="text-white m-5 hover:text-sky-700">
                  Điều Khoản Sử Dụng
                </a>
                <a href="#" className="text-white m-5 hover:text-sky-700">
                  Gói Hội Viên
                </a>
                <a href="#" className="text-white m-5 hover:text-sky-700">
                  Chính Sách Bảo mật
                </a>
              </nav>

              <nav className=" flex justify-center  flex-col  font-inter text-base ">
                <a
                  href="#"
                  className="text-white m-5 self-center hover:text-sky-700"
                >
                  Liên hệ với chúng tôi
                </a>

                <div className="flex justify-center w-1/3 h-5 self-center  mt-3">
                  <MessFooter className="h-full mr-4"></MessFooter>
                  <GmailFooter className="h-full"></GmailFooter>
                </div>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default LandingPage;
