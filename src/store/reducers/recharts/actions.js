import { callApiget } from "../../../common/fetch"

const server_url = `http://159.223.39.25:9998`

export const getStockPrice = (timeframe, ticker, start_timestamp, end_timestamp) => {
  return dispatch => {
    let url = server_url + `/data/stock_price_history`

    const params = new URLSearchParams()
  
    params.append('timeframe', timeframe)
    params.append('ticker', ticker)
    params.append('start_timestamp', start_timestamp)//1679028337
    params.append('end_timestamp', end_timestamp)//1679328337
  
    const headers = {
      'Content-Type': 'multipart/form-data',
      accept: 'application/json',
    }
    const req = callApiget(url, params, headers).then(res => {
      return res
    })
    
    const promise = new Promise((resolve, reject) => {
      req
      .then(res => {
        resolve(res)
        return dispatch({
          type: 'FETCH-STOCK-PRICE',
          payload: JSON.parse(res.data.data)
        })
      })
      .catch((res)=>{
        reject(res)
        console.log("ERROR");
      })
    })
  
    return promise
  }
}