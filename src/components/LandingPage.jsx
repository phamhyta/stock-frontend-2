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
// import Board from "../assets/img/Board.jpg";

function LandingPage() {
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
              <SidePicture className="absolute  ">
             </SidePicture>
         </div>

         

       
        {/* //height */}
        <main className="w-full  h-auto text-color  justify-center items-center bg-white ">
          <section>
            <h1 className="text-center  text-color font-lato text-2xl font-bold pt-4 ">
              Đăng ký ngay để bắt đầu sử dụng miễn<br></br>phí dịch vụ của chúng
              tôi
            </h1>{" "}
          </section>

          <form className="flex flex-nowrap mx-auto justify-center mt-6 w-2/5 border-red-400">
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

          <div className=" mx-auto  w-3/4  h-[700px] bg-cover overflow-hidden mt-10 border ">
            {/* <Multiple_Board1 className="w-full left-0 top-0   "></Multiple_Board1> */}
          </div>



          <div className="relative  right-[20%] top-[64px]  ">
              <SidePicture2 className="absolute  ">
             </SidePicture2>
         </div>


          <div className="mt-10 mx-auto w-3/4 grid grid-cols-2 border ">
            <div className="grid-cols-1 w-full  border h-[600px] overflow-hidden ">
              {/* <Left_chart className="w-full border"></Left_chart> */}
            </div>

              

          
            <section className="grid-cols-1 p-10">
              <h1 className="font-inters  leading-[3rem] font-medium text-4xl text-main-green">
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
              <SidePictureRound className="absolute  ">
             </SidePictureRound>
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

          <div className="mt-2 w-full overflow-hidden h-[220px] relative ">
            <Vectors className="w-full absolute"></Vectors>
          </div>

          <div className="mt-10 mx-auto w-3/4 grid grid-cols-11 border ">
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

        <footer className=" w-full h-auto  bg-footer-color  flex justify-center p-16">
         
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

              <p className=" text-white font-bold">
                CÔNG TY CỔ PHẦN GoStock
              </p>
              <p className=" text-white">MST: 0109620361</p>
              <p className=" text-white">Số 5 ngõ 316 Lê Trọng Tấn</p>
            </nav>


            <div className="col-span-4 ">
              <nav className="flex flex-wrap  box-border   justify-center font-inter text-base ">
                <a href="#"  className="text-white m-5 hover:text-sky-700">Về chúng tôi</a>
                <a href="#"  className="text-white m-5 hover:text-sky-700">Điều Khoản Sử Dụng</a>
                <a href="#"  className="text-white m-5 hover:text-sky-700">Gói Hội Viên</a>
                <a href="#"  className="text-white m-5 hover:text-sky-700">Chính Sách Bảo mật</a>
              </nav>

              <nav className=" flex justify-center  flex-col  font-inter text-base ">
                <a href="#" className="text-white m-5 self-center hover:text-sky-700">
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
