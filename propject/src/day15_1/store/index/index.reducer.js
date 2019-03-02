const initStore = {
    listData: [],
    allPrice: 0,
    allCont: 0,
    allChecked: false
}

const IndexStore = (state = initStore, action) => {
    switch(action.type) {
        case 'ALL_DATA':
            return {
                ...state,
                listData: [...action.data]
            }
        case 'ALL_PRICE':
            return {
                ...state,
                allPrice: action.data
            }
        case 'ALL_CONT':
            return {
                ...state,
                allCont: action.data
            }
        case 'ALL_CHECKED':
            return {
                ...state,
                allChecked: action.data
            }
        default:
            return state
    }
}



export default IndexStore




