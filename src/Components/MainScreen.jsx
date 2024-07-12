import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Loading from "./Loading";
import Navigation from "./Navigation";
import Placeholder from "./Placeholder";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MainScreen() {
  const [song, setSong] = useState("");
  const [songData, setSongData] = useState({ artist: "", song: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [songToSave, setSongToSave] = useState({
    song: "Error saving song name",
    artist: "Error saving artist name",
    lyrics: "Error saving lyrics",
  });
  const [mySongs, setMySongs] = useState([]);

  useEffect(() => {
    const getMySongs = async () => {
      try {
        const songs = await AsyncStorage.getItem("@mySongs");
        console.log("Canciones guardadas desde MainScreen:", songs);
        if (songs) {
          setMySongs(JSON.parse(songs));
        }
      } catch (error) {
        console.error("Error al obtener las canciones guardadas:", error);
      }
    };
    getMySongs();
  }, []);

  const handleTextChange = (name, value) => {
    setSongData({ ...songData, [name]: value });
  };

  const handleSearch = async () => {
    setIsLoading(true);
    const api = `https://api.lyrics.ovh/v1/${songData.artist}/${songData.song}`;
    try {
      const response = await fetch(api);
      if (response.ok) {
        const data = await response.json();
        setSong(data.lyrics);
      } else {
        console.error("Error al obtener las letras:", response.status);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadSong = async () => {
    //crear objeto de cancion
    setSongToSave({
      song: songData.song,
      artist: songData.artist,
      lyrics: song,
    });
    setMySongs([...mySongs, songToSave]);
    try {
      await AsyncStorage.setItem("@mySongs", JSON.stringify(mySongs));
    } catch (error) {
      console.error("Error al guardar la canción:", error);
    }
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Search song</Text>
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
          <MaterialCommunityIcons name="magnify" size={40} color="#1ed760" />
        </Pressable>
      </View>
      {isLoading ? (
        <Loading></Loading>
      ) : song ? (
        <ScrollView
          style={styles.lyricsContainer}
          showsVerticalScrollIndicator={false}
        >
          <Pressable onPress={downloadSong} style={styles.dowloadButton}>
            <Text style={styles.dowloadButtonText}>Dowload</Text>
            <MaterialCommunityIcons
              name="download-circle"
              size={40}
              color="#1ed760"
            />
          </Pressable>
          <Text style={styles.lyrics}>{song}</Text>
        </ScrollView>
      ) : (
        <Placeholder />
      )}
      <Navigation></Navigation>
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
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    paddingHorizontal: 20,
  },
  searchContainer: {
    marginVertical: 15,
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
  lyricsContainer: {
    backgroundColor: "#242424",
    borderRadius: 10,
    marginBottom: 15,
    flex: 1,
  },
  lyrics: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    paddingTop: 0,
  },
  dowloadButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 5,
    marginTop: 5,
  },
  dowloadButtonText: {
    color: "#1ed760",
    fontWeight: "bold",
    fontSize: 20,
  },
});
