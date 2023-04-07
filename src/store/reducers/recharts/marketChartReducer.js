import { callApiget } from "../../../common/fetch";

const initState = {
    data: [1,2,3,4,5],
    isShowMenu: false,
}

// const server_url = process.env.SERVER_URL
const server_url = `http://159.223.39.25:9998`

const marketChartReducer = (state = initState, action) => {

    switch (action.type) {
        case 'TEST':
            console.log("Hello");
            return state
        case 'FETCH-STOCK-PRICE':
            let url = server_url + `/data/get_stock_price_data_stock_price_history_get`

            const params = new URLSearchParams()

            params.append('timeframe', '1min')
            params.append('ticket', 'HCM')
            params.append('start_timestamp', 1679028337)
            params.append('end_timestamp', 1679328337)

            const headers = {
                'Content-Type': 'application/json'
            }

            callApiget(url, params, headers)
                .then(res => {
                    console.log(res);
                    return res
                })

            return state
        default:
            break;
    }

    return state
}

export default marketChartReducer