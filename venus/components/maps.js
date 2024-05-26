import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import MapView, { Marker, Callout, CalloutSubview } from "react-native-maps";
import { getGym } from "@/app/(tabs)/api";
import { addGym, getOneGym } from "../backend/routes";

const MapScreen = () => {
  const [gyms, setGyms] = useState([]);
  const [mapRegion, setmapRegion] = useState({
    latitude: 33.643162,
    longitude: -117.851143,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    async function fetchData() {
      const res = await getGym();
      setGyms(res);
    }
    fetchData();
  }, []);

  // const zoomIn = () => {
  //   setmapRegion({
  //     ...mapRegion,
  //     latitudeDelta: mapRegion.latitudeDelta / 2,
  //     longitudeDelta: mapRegion.longitudeDelta / 2,
  //   });
  // };

  // const zoomOut = () => {
  //   setmapRegion({
  //     ...mapRegion,
  //     latitudeDelta: mapRegion.latitudeDelta * 2,
  //     longitudeDelta: mapRegion.longitudeDelta * 2,
  //   });
  // };

  const handlemarkerPress = async (id) => {
    const data = await getOneGym(id);
    console.log("handlig");
    console.log(data);
    // fetch users associated with gym as well
    return data;
  };

  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: "stretch", height: "100%" }}
        region={mapRegion}
        provider="google"
        // zoomEnabled="true"
      >
        {gyms.map((elem) => {
          console.log(elem);
          const region = {
            latitude: elem.geometry.location.lat,
            longitude: elem.geometry.location.lng,
          };
          const name = elem.name;
          const open = elem.opening_hours.open_now ? "open" : "closed";
          const id = elem.place_id;
          const rating = elem.rating;
          const loc = {
            lat: elem.geometry.location.lat,
            lng: elem.geometry.location.lng,
          };
          addGym(id, name, loc, rating);
          return (
            <Marker
              key={id}
              coordinate={region}
              title={name} //title so name of business
              pinColor="red"
              zIndex={1}
              description={open} //descriptions so like view gym or smth
              onPress={(e) => {
                console.log(e.nativeEvent);
                handlemarkerPress(id);
                console.log("done");
                //callout here to display the cards
              }}
            />
          );
        })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default MapScreen;
