import React from 'react';
import { ReactComponent as Mess } from '../../assets/svg/Mess.svg';
import { ReactComponent as Mail } from '../../assets/svg/Mail.svg';
import { ReactComponent as Logo } from '../../assets/svg/Logo2.svg';
const Footer = () => {
  return (
    <div className="bg-cl-green sm:flex justify-between px-4 py-4 md:px-20 md:py-4 xl:px-48 xl:py-8">
      <div className="text-white font-medium mb-8 md:mb-0">
        <div className="flex">
          <div>
            <Logo />
          </div>
          <div className="my-auto ml-4 font-medium text-3xl">GoStock</div>
        </div>
        <div className="mt-8">CÔNG TY CỔ PHẦN GoStock</div>
        <div>MST: 0109620361</div>
        <div>Số 5 ngõ 316 Lê Trọng Tấn</div>
      </div>
      <div className="text-xl font-normal text-white">
        <div className="flex">
          <div className="">
            <div>Về chúng tôi</div>
            <div className="mt-4">Gói Hội Viên</div>
          </div>
          <div className="ml-8">
            <div>Điều Khoản Sử Dụng</div>
            <div className="mt-4">Chính Sách Bảo mật</div>
          </div>
        </div>

        <div className="my-4 text-center">Liên hệ với chúng tôi</div>
        <div className="flex justify-center">
          <div className="mr-2">
            <Mess />
          </div>
          <div className="ml-2">
            <Mail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
