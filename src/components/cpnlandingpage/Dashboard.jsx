import React from 'react';
import { ReactComponent as Graph } from '../../assets/svg/WelcomeGoStock/graph.svg';
import { ReactComponent as VinHome } from '../../assets/svg/WelcomeGoStock/Icon-Vinhomes.svg';
import { ReactComponent as Apax } from '../../assets/svg/WelcomeGoStock/IconApax.svg';
import { ReactComponent as TechComBank } from '../../assets/svg/WelcomeGoStock/TechComBank.svg';
import { ReactComponent as RoundCircle } from '../../assets/svg/WelcomeGoStock/RoundCircle.svg';
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

  const cophieu = [
    {
      name: 'FPT Corp',
      unit: '77,200',
      price: '+0.39%',
    },
    {
      name: ' Vingroup JSC',
      unit: '71,200',
      price: '+1.86%',
    },
    {
      name: ' Vinhomes',
      unit: '55,400',
      price: ' -0.18%',
    },
    {
      name: ' HGM',
      unit: '40,000',
      price: ' +0.00%',
    },
    {
      name: 'Techcombank',
      unit: '28,000',
      price: ' +0.35%',
    },
    {
      name: 'GTNFoods JSC',
      unit: '19,100',
      price: ' +0.00%',
    },
    {
      name: ' APAX',
      unit: '6,120.0',
      price: ' -6.99%',
    },
  ];
  return (
     <div className=" mx-auto  w-[95%] sm:w-[85%] h-[250px]  sm:h-[900px] bg-cover overflow-hidden  mt-10  relative">
     <div className="absolute w-[78%] border sm:h-[800px] h-[92%] ml-2 sm:ml-12 rounded-2xl flex justify-center items-center mt-2 font-roboto">
       <div className="w-[91%]  h-[91%]  rounded-2xl grid grid-cols-3 font-roboto overflow-hidden">

         {/*sidebar*/}
         <div className="col-span-1 bg-main-picture sm:p-6 p-1 ">
           <div className="flex sm:mb-10 mb-1  ">
             <IconDollar className="sm:mr-2 mr-1 w-[11px] sm:(w-[50px] h-[35px])"></IconDollar>
             <h1 className="sm:text-2xl mt-1 text-xs">Gostock</h1>
           </div>

           <button className="sm:w-[80%] w-[70%] ml-[10%] sm:h-[53px] sm:text-lg sm:mb-16 h-[13px] rounded-sm mb-4  text-[7px]  bg-main-button-picture text-center sm:rounded-lg  text-white">
             Đầu tư ngay
           </button>

           <ul>
             {items.map(({ Icon, name }, index) => (
               <li key={index} className="flex sm:mb-8 mb-2 ml-2 sm:ml-3">
                 <Icon className="sm:w-[25px] sm:mr-4 sm:mt-1 mt-0 sm:h-[15px] h-[6px] w-[6px] mr-2 " />
                 <h2 className={`text-[#BFC3C8] text-[6px] sm:text-base  ${name === "Báo cáo" ? "text-[#00BF71]" : ""}`}>{name}</h2>
                        
               </li>
             ))}
           </ul>
         </div>

         {/*main*/}
         <div className="col-span-2 sm:p-6 sm:mr-[80px] p-2 ">
           <h2 className="font-lato  font-bold sm:text-xl text-[6px] mt-1 font-side-color-2">
             Chào mừng bạn tới với {" "}
             <h2 className="inline bg-font-color font-lato">
               Gostock Platform
             </h2>
           </h2>
           <p className="font-inters sm:text-base text-[5px] mt-1 sm:mt-5 bg-side-color ">
             Chào buổi sáng,{" "}
             <p className="font-inters inline bg-font-color">
               Việt Hưng
             </p>
           </p>

           <p className="sm:mt-10 mt-3 text-[5px] sm:text-lg font-side-color2 font-lato font-bold">
             Tóm tắt Portfolio
           </p>

           <div className="flex w-auto  sm:mt-7 mt-2  ">
             <p className="bg-side-color sm:text-lg  sm:mr-4 text-[5px] mr-1 ">Thời gian</p>

             <select
               name="date"
               id="date"
               className="inline-block sm:text-lg text-[4px] w-[35%] border rounded-lg font-side-color2 text-center font-bold"
             >
               <option value="T10-2020">T10-2020</option>
               <option value="saab">Saab</option>
             </select>
           </div>

           <div className="  sm:mt-7 mt-1 w-[99%] sm:h-auto h-[72px]  overflow-visible sm:overflow-hidden">
             <Graph className="w-[130%] sm:pb-0 pb-[170px]"></Graph>
           </div>

           <div className="w-[84%] sm:h-[70px] h-[15px] sm:mt-4 mt-2 mx-auto sm:rounded-lg rounded-sm shadow-lg sm:border flex justify-evenly flex-nowrap    sm:p-3">
             <VinHome className="sm:w-[13%] w-[11%] h-[88%] sm:h-[85%]"></VinHome>

             <div className="flex flex-col sm:mt-3 mt-[2px]">
               <h5 className="font-lato font-bold sm:text-xs text-[4px]">VinHomes</h5>
               <p className=" bg-side-color text-[2px] sm:text-ssm">Bất động sản</p>
             </div>

             <div className="flex flex-col sm:mt-3  mt-[2px]">
               <h4 className="font-lato font-bold sm:text-xs text-[4px]">
                 VND 50.000.000
               </h4>
               <p className=" bg-side-color sm:text-ssm text-[2px]">
                 Investment Value
               </p>
             </div>

             <h2 className="font-lato font-bold sm:text-xs text-[3px] bg-font-color sm:mt-3  mt-[3px]">
               +10.75%
             </h2>
           </div>

           <div className="w-[84%] sm:h-[70px] h-[15px] sm:mt-4 mt-2 mx-auto sm:rounded-lg rounded-sm shadow-lg sm:border flex justify-evenly flex-nowrap    sm:p-3">
             <Apax className="sm:w-[13%] w-[11%] h-[88%] sm:h-[85%]"></Apax>

             <div className="flex flex-col sm:mt-3 mt-[2px]">
               <h5 className="font-lato font-bold sm:text-xs text-[4px]">Apax</h5>
               <p className=" bg-side-color text-[2px] sm:text-ssm">Teaching Platform</p>
             </div>

             <div className="flex flex-col sm:mt-3  mt-[2px]">
               <h4 className="font-lato font-bold sm:text-xs text-[4px]">
                 VND 50.000.000
               </h4>
               <p className=" bg-side-color sm:text-ssm text-[2px]">
                 Investment Value
               </p>
             </div>

             <h2 className="font-lato font-bold sm:text-xs text-[3px] bg-font-color sm:mt-3  mt-[3px]">
               +4.75%
             </h2>
           </div>

          
         </div>
       </div>
     </div>

     <div className="absolute w-[26%] bg-white sm:h-[450px] h-[120px] sm:right-3 right-0 rounded-md sm:rounded-xl  shadow-lg  pointer-events-none top-[30px] sm:top-[71px] ">
       <div className="flex justify-between p-2 font-side-color-w sm:mb-5 mb-1">
         <h2 className="font-side-color2 font-lato sm:text-base text-[4px]  font-bold">
           Cổ phiếu tiềm năng
         </h2>
         <a href="#" className="sm:text-sm text-[3px] sm:mt-0 mt-[1px]">
           Xem tất cả
         </a>
       </div>

       <table className="table-auto w-[96%] mx-auto  font-lato ">
         <thead className="sm:p-5 p-1">
           <tr className="sm:text-xs text-[3px] sm:h-12 h-3">
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
             <tr key={index} className="sm:h-12 h-[12px] sm:text-xs text-[3px]">
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

     <div className="absolute w-[30%] sm:bottom-6 sm:left-0 bottom-0 right-[307px]  sm:h-[248px] h-[50px] ">
            <TechComBank className="h-full"></TechComBank>
     </div>

     <div className="absolute w-[28%]  sm:bottom-7 sm:right-2 bottom-0 right-0 bg-white shadow-lg sm:h-[244px] h-[65px] rounded sm:rounded-lg">
       <div className="flex justify-between p-2 sm:p-4 font-lato">
         <h2 className="sm:text-base text-[4px] font-side-color-2 font-bold">Phân bố tài khoản</h2>
         <p className="bg-font-color text-[4px] sm:text-sm">Chi tiết</p>
       </div>

       <div className="w-[89%] mt-0 sm:mt-3 h-[65%] sm:h-[60%]  mx-auto">
         <RoundCircle className="w-full pb-[100px] sm:pb-0"></RoundCircle>
            
       </div>
           
     </div>

     
   </div>
  );
};

export default Dashboard;
