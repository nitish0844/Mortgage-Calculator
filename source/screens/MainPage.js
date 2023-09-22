import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SliderData from "../components/SliderData";

const MainPage = () => {
  return (
    <ScrollView>
      <Header />
      <SliderData />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  TextContainer: {
    top: "7%",
  },
  TitleText: {
    color: "#20253C",
    textAlign: "center",
    fontSize: 20,
  },
});

export default MainPage;
