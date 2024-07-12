import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Loading() {
  const rotateAnimation = useRef(new Animated.Value(0)).current; // Paso 2

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true, // Usa el driver nativo para mejor performance
      })
    ).start();
  }, [rotateAnimation]);

  const rotation = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ rotate: rotation }] }}>
        <MaterialCommunityIcons name="loading" size={30} color="#1ed760" />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
