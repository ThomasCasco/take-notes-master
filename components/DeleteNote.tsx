import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import { ScreenNavigationStackProp } from "../App";
import { deleteNote } from "../services/noteStoreService";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  noteId: string;
};

export const DeleteNote: React.FC<Props> = ({ noteId }) => {
  const navigation = useNavigation<ScreenNavigationStackProp>();

  const deleteNoteHandler = async () => {
    await deleteNote(noteId);
    navigation.navigate("Home");
  };

  return (
    <Pressable onPress={deleteNoteHandler}>
      <FontAwesome name="trash-o" size={30} color="#ffb703" />
    </Pressable>
  );
};
