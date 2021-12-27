import { createStore } from 'redux';
import countReducer from './reducers/count_reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(countReducer,composeWithDevTools())

