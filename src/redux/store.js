import { createStore } from 'redux';
import countReducer from './count_reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(countReducer,composeWithDevTools())

