import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
  Home,
  Login,
  Register,
  ForgotPassword,
  AuthLoading,
} from "./screens";

const Router = createStackNavigator(
    {
      Home,
      Login,
      Register,
      ForgotPassword,
      AuthLoading
    },
    {
      initialRouteName: "AuthLoading",
      headerMode: "none"
    }
  );
  
  export default createAppContainer(Router);