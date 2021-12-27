import { createStore,combineReducers } from 'redux';
import countReducer from './reducers/count';
import personReducer from './reducers/person';
import { composeWithDevTools } from 'redux-devtools-extension';


const allReducer = combineReducers({
    sum : countReducer,
    persons: personReducer
})

export default createStore(allReducer,composeWithDevTools())

