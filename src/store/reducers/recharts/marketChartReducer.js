const initState = {
    data: {},
    isShowMenu: false,
}

const marketChartReducer = (state = initState, action) => {

    switch (action.type) {
        case 'TEST':
            console.log("Hello");
            return state
        case 'FETCH-STOCK-PRICE':       
            return {state, data: action.payload}
        default:
            break;
    }

    return state
}

export default marketChartReducer