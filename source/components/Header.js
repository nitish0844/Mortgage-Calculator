import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Inter_500Medium,
  Inter_700Bold,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

const { width, height } = Dimensions.get("window");

const isSmallDevice = width < 375; // Define your breakpoint for small screens

const Header = () => {
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_700Bold,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const HouseImage =
    "https://firebasestorage.googleapis.com/v0/b/platform2learn-54f87.appspot.com/o/house.png?alt=media&token=4f827826-1e00-4088-931e-2d8506ac29b5";

  const containerStyle = {
    flex: 1,
    justifyContent: isSmallDevice ? "center" : "flex-start", // Center content on small screens
  };

  const imageContainerStyle = {
    alignItems: "center",
    marginTop: isSmallDevice ? "-7%" : "10%", // Adjust margin based on screen size
  };

  const titleTextStyle = {
    color: "#000",
    textAlign: "center",
    fontSize: isSmallDevice ? 18 : 22, // Adjust font size based on screen size
    fontFamily: "Inter_600SemiBold",
  };

  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <LinearGradient
        colors={["rgba(169,211,254,100)", "transparent"]}
        style={styles.background}
      >
        <View style={{ ...styles.ImageContainer, ...imageContainerStyle }}>
          <Image source={{ uri: HouseImage }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={{ ...styles.TitleText, ...titleTextStyle }}>
            Mortgage calculator
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  TitleText: {
    color: "#000",
    textAlign: "center",
    fontSize: 22,
    fontFamily: "Inter_600SemiBold",
  },
  ImageContainer: {
    alignItems: "center",
    top: "25%",
  },
  textContainer: {
    top: "10%",
  },
  image: {
    width: isSmallDevice ? 350 : 450,
    height: isSmallDevice ? 240 : 280,
  },
});

export default Header;
