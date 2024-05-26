import { View, Text } from "react-native";
import React from "react";

export default function authenticationPage() {
  const { user } = useAuth();
  if (user) {
    // if user logged in, show something
  } else {
    //show something else
  }
}
