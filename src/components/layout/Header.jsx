import React from 'react';
import { ReactComponent as Logo } from '../../assets/svg/Logo.svg';
import { BsPersonCircle } from 'react-icons/bs';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  
  return (
    <div className="flex p-6 border-b-2 text-color">
      <div className="w-1/3 xl:w-1/6 flex justify-center">
        <div className="">
          <Logo />
        </div>
        <div className="font-bold text-3xl my-auto ml-4">GoStock</div>
      </div>
      <div className="w-5/12 my-auto justify-between px-10 font-bold text-xl hidden xl:flex">
        <div className="menu-hover border-b-2 border-white hover:border-b-2 text-center inline-flex items-center">
          Gợi ý
        </div>
        <div>
          <div className="menu-hover border-b-2 border-white hover:border-b-2 text-center inline-flex items-center">
            Phân tích
          </div>
        </div>
        <div className="border-b-2 border-white hover:border-b-2 text-center inline-flex items-center">
          <div className="dropdown menu-hover">
            <div className="" onClick={handleOpen}>
              Biểu đồ kỹ thuật
            </div>
            {open ? (
              <ul
                className="text-sm shadow-lg rounded-md z-10 absolute p-3 bg-white mt-4"
                aria-labelledby="dropdownDelayButton"
              >
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 menu-hover text-gray-500"
                  >
                    Biểu đồ thông số
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 menu-hover text-gray-500"
                  >
                    Biểu đồ bảng
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 menu-hover text-gray-500"
                  >
                    Biểu đồ phân tích
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 menu-hover text-gray-500"
                  >
                    Biểu đồ kỹ thuật
                  </a>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
        <div className="menu-hover border-b-2 border-white hover:border-b-2 text-center inline-flex items-center">
          Công cụ
        </div>
      </div>
      <div className="xl:w-1/4 sm:w-1/2 md:ml-8 xl:ml-0 flex justify-end my-auto hidden sm:block">
        <div className="w-11/12">
          <form className="max-w-sm px-4">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Tìm Kiếm"
                className="w-full h-9 py-3 pl-12 pr-4 text-gray-500 focus:border rounded-md outline-none border focus:border-green-500 focus:bg-white"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/6 m-auto flex justify-center">
        <BsPersonCircle className="w-9 h-9" fill="#221c32" />
      </div>
    </div>
  );
};

export default Header;
