import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Linking,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";

export default function App() {
  const name = "Francesco Piscani";

  const getOccupation = () => {
    return "Co-Founder InSci Bioscience";
  };

  const onContactMe = () => {
    Linking.openURL("https://www.linkedin.com/in/francesco-piscani-18b99748/");
  };

  const onGithub = () => {
    Linking.openURL("https://github.com/cesco345");
  };

  const onTwitter = () => {
    Linking.openURL("https://twitter.com/cesco345");
  };

  const onEmail = () => {
    Linking.openURL("mailto:fpiscani@gmail.com");
  };

  const renderIcons = () => {
    return (
      <View style={{ flexDirection: "row", margin: 10, gap: 10 }}>
        <FontAwesome6
          name="github"
          size={24}
          color="black"
          onPress={onGithub}
        />
        <FontAwesome6
          name="x-twitter"
          size={24}
          color="black"
          onPress={onTwitter}
        />
        <FontAwesome6 name="at" size={24} color="black" onPress={onEmail} />
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]} style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <Image
            source={require("./assets/dna_2.png")}
            style={{
              width: "100%",
              aspectRatio: 4 / 3,
              resizeMode: "contain",
            }}
          />
          <Image
            source={require("./assets/cesco.jpeg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 75,
              borderWidth: 5,
              borderColor: "white",
              marginTop: -100,
            }}
          />
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "black" }}>
            {name}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "400", color: "black" }}>
            {getOccupation()}
          </Text>
          {renderIcons()}
          <Button title="LinkedIn Profile" onPress={onContactMe} />
          <QRCode
            value="https://www.linkedin.com/in/francesco-piscani-18b99748/"
            size={150}
            color="black"
            backgroundColor="white"
            gap={10}
            padding={10}
          />

          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});
