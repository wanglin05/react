import { createStore } from 'redux'

let initStore = {
    logList: []
}


function reducer(state = initStore, action) {
    switch(action.type) {
        case 'LOG_LIST':
            return {
                ...state,
                logList: action.data
            }
        default:
            return state
    }
}

export default createStore(reducer)