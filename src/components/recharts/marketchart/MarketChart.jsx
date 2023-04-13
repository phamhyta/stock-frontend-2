import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { getStockPrice } from "../../../store/reducers/recharts/actions"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const MarketChart = (props) => {
	const { getStockPrice, data } = props
	const [menu, setMenu] = useState('chiso')
	const [dataChart, setDataChart] = useState([
		{
			name: 'Page A',
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: 'Page B',
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: 'Page C',
			uv: 2000,
			pv: 9800,
			amt: 2290,
		},
		{
			name: 'Page D',
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: 'Page E',
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: 'Page F',
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: 'Page G',
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
	])
	
	const fetchDataStock = () => {
		getStockPrice('1min','HCM',1679028337,1679328337)
	}

	useEffect(() => {
		fetchDataStock()
	}, [])

	useEffect(() => {
		console.log(data);
	}, [data])

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
			<div className="flex justify-between mt-10">
				<div className="w-3/4 h-[423px] border-[1px] border-solid border-theme-border-chart py-5 px-7 rounded-lg shadow-xl">
					<div className="">Bang dieu khien</div>
					<ResponsiveContainer width="100%" height="100%">
						<AreaChart
						width={500}
						height={400}
						data={dataChart}
						margin={{
							top: 10,
							right: 30,
							left: 0,
							bottom: 0,
						}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis orientation="right" padding={{top:60, bottom: 60}}/>
							<Tooltip />
							<Area dataKey="uv" stroke="#8884d8" fill="#8884d8" />
						</AreaChart>
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