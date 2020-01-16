import React, { memo , useContext } from "react";
import { ActivityIndicator } from "react-native";
import Background from "../components/Background";
import { theme } from "../core/theme";
import Firebase, { db } from "../core/config"
import { StoreContext } from "../context/store/storeContext";
import { getUser } from "../api/auth-api";

let ciclo = 0;

const AuthLoading = ({ navigation }) => {
  const { state, actions } = useContext(StoreContext);

  Firebase.auth().onAuthStateChanged(async user => {
    console.log("uesr desde Auth => ",user);
    if (user) {
      if(ciclo == 0){
        await getUser(user.uid,state, actions );
        ciclo = 1;
      }
      
      // User is logged in
      navigation.navigate("Home");
    } else {
      // User is not logged in
      navigation.navigate("Login");
    }
  });

  return (
    <Background>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Background>
  );
};

export default memo(AuthLoading);
