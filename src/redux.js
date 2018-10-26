import React, { useReducer, useContext } from 'react';

const ReduxContext = React.createContext();

export const useReduxProvider = (reducer, actionCreators, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const boundActionCreators = Object.keys(actionCreators).reduce((acc, actionCreator) => ({
    ...acc,
    [actionCreator]: (...args) => {
      dispatch(actionCreators[actionCreator](...args));
    },
  }), {});

  const ReduxProvider = props => (
    <ReduxContext.Provider value={{
      state,
      actionCreators: boundActionCreators
    }}>
      {props.children}
    </ReduxContext.Provider>
  );
  return ReduxProvider;
}

export const useReduxConsumer = () => {
  const {state, actionCreators} = useContext(ReduxContext);
  return {
    state,
    actionCreators,
  }
}

