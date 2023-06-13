import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { RootStackParamList, ScreenNavigationStackProp } from "../App";
import { DeleteNote } from "../components/DeleteNote";
import { NoteTakingInput } from "../components/NoteTakingInput";

type EditScreenRouteProp = RouteProp<RootStackParamList, "EditNote">;

export const EditNoteScreen: React.FC = () => {
  const route = useRoute<EditScreenRouteProp>();
  const navigation = useNavigation<ScreenNavigationStackProp>();
  const noteId = route.params.noteId;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: noteId ? "Edit note" : "New note",
      headerRight: () => (noteId ? <DeleteNote noteId={noteId} /> : <></>),
    });
  }, [navigation]);

  return <NoteTakingInput noteId={noteId} />;
};
