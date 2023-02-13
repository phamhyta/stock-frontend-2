import React from 'react';
import { ReactComponent as SidePicture2 } from '../../assets/svg/SidePicture2.svg';
import { ReactComponent as SidePictureRound } from '../../assets/svg/SidePictureRound.svg';
import { ReactComponent as Vectors } from '../../assets/svg/vector.svg';

const Main = () => {
  return (
    <div>
      <div className="relative  right-[20%] top-[64px]  ">
        <SidePicture2 className="absolute  "> </SidePicture2>
      </div>
      <div className="mt-10 mx-auto w-3/4 grid grid-cols-2 border ">
        <div className="grid-cols-1 w-full  border h-[600px] overflow-hidden ">
          {/* <Left_chart className="w-full border"></Left_chart> */}
        </div>
        <section className="grid-cols-1 p-10">
          <div className="font-inters  leading-[3rem] font-medium text-4xl text-main-green">
            Dễ dàng theo giõi các biến động cổ phiếu với{' '}
            <div className="font-medium text-4xl text-main-linear">GoStock</div>{' '}
          </div>
          <div className="font-inters main-second-color font-medium text-sm mt-[45px]  ">
            Theo dõi cổ phiếu mà bạn đang mong muốn với công nghệ real-time thật
            dễ dàng và chuẩn xác
          </div>
          <button className="bg-main-green  rounded-lg w-[35%] h-[61px]  shadow-md  text-center mt-[70px]">
            <a href="/" className="text-base font-roboto text-white">
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
          <div className="font-inters  leading-[2rem] font-medium text-3xl text-main-green">
            Tìm ra những cổ phiếu phát triển trong tương lai{' '}
          </div>
          <div className="font-inters main-second-color font-medium text-lg mt-[45px]  ">
            Sử dụng công nghệ AI, chúng tôi sẽ giúp bạn tìm ra những cổ phiếu có
            tiềm năng tăng giá trong thời gian tới
          </div>
          <div className="mt-10 font-inters  leading-[2rem] font-medium text-3xl text-main-green">
            Quản lí tài khoản của bạn{' '}
          </div>
          <div className="font-inters main-second-color font-medium text-lg mt-[45px]  ">
            Mua và bán các cổ phiếu, theo dõi tất cả chỉ trong một ví duy nhất
            sử dụng thuyết Modern Portfolio được giới thiệu bởi chuyên gia kinh
            tế Harry Markowitz
          </div>
          <button className="bg-main-green  rounded-lg w-[35%] h-[61px]  shadow-md  text-center mt-[70px]">
            <a href="/" className="text-base font-roboto text-white">
              Tìm hiểu thêm
            </a>
          </button>
        </section>
        <div className="grid-cols-1 "></div>
      </div>
      <div className="mt-2 w-full overflow-hidden h-[220px] relative ">
        <Vectors className="w-full absolute "></Vectors>
      </div>
      <div className="mt-10 mx-auto w-3/4 grid grid-cols-11 border ">
        <div className="col-span-6"></div>
        <section className="col-span-5 p-10">
          <div className="mt-10 font-inters  leading-[2rem] font-medium text-3xl text-main-green">
            Phát hiện dòng tiền thông minh tới từng nhóm ngành và cổ phiếu
          </div>
          <div className="font-inters main-second-color font-medium text-lg mt-[45px]  ">
            Sử dụng biểu đồ RRG của chúng tôi để phát hiện dòng tiền thông minh
            tới từng nhóm ngành và cổ phiếu
          </div>
          <button className="bg-main-green  rounded-lg w-[35%] h-[61px]  shadow-md  text-center mt-[70px]">
            <a href="/" className="text-base font-roboto text-white">
              Tìm hiểu thêm
            </a>
          </button>
        </section>
      </div>
      <div className="mt-10 mx-auto w-3/4 grid grid-cols-2 border ">
        <section className="grid-cols-1 p-10">
          <div className="mt-10 font-inters  leading-[2rem] font-medium text-3xl text-main-green">
            Phân tích mọi cổ phiếu chỉ trong 3 phút
          </div>
          <div className="font-inters main-second-color font-medium text-lg mt-[45px]  ">
            Chúng tôi giúp bạn phân tích mọi cổ phiếu về cơ bản và kỹ thuật, kèm
            theo đó thể hiện trực quan với dữ liệu trong quá khứ và các cổ phiếu
            trong cùng nhóm ngành nhằm giúp bạn tự tin hơn trong quyết định đầu
            tư
          </div>
          <button className="bg-main-green  rounded-lg w-[35%] h-[61px]  shadow-md  text-center mt-[70px]">
            <a href="/" className="text-base font-roboto text-white">
              Tìm hiểu thêm
            </a>
          </button>
        </section>
        <div className="grid-cols-1"></div>
      </div>
      <div className="mt-10 mx-auto w-[55%]   align-center border flex flex-col justify-center mb-[200px]   ">
        <div className="mt-10 font-inters  leading-[2rem] font-medium text-4xl text-main-green text-center">
          Trải Nghiệm Hoàn Toàn Miễn Phí
        </div>
        <div className="font-inters main-second-color font-medium text-lg mt-[45px] text-center  ">
          Tham gia GoStock cùng các nhà đầu tư chuyên nghiệp, Dẫn đầu và chiến
          thắng thị trường cùng GoStock
        </div>
        <button className="bg-main-green  rounded-lg w-[35%] h-[61px]  shadow-md self-center  mt-[70px]">
          <a href="/" className="text-base font-roboto text-white">
            Đăng Ký Ngay
          </a>
        </button>
      </div>
    </div>
  );
};

export default Main;
