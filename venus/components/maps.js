import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { getGym } from "@/app/(tabs)/api";
import { addGym, getOneGym, getConnections } from "../backend/routes";
import Card from "./userCard";
const MapScreen = () => {
  const [gyms, setGyms] = useState([]);
  const [mapRegion, setMapRegion] = useState({
    latitude: 33.643162,
    longitude: -117.851143,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [gym, setGym] = useState(null);
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    async function fetchData() {
      console.log("useeffect");
      const res = await getGym();
      setGyms(res);

      // Add gyms to the database only once after fetching
      res.forEach(async (elem) => {
        const id = elem.place_id;
        const name = elem.name;
        const loc = {
          lat: elem.geometry.location.lat,
          lng: elem.geometry.location.lng,
        };
        const rating = elem.rating;
        await addGym(id, name, loc, rating);
      });
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (selected) {
      async function fetchGymData() {
        const data = await getOneGym(selected);
        setGym(data);
        const usersData = await getConnections(selected);
        setUsers(usersData);
      }
      fetchGymData();
    }
  }, [selected]);

  const handleMarkerPress = async (id) => {
    setSelected(id);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: "stretch", height: "100%" }}
        region={mapRegion}
        provider="google"
      >
        {gyms.map((elem) => {
          const region = {
            latitude: elem.geometry.location.lat,
            longitude: elem.geometry.location.lng,
          };
          const name = elem.name;
          const open = elem.opening_hours?.open_now ? "open" : "closed";
          const id = elem.place_id;

          return (
            <Marker
              key={id}
              coordinate={region}
              title={name}
              pinColor="red"
              zIndex={1}
              description={open}
              onPress={() => handleMarkerPress(id)}
            >
              {selected === id && gym && users.length > 0 && (
                <Callout tooltip={true}>
                  <ScrollView horizontal={true}>
                    {photos.map((photo, index) => {
                      <Image
                        source={{
                          uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=YOUR_API_KEY`,
                          key: { index },
                        }}
                      ></Image>;
                    })}
                  </ScrollView>
                  <Card></Card>
                </Callout>
              )}
            </Marker>
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
