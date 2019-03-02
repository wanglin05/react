

let createStore = require('redux').createStore

let initState = {
    name:'tom',
    age:18
}


function reducer(state = initState, action) {
    console.log(state, '---')
    switch(action.type) {
        case 'NAME' :
            return {
                ...state,
                name: action.data
            };
        case 'AGE':
            return {
                ...state,
                age:action.data
            };
        default:
            return state
    }

}

let newStore = createStore(reducer);


newStore.dispatch({
    type: 'NAME',
    data: 'zl'
})

newStore.dispatch({
    type: 'AGE',
    data: '23'
})

console.log(newStore.getState(), 'store')