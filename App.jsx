import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import MainScreen from "./src/Components/MainScreen";
import Library from "./src/Components/Library";
import Reader from "./src/Components/Reader";
import SongCard from "./src/Components/SongCard";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="/"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="/" component={MainScreen} />
          <Stack.Screen name="Library" component={Library} />
          <Stack.Screen name="Reader" component={Reader} />
          <Stack.Screen name="SongCard" component={SongCard} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
