import Ionicons from "@expo/vector-icons/Ionicons";
import { Dispatch, SetStateAction } from "react";

import { Pressable, View } from "react-native";

type FABProps = {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
};

const FloatingButton = ({ modalVisible, setModalVisible }: FABProps) => {
  return (
    <View className="absolute bottom-5 right-5">
      <Pressable
        className="rounded-full bg-blue-500 p-4"
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Ionicons name="add" size={24} color={"white"} />
      </Pressable>
    </View>
  );
};

export default FloatingButton;
