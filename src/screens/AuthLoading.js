import React, { memo } from "react";
import { ActivityIndicator } from "react-native";
import Background from "../components/Background";
import { theme } from "../core/theme";
import Firebase, { db } from "../core/config"

const AuthLoading = ({ navigation }) => {
  Firebase.auth().onAuthStateChanged(user => {
    if (user) {
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
