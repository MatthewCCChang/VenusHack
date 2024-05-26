import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import MapScreen from "../../components/maps";

export default function Map() {
  return (
    // <SafeAreaView>
    //   <View style={styles.container}>
    //     <MapScreen></MapScreen>
    //   </View>
      
    // </SafeAreaView>
    <MapScreen></MapScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
}
)

