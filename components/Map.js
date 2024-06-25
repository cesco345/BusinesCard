import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Map = () => {
  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 42.3622446,
          longitude: -71.0950513,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title={"Your Location"}
          description={"This is where you work"}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    height: 300,
    aspectRatio: 16 / 9,
    marginVertical: 20,
    borderRadius: 15,
    overflow: "hidden",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
