import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Slider } from "@miblanchard/react-native-slider";
import {
  useFonts,
  Inter_500Medium,
  Inter_700Bold,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

const { width, height } = Dimensions.get("window");

const isSmallDevice = width < 375;

const SliderData = () => {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [repaymentTime, setRepaymentTime] = useState(1);
  const [interestRate, setInterestRate] = useState(1);

  const [loanAmount, setLoanAmount] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_700Bold,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const calculateLoan = () => {
    // Calculate loan amount in INR
    const calculatedLoanAmount = purchasePrice - downPayment;

    // Calculate monthly payment (EMI) in INR
    const monthlyInterestRate = interestRate / 12 / 100;
    const numberOfMonths = repaymentTime * 12;
    const emi =
      (calculatedLoanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
      (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

    // Update state with calculated values
    setLoanAmount(calculatedLoanAmount);
    setMonthlyPayment(emi.toFixed(2));
  };

  const labelStyle = {
    fontSize: isSmallDevice ? 14 : 16,
    marginTop: isSmallDevice ? 5 : 10,
    color: "#727272",
  };

  const labelTextStyle = {
    color: "#000",
    fontFamily: "Inter_500Medium",
    textAlign: "right",
  };

  const TintStyle = {
    height: isSmallDevice ? 15 : 20,
    width: isSmallDevice ? 15 : 20,
  };

  const minimumTrackStyle = {
    height: isSmallDevice ? 5 : 7,
    backgroundColor: "#00B2FF",
  };

  const maximumTrackStyle = {
    height: isSmallDevice ? 5 : 7,
    backgroundColor: "#C4C4C4",
  };

  return (
    <View style={{ ...styles.container }}>
      <View style={styles.sliderContainer}>
        <Text style={{ ...labelStyle }}>
          Purchase Price:{" "}
          <Text style={{ ...labelTextStyle }}>${purchasePrice}</Text>
        </Text>
        <Slider
          thumbTintColor={"#000"}
          thumbStyle={TintStyle}
          minimumTrackStyle={minimumTrackStyle}
          maximumTrackStyle={maximumTrackStyle}
          minimumValue={0}
          maximumValue={200000}
          step={1000}
          value={purchasePrice}
          onValueChange={(value) => setPurchasePrice(value)}
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text style={{ ...labelStyle }}>
          Down Payment:{" "}
          <Text style={{ ...labelTextStyle }}>${downPayment}</Text>
        </Text>
        <Slider
          thumbTintColor={"#000"}
          minimumTrackStyle={minimumTrackStyle}
          maximumTrackStyle={maximumTrackStyle}
          minimumValue={0}
          thumbStyle={TintStyle}
          maximumValue={50000}
          step={1000}
          value={downPayment}
          onValueChange={(value) => setDownPayment(value)}
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text style={{ ...labelStyle }}>
          Repayment Time:{" "}
          <Text style={{ ...labelTextStyle }}>{repaymentTime} years</Text>
        </Text>
        <Slider
          thumbTintColor={"#000"}
          thumbStyle={TintStyle}
          minimumTrackStyle={minimumTrackStyle}
          maximumTrackStyle={maximumTrackStyle}
          minimumValue={1}
          maximumValue={30}
          step={1}
          value={repaymentTime}
          onValueChange={(value) => setRepaymentTime(value)}
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text style={{ ...labelStyle }}>
          Interest Rate:{" "}
          <Text style={{ ...labelTextStyle }}>{interestRate}%</Text>
        </Text>
        <Slider
          thumbTintColor={"#000"}
          thumbStyle={TintStyle}
          minimumTrackStyle={minimumTrackStyle}
          maximumTrackStyle={maximumTrackStyle}
          minimumValue={1}
          maximumValue={10}
          step={1}
          value={interestRate}
          onValueChange={(value) => setInterestRate(value)}
        />
      </View>

      <View style={styles.resultContainer}>
        <View style={styles.resultColumn}>
          <Text style={{ ...styles.result }}>Loan Amount:</Text>
          <Text style={{ ...styles.result, color: "#FF0000" }}>
            ${loanAmount}
          </Text>
        </View>
        <View style={styles.resultColumn}>
          <Text style={{ ...styles.result }}>Monthly Payment:</Text>
          <Text style={{ ...styles.result, color: "#FF0000" }}>
            ${monthlyPayment}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={calculateLoan}
        style={{ ...styles.calculateButton }}
      >
        <Text style={styles.calculateButtonText}>Get mortgage quote</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    top: "3%",
    paddingBottom: isSmallDevice ? 45 : 50,
  },
  sliderContainer: {
    marginBottom: 5,
  },
  result: {
    // fontSize: 18,
    fontWeight: "bold",
    fontSize: isSmallDevice ? 14 : 18,
    marginTop: isSmallDevice ? 10 : 5,
    textAlign: "center",
  },
  resultContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // To place Loan Amount and Monthly Payment at opposite ends
  },
  resultColumn: {
    alignItems: "center", // To align text to the left within each column
  },
  calculateButton: {
    backgroundColor: "#00B2FF",
    borderRadius: 5,
    marginTop: isSmallDevice ? 10 : 20,
    paddingVertical: isSmallDevice ? 8 : 12,
  },
  calculateButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: isSmallDevice ? 14 : 17,
    fontFamily: "Inter_700Bold",
  },
});

export default SliderData;
