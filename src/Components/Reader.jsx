import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Navigation from "./Navigation";

export default function Reader({ route }) {
  const { cancion } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.song}>{cancion.song}</Text>
      <Text style={styles.artist}>{cancion.artist}</Text>
      <ScrollView
        style={styles.lyricsContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.lyrics}>{cancion.lyrics}</Text>
      </ScrollView>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  song: {
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  artist: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    paddingHorizontal: 20,
  },
  lyricsContainer: {
    backgroundColor: "#242424",
    borderRadius: 10,
    marginVertical: 15,
    flex: 1,
  },
  lyrics: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    paddingTop: 15,
  },
});
