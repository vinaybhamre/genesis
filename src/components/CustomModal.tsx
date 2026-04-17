import React, { Dispatch, SetStateAction } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type CustomModalProps = {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
};

const CustomModal = ({ modalVisible, setModalVisible }: CustomModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <SafeAreaView edges={[]} className="flex-1" style={{ flex: 1 }}>
        <View className="flex-1 justify-center bg-black/5">
          <View className="m-5 h-60 items-center justify-center rounded-3xl bg-white p-4 shadow-modal">
            <Text className="mb-4 text-center font-inter-semibold">
              FAB Pressed / Modal Appeared
            </Text>
            <Pressable
              className="rounded-2xl border-2 border-red-900 bg-red-500 p-3"
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text className=" text-center font-inter-bold text-white">
                Hide Modal
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default CustomModal;
