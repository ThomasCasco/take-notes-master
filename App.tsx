import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/HomeScreen";
import { EditNoteScreen } from "./screens/EditNoteScreen";
import { NewNote } from "./components/NewNote";

export type RootStackParamList = {
  Home: undefined;
  EditNote: { noteId?: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export type ScreenNavigationStackProp =
  NativeStackNavigationProp<RootStackParamList>;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "All notes",
            headerRight: () => <NewNote />,
          }}
        />
        <Stack.Screen name="EditNote" component={EditNoteScreen} />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
