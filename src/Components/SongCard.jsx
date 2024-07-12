import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SongCard({ cancion, onDelete }) {
  const navigation = useNavigation();

  const goToReader = (cancion) => {
    // console.log("Boton de leer presionado");
    navigation.navigate("Reader", { cancion });
  };

  return (
    <View style={styles.card}>
      <View>
        <View style={styles.info}>
          <Text style={styles.songTitle}>{cancion.song}</Text>
          <Text style={styles.songArtist}>{cancion.artist}</Text>
        </View>
        <Text style={styles.lyrics}>{cancion.lyrics.slice(0, 40)}...</Text>
      </View>
      <View style={styles.buttons}>
        <Pressable onPress={() => goToReader(cancion)}>
          <MaterialCommunityIcons name="text" size={30} color="#1ed760" />
        </Pressable>
        <Pressable onPress={onDelete}>
          <MaterialCommunityIcons name="delete" size={30} color="#484848" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: 10,
    gap: 4,
    // backgroundColor: "white",
    color: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttons: {
    justifyContent: "center",
  },
  lyrics: {
    color: "grey",
  },
  songTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  songArtist: {
    fontWeight: "500",
    color: "grey",
  },
});
