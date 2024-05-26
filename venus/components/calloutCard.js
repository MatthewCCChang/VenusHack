import { Callout } from "react-native-maps";
import { ScrollView, Image, StyleSheet } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import userCard from "./userCard";

const Card = (gym, users) => {
  const photos = gym.photos;
  console.log("users");
  console.log(users);
  return (
    // <Callout tooltip={true}>
    //   {/*gym info then user cards */}
    <View>
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
      <userCard></userCard>
    </View>

    // </Callout>
  );
};
export default Card;
