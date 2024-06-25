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
import QRCodeSection from "./components/QRCodeSection";
import ContactForm from "./components/ContactForm";
import Map from "./components/Map";
import PortfolioGallery from "./components/PortfolioGallery";
import VCardDownload from "./components/VCardDownload";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  const name = "Francesco Piscani";

  const getOccupation = () => {
    return "Co-Founder InSci Bioscience";
  };

  const onContactMe = () => {
    Linking.openURL("mailto:fpiscani@gmail.com");
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
      <View style={{ flexDirection: "row", margin: 10 }}>
        <FontAwesome6
          name="github"
          size={24}
          color="black"
          onPress={onGithub}
          style={styles.icon}
        />
        <FontAwesome6
          name="x-twitter"
          size={24}
          color="black"
          onPress={onTwitter}
          style={styles.icon}
        />
        <FontAwesome6
          name="at"
          size={24}
          color="black"
          onPress={onEmail}
          style={styles.icon}
        />
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]} style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <Image
            source={require("./assets/dna_2.png")}
            style={styles.headerImage}
          />
          <Image
            source={require("./assets/cesco.jpeg")}
            style={styles.profileImage}
          />
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.occupationText}>{getOccupation()}</Text>
          {renderIcons()}
          <Map />
          <ContactForm />
          {/* <VCardDownload /> */}
          <Button title="Contact me" onPress={onContactMe} />
          <QRCodeSection />

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginTop: 20,
              margin: 10,
            }}
          >
            Portfolio
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: 10, gap: 10 }}
          >
            <ProjectCard
              name="Hybridization Techniques"
              image={require("./assets/pippette.jpeg")}
            />
            <ProjectCard
              name="Gene Silencing"
              image={require("./assets/lab_people.jpg")}
            />
            <ProjectCard
              name="LLM Based Proteomics"
              image={require("./assets/ai.jpeg")}
            />
            <ProjectCard
              name="CRISPR-Cas9"
              image={require("./assets/dna.jpeg")}
            />
            <ProjectCard
              name="AI Bioinformatics"
              image={require("./assets/scientist1.png")}
            />
          </ScrollView>

          {/* <PortfolioGallery /> */}

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
    justifyContent: "flex-start",
    padding: 16,
  },
  headerImage: {
    width: "100%",
    aspectRatio: 4 / 3,
    resizeMode: "contain",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: "white",
    marginTop: -95,
  },
  nameText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    marginVertical: 8,
  },
  occupationText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "dimgray",
    marginBottom: 16,
  },
  icon: {
    marginHorizontal: 8,
  },
  aboutMeText: {
    padding: 10,
    fontSize: 16,
    lineHeight: 22,
    color: "black",
  },
});
