import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Placeholder() {
  return (
    <View style={styles.vista}>
      <Text style={styles.text}>Busca tu canción</Text>
      <MaterialCommunityIcons name="music" size={100} color="#242424" />
    </View>
  );
}

//bookmark-music-outline

const styles = StyleSheet.create({
  vista: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    color: "#242424",
    fontSize: 20,
    fontWeight: "bold",
  },
});
