import { initialState } from "../states/initialStates";
import { generalReducer } from './generalReducer';
import { userReducer } from './userReducer';

const reducer = (state = initialState, action) => {
  return {
    generalStates: generalReducer(state.generalStates,action),
    userStates: userReducer(state.userStates,action)
  }
};

export { initialState, reducer };
