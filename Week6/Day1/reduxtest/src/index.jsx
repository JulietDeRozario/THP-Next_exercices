import React from 'react';
import ReactDOM from 'react-dom';
import { createStore }from 'redux';
import reducers from './reducers';
import  {Provider} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import { eatPasta, buyRice, eatRice } from './actions';

const store = createStore(reducers);

const App = () => {
  const pasta = useSelector(state => state.pasta );
  const rice = useSelector(state => state.rice);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Pasta: {pasta}kg</h1>
      <button onClick={() => dispatch(eatPasta())}>Eat</button>
      <h1>Rice: {rice}kg</h1>
      <button onClick={() => dispatch(eatRice())}>Eat</button>
      <button onClick= {() => dispatch(buyRice())}>Buy</button>
    </>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


