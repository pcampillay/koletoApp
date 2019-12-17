import React from "react";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
// import { Provider } from "react-native-paper";
import App from "./src";
import { theme } from "./src/core/theme";

import reducer from "./src/reducers"
const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

// const Main = () => (
//   <Provider theme={theme}>
//     <App />
//   </Provider>
// );

// export default Main;

export default class Main extends React.Component {
  render() {
      return (
          <Provider store={store}>
              <App />
          </Provider>
      )
  }
}