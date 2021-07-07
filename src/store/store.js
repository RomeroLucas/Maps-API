import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

//import de reducers
import dadosDaEntrega from './reducers/dadosDaEntrega'

const store = createStore(combineReducers({
    dadosDaEntrega,
}), composeWithDevTools())

export default store