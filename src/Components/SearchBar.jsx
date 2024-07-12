import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SearchBar() {
  const [song, setSong] = useState("");
  const [songData, setSongData] = useState({ artist: "", song: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleTextChange = (name, value) => {
    setSongData({ ...songData, [name]: value });
  };

  const handleSearch = async () => {
    // setIsLoading(true);
    // const api = `https://api.lyrics.ovh/v1/${songData.artist}/${songData.song}`;
    // try {
    //   const response = await fetch(api);
    //   if (response.ok) {
    //     const data = await response.json();
    //     setSong(data.lyrics);
    //   } else {
    //     console.error("Error al obtener las letras:", response.status);
    //   }
    // } catch (error) {
    //   console.error("Error en la solicitud:", error);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Artist"
        onChangeText={(text) => handleTextChange("artist", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Song"
        onChangeText={(text) => handleTextChange("song", text)}
      />
      <Pressable onPress={handleSearch}>
        <MaterialCommunityIcons name="magnify" size={40} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    marginVertical: 10,
    justifyContent: "center",
    flexDirection: "row",
    gap: 15,
  },
  input: {
    flex: 1,
    paddingLeft: 16,
    borderRadius: 5,
    fontSize: 20,
    color: "white",
    backgroundColor: "#242424",
  },
});
