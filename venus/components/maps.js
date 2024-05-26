import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import MapView, { Marker, Callout, CalloutSubview } from "react-native-maps";
import { getGym } from "@/app/(tabs)/api";
import {
  addGym,
  getOneGym,
  getConnections,
  addConnection,
} from "../backend/routes";
import Card from "./calloutCard";

const MapScreen = () => {
  const [gyms, setGyms] = useState([]);
  const [mapRegion, setmapRegion] = useState({
    latitude: 33.643162,
    longitude: -117.851143,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [gym, setGym] = useState();
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState();

  useEffect(() => {
    async function fetchData() {
      console.log("useeffect");
      const res = await getGym();
      setGyms(res);
    }
    fetchData();
  }, []);

  const addFakeData = async () => {
    await addConnection("3A8MznmwGS2YsI8fBSOe", "ChIJqUfeRanf3IARby4I3ZY3oJA");
    await addConnection("KXY5FpgS1WgfDjACjSG2", "ChIJocWATfHg3IARjVFi4T9CE8k");
  };

  const handlemarkerPress = async (id) => {
    await addFakeData();
    setSelected(id);
    console.log("before gettibg");
    const data = await getOneGym(id);
    setGym(data);
    const users = await getConnections(id);
    setUsers(users);
    console.log("handlig");
    console.log(users);
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
              onSelect={(e) => {
                //before the callback is shown, after user clicks
                console.log(e.nativeEvent);
                handlemarkerPress(id);
                console.log("done");
                //callout here to display the cards
              }}
            >
              {selected == id && <Card gym={elem} users={users}></Card>}
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
