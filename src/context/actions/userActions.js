export const userActions = (props) => {
    return {
      resetUser: () => {
        props.dispatch({ type: "RESET_USER" });
      },
      setUserValue: (data) => {
        // props.dispatch({ type: "SET_VALUE", data });
        externSetUserValue(props,data);
      }
    }
  }
  
  function externSetUserValue(props,data) {
    props.dispatch({ type: "SET_USER_VALUE", data});
  }