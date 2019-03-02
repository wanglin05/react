import { createStore } from 'redux'


let initStore = {
    count: 1
}


function reducer(state = initStore, action) {
    switch(action.type) {
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

let Store = createStore(reducer)



export default Store