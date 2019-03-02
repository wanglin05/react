import { createStore, combineReducers } from 'redux'

const initIndexStore = {
    name: 'index'
}

const initListStore = {
    name: 'list'
}


function IndexReducer(state = initIndexStore, action) {
    console.log('index', action)
    switch(action.type){
        case 'NEW-NAME' :
            return {
                ...state,
                name: 'zs'
            }
        default:
            return state
    }
}

function ListReducer(state = initListStore, action) {
    console.log('list', action)
    switch (action.type) {
        default:
            return state
    }
}


let bigStore = combineReducers({
    IndexReducer,
    ListReducer
})


let Store = createStore(bigStore)

export default Store