import { createStore } from 'redux'

let initStore = {
    logList: [],
    count: 1
}


function reducer(state = initStore, action) {
    switch(action.type) {
        case 'LOG_LIST':
            return {
                ...state,
                logList: action.data
            }
        case 'ADD':
            return {
                ...state,
                count: ++state.count
            };
        case 'DEL':
            return {
                ...state,
                count: --state.count
            }
        default:
            return state
    }
}

export default createStore(reducer)