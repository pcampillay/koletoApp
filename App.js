import React from "react";
import { Provider } from "react-native-paper";
import App from "./src";
import { theme } from "./src/core/theme";
import { StoreProvider } from "./src/context/store/storeContext";


// const Main = () => (
//   <Provider theme={theme}>
//     <App />
//   </Provider>
// );
const Main = () => (
    //ReactDOM.render(
    <StoreProvider theme={theme}>
      <App />
    </StoreProvider>
    // document.getElementById("root")
  //)
);

export default Main;
