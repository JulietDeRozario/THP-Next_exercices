import pastaReducer from './pasta';
import riceReducer from './rice';
import {combineReducers} from 'redux';

const reducers = combineReducers({
  pasta: pastaReducer,
  rice: riceReducer
})

export default reducers;