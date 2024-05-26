import React from "react";
import { View, Button, StyleSheet } from "react-native";
import Svg, { Circle, Rect, Path } from "react-native-svg";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from "react-native-reanimated";

const AnimatedRect = Animated.createAnimatedComponent(Rect);
const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Plant = () => {
  const growth = useSharedValue(1);
  const watered = useSharedValue(false);

  const animatedProps = useAnimatedProps(() => {
    return {
      transform: [
        {
          scale: withTiming(growth.value, {
            duration: 500,
            easing: Easing.bounce,
          }),
        },
      ],
      opacity: withTiming(watered.value ? 1 : 0.8, { duration: 500 }),
    };
  });

  const animateGrowth = () => {
    growth.value += 0.2;
  };

  const animateWatering = () => {
    watered.value = true;
    setTimeout(() => (watered.value = false), 2000); // Simulate water effect duration
  };

  return (
    <View style={styles.container}>
      <Svg height="200" width="200" viewBox="0 0 100 100">
        {/* Stem */}
        <AnimatedRect
          x="48"
          y="50"
          width="4"
          height="30"
          fill="green"
          animatedProps={animatedProps}
        />
        {/* Leaves */}
        <AnimatedPath
          d="M50 70 C 45 60, 55 60, 50 70"
          fill="green"
          animatedProps={animatedProps}
        />
        <AnimatedPath
          d="M50 60 C 40 50, 60 50, 50 60"
          fill="green"
          animatedProps={animatedProps}
        />
        {/* Flower */}
        <AnimatedCircle
          cx="50"
          cy="50"
          r="5"
          fill="yellow"
          animatedProps={animatedProps}
        />
      </Svg>
      <Button title="Water Plant" onPress={animateWatering} />
      <Button title="Feed Plant" onPress={animateGrowth} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Plant;
