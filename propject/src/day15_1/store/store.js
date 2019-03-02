import {createStore, combineReducers} from 'redux';
import IndexStore from './index/index.reducer'




let bigStore = combineReducers({IndexStore});



export default createStore(bigStore)


