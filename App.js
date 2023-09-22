import { View, Text } from "react-native";
import React from "react";
import MainPage from "./source/screens/MainPage";

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <MainPage />
    </View>
  );
};

export default App;
