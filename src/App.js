import React from 'react';
import './App.css';
import {reducer, actionCreators} from './counter';

import {useReduxProvider, useReduxConsumer} from './redux';

const initialState = {count: 0};

function App () {
  const ReduxProvider = useReduxProvider(reducer, actionCreators, initialState);
  return (
    <ReduxProvider>
      <div className="App">
        <header className="App-header">
          <Count />
          <div>
            <Increment />
            <Decrement />
          </div>
        </header>
      </div>
    </ReduxProvider>
  );
}

const Count = () => {
  const {state} = useReduxConsumer();
  return (
    <p>count is {state.count}</p>
  );
};

const Increment = () => {
  const {actionCreators} = useReduxConsumer();
  return (
    <button className="counter-button" onClick={() => actionCreators.increment()}>
      ++
    </button>
  );
}

const Decrement = () => {
  const {actionCreators} = useReduxConsumer();
  return (
    <button className="counter-button" onClick={() => actionCreators.decrement()}>
      --
    </button>
  );
}

export default App;
