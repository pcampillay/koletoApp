import React, { memo, useContext } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { logoutUser } from "../api/auth-api";
import { StoreContext } from "../context/store/storeContext";
import {Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';


const Dashboard = () => {
  const { state, actions} = useContext(StoreContext);
  // console.log(state);
  // console.log(state.userStates.data.nombre);
  const valueRandom = () => {
    return Math.round(Math.random() * (1000 - 1) + 1);
  };
  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favourite code editor and start
        editing this project.
      </Paragraph>
      <Button mode="outlined" onPress={() => logoutUser()}>
        Logout
      </Button>

      <p>{state.userStates.data.nombre}</p>

      <p>{state.generalStates.count}</p>
        <Button onClick={() => { actions.generalActions.increment(); }}>
          INCREMENT
        </Button>
        <Button onClick={() => { actions.generalActions.decrement(); }}>
          DECREMENT
        </Button>
        <Button onClick={() => { actions.generalActions.reset(); }}>
          RESET
        </Button>
        <Button onClick={() => { actions.generalActions.setValue(valueRandom()); }}>
          VALUE RANDOM
        </Button>
    </Background>
  );
};

export default memo(Dashboard);