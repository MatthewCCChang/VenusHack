import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, ScrollView, Image, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { getGym } from "@/app/(tabs)/api";
import { addGym, getOneGym, getConnections } from "../backend/routes";
import Card from "../app/(tabs)/userCard";

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
  const mapViewRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
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

  const handleMarkerPress = (id, region) => {
    setSelected(id);
    if (mapViewRef.current) {
      mapViewRef.current.animateToRegion(
        {
          ...region,
          latitude: region.latitude + 0.03,
          longitude: region.longitude,
          latitudeDelta: mapRegion.latitudeDelta,
          longitudeDelta: mapRegion.longitudeDelta,
        }
        // 1000 // Duration in milliseconds
      );
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapViewRef}
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
              onPress={() => handleMarkerPress(id, region)}
            >
              {selected === id && gym && (
                <Callout tooltip={true}>
                  <View style={styles.calloutContainer}>
                    {/* <ScrollView horizontal={true} style={styles.photoScroll}>
                      {gym.photos?.map((photo, index) => (
                        <Image
                          key={index}
                          source={{
                            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=YOUR_API_KEY`,
                          }}
                          style={styles.photo}
                        />
                      ))}
                    </ScrollView> */}
                    <View style={styles.cardsContainer}>
                      {/* {users.length > 0 && users.slice(0, 2).map((user, index) => (
                        <Card key={index} person={user} />
                      ))} */}
                      <Card key={1} person={"7cVZRmLgjKQtJXTPOh5n"} />
                      <Card key={2} person={"VDC7w65nwN35xgxncdar"} />
                    </View>
                  </View>
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
  calloutContainer: {
    width: 300,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8,
    height: 500,
  },
  photoScroll: {
    height: 50,
  },
  photo: {
    width: 150,
    height: 100,
    marginRight: 10,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default MapScreen;
