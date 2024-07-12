import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import SongCard from "./SongCard";
import SearchBar from "./SearchBar";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Library() {
  const [mySongs, setMySongs] = useState([]);

  const deleteSong = (index) => {
    const newMySongs = mySongs.filter((_, i) => i !== index);
    setMySongs(newMySongs);
    try {
      AsyncStorage.setItem("@mySongs", JSON.stringify(newMySongs));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getMySongs = async () => {
      try {
        const songs = await AsyncStorage.getItem("@mySongs");
        // console.log("Canciones guardadas desde Library:", songs);
        if (songs) {
          setMySongs(JSON.parse(songs));
        }
      } catch (error) {
        console.error("Error al obtener las canciones guardadas:", error);
      }
    };
    getMySongs();
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Your library</Text>
      {/* Usar como filtro */}
      <SearchBar />
      <ScrollView style={styles.songs} showsVerticalScrollIndicator={false}>
        {mySongs.map((cancion, index) => (
          <SongCard
            key={index}
            cancion={cancion}
            onDelete={() => deleteSong(index)}
          />
        ))}
      </ScrollView>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  input: {
    flex: 1,
    borderColor: "black",
    borderWidth: 2,
    paddingLeft: 16,
    borderRadius: 10,
    fontSize: 20,
  },
  button: {
    backgroundColor: "black",
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    paddingHorizontal: 20,
  },
  songs: {
    width: "100%",
    gap: 15,
    backgroundColor: "#121212",
  },
});
