import React from 'react';
import { ReactComponent as Icon } from '../../assets/svg/Icon.svg';
import { ReactComponent as Decorate } from '../../assets/svg/Decorate.svg';
const Header = () => {
  return (
    <div className="text-color font-lato m-0 p-0">
      <div className="max-w-full w-full h-56  bg-white text-color font-lato relative">
        <Decorate className="absolute" />
        <div className="flex flex-nowrap max-w-full  justify-between items-center border-yellow-300    ">
          <div className="flex  flex-nowrap ml-6 my-8  ">
            <div className="   mr-2  h-9  overflow-hidden">
              <Icon className="h-full"></Icon>
            </div>
            <a href="/" className="text-color text-3xl font-bold">
              GoStock
            </a>
          </div>
          <ul className="flex    ">
            <li>
              <a className="menu-item" style={{ color: '#20D088' }} href="/">
                Trang Chủ
              </a>
            </li>
            <li>
              <a className="menu-item" href="/">
                Tin Tức
              </a>
            </li>
            <li>
              <a className="menu-item" href="/">
                Tài Nguyên
              </a>
            </li>
            <li>
              <a className="menu-item" href="/">
                Về Chúng Tôi
              </a>
            </li>
            <li>
              <a className="menu-item" href="/">
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
    </div>
  );
};

export default Header;
