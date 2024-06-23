import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Map = () => {
  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 41.6620925,
          longitude: -71.1840449,
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
    height: 200,
    width: "100%",
    marginVertical: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
