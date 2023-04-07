import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { getStockPrice } from "../../../store/reducers/recharts/actions"
import { ResponsiveContainer } from 'recharts'
const MarketChart = (props) => {
    const { getStockPrice } = props
    const [menu, setMenu] = useState('chiso')

    const fetchDataStock = () => {
        getStockPrice('1min','HCM',1679028337,1679328337)
    }

    useEffect(() => {
        fetchDataStock()
    }, [])

    return(
        <div className="p-10 pb-0">
            <div className="font-semibold text-2xl">Thị trường</div>
            <div className="flex my-5">
                <div className="cursor-pointer rounded text-xl py-1 px-4 mr-10" style={{
                    backgroundColor: menu === 'chiso' ? '#00BF71' : 'white',
                    color: menu === 'chiso' ? 'white' : '#00BF71',
                }} onClick={(e)=>{
                    setMenu('chiso')
                    }}>Chỉ số</div>
                <div className="cursor-pointer rounded text-xl py-1 px-4 mr-10 text-main-green" style={{
                    backgroundColor: menu === 'hanghoa' ? '#00BF71' : 'white',
                    color: menu === 'hanghoa' ? 'white' : '#00BF71',
                }} onClick={(e)=>{
                    setMenu('hanghoa')
                    }}>Hàng hóa</div>
                <div className="cursor-pointer rounded text-xl py-1 px-4 text-main-green" style={{
                    backgroundColor: menu === 'crypto' ? '#00BF71' : 'white',
                    color: menu === 'crypto' ? 'white' : '#00BF71',
                }} onClick={(e)=>{
                    setMenu('crypto')
                    }}>Crypto</div>
            </div>
            <div className="flex justify-between">
                <div className="">
                    <ResponsiveContainer>
                        
                    </ResponsiveContainer>
                </div>
                <div className="">table</div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        data: state.marketChart.data,
        isShowMenu: state,
    }
}

export default connect(mapStateToProps, {
    getStockPrice,
})(MarketChart)