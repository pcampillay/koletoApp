export const userStates = {
    data: {
        nombre : "",
        email : "",
        uid: ""
    }
  }
  
  export const userReducer = (state, action) => {
    switch (action.type) {
      case "RESET_USER":
        return {
          ...state,
          data: {
            name : "",
            email : "",
            uid: ""
          }
        };
      case "SET_USER_VALUE":
        return {
          ...state,
          data: action.data
        };
      default:
        // throw new Error("Unexpected action");
        return state
    }
  };