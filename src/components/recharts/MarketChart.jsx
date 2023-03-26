import React, { useState, useEffect } from "react"

const MarketChart = () => {
    const [menu, setMenu] = useState('chiso')

    useEffect(() => {
        console.log(menu);
    })
    return(
        <div className="p-10 pb-0">
            <div className="font-semibold text-2xl">Thị trường</div>
            <div className="flex my-5">
                <div className="cursor-pointer rounded text-xl py-1 px-4 mr-10 bg-main-green text-white" onClick={(e)=>{
                    setMenu('chiso')
                    }}>Chỉ số</div>
                <div className="cursor-pointer rounded text-xl py-1 px-4 mr-10 text-main-green" onClick={(e)=>{
                    setMenu('hanghoa')
                    }}>Hàng hóa</div>
                <div className="cursor-pointer rounded text-xl py-1
                px-4 text-main-green" onClick={(e)=>{
                    setMenu('crypto')
                    }}>Crypto</div>
            </div>
            <div className="flex justify-between">
                <div className="">chart</div>
                <div className="">table</div>
            </div>
        </div>
    )
}

export default MarketChart