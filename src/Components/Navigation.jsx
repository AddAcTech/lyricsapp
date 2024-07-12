import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Navigation() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("/")}>
        <MaterialCommunityIcons name="home-variant" size={40} color="white" />
        <Text style={styles.buttonText}>Home</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Library")}>
        <MaterialCommunityIcons name="playlist-music" size={40} color="white" />
        <Text style={styles.buttonText}>Library</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "100%",
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
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
});
