import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { getPerson } from "../../backend/routes";
import Icon from "react-native-vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native-safe-area-context";

const Card = (key, id) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [interests, setInterests] = useState([]);
  // console.log("id");
  // console.log(id);
  useEffect(() => {
    const getData = async () => {
      try {
        const person = await getPerson("3A8MznmwGS2YsI8fBSOe");
        setName(`${person.firstName} ${person.lastName}`);
        setAge(person.age);
        setInterests(person.interests || []);
        console.log(person);
      } catch (error) {
        console.error("Error fetching person data:", error);
      }
    };

    getData();
  }, [id]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image source={require("./pfp.jpg")} style={styles.profileImage} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.horizontalLine}>____________</Text>
        <View style={styles.divider}></View>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Icon name="user" style={styles.icon} />
            <Text style={styles.text}>{age} years</Text>
          </View>
          <View style={styles.infoRow}>
            <Icon name="dumbbell" style={styles.icon} />
            <Text style={styles.text}>{interests[0]}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreText}>More...</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  horizontalLine: {
    marginBottom: -5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 10,
    borderColor: "black",
    borderWidth: 2,
    position: "relative",
  },
  profileImage: {
    width: 100,
    height: 70,
    borderRadius: 50,
    // marginBottom: ,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    // marginBottom: 10,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  infoContainer: {
    alignItems: "center",
  },
  infoRow: {
    borderColor: "#CCCCCC",
    borderWidth: 2,
    width: "70%",
    paddingVertical: 6,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 8,
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
    color: "black",
  },
  text: {
    fontSize: 18,
    color: "black",
  },
  moreButton: {
    alignSelf: "flex-end",
    // marginTop: 10,
  },
  moreText: {
    fontSize: 16,
    color: "#3A15CE",
    fontFamily: "Avenir",
  },
});

export default Card;
