import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import { ScreenNavigationStackProp } from "../App";
import { FontAwesome } from "@expo/vector-icons";

export const NewNote: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationStackProp>();

  return (
    <Pressable
      onPress={() => navigation.navigate("EditNote", { noteId: undefined })}
    >
      <FontAwesome name="pencil-square-o" size={30} color="#ffb703" />
    </Pressable>
  );
};
