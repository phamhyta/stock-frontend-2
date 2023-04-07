import { combineReducers } from "redux"

import marketChartReducer from "./reducers/recharts/marketChartReducer"

export default combineReducers({
    marketChart: marketChartReducer,
})