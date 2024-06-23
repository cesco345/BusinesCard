import React from "react";
import QRCode from "react-native-qrcode-svg";
import { View, Text, StyleSheet } from "react-native";

const QRCodeSection = () => {
  return (
    <View style={styles.qrContainer}>
      <Text style={styles.qrText}>Scan to visit LinkedIn profile</Text>
      <QRCode
        value="https://www.linkedin.com/in/francesco-piscani-18b99748/"
        size={150}
        color="black"
        backgroundColor="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  qrContainer: {
    alignItems: "center",
    margin: 20,
  },
  qrText: {
    marginBottom: 10,
    fontSize: 16,
    color: "black",
  },
});

export default QRCodeSection;
