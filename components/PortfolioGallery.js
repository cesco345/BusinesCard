import React from "react";
import {
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from "react-native";

const portfolioItems = [
  { id: "1", image: require("../assets/petri_dish.jpeg") },
  { id: "2", image: require("../assets/pippette.jpeg") },
  { id: "3", image: require("../assets/lab_people.jpg") },
  { id: "4", image: require("../assets/ai.jpeg") },
  { id: "5", image: require("../assets/dna_1.png") },
  { id: "6", image: require("../assets/pippette.jpeg") },
];

const PortfolioGallery = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        /* Handle click */
      }}
    >
      <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.galleryContainer}>
      <Text style={styles.galleryTitle}>Portfolio</Text>
      <FlatList
        data={portfolioItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  galleryContainer: {
    marginVertical: 20,
  },
  galleryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

export default PortfolioGallery;
