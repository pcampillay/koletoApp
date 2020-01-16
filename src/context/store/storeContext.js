import { initialState, reducer } from "../reducers/reducer";
import { useActions} from "../actions";
import React, { createContext, useReducer, useEffect } from "react";

const StoreContext = createContext(initialState);

const StoreProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  // useEffect(() => console.log({ newState: state },{ newState2: userState } ), [state, userState]);
  
  const value = {
    state, 
    dispatch, 
    actions
  }


  return (
    <StoreContext.Provider value={value }>
      {children}
    </StoreContext.Provider>
  );

};

export { StoreContext, StoreProvider };
