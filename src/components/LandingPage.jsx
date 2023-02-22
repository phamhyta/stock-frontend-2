import React from 'react';

import { ReactComponent as SidePicture } from '../assets/svg/SidePicture.svg';
import { Footer } from './layout';
import { Dashboard, Header, Main } from './cpnlandingpage';

function LandingPage() {
  return (
    <React.Fragment>
      <div className="w-full h-screen bg-white  ">
        <Header />
        <div className="relative  left-[80%] ">
          <SidePicture className="absolute  "></SidePicture>
        </div>
        <main className="w-full  h-auto text-color  justify-center items-center bg-white ">
          <section>
            <h1 className="text-center  text-color font-lato text-2xl font-bold pt-4 ">
              Đăng ký ngay để bắt đầu sử dụng miễn<br></br>phí dịch vụ của chúng
              tôi
            </h1>{' '}
          </section>
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
          <Dashboard />
          <Main />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default LandingPage;
