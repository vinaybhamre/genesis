import { CalenderEventType } from "@/types/event";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type EventModalProps = {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  setEvents: Dispatch<SetStateAction<Record<string, CalenderEventType[]>>>;
  selectedDate: string;
};

const EventModal = ({
  modalVisible,
  setModalVisible,
  setEvents,
  selectedDate,
}: EventModalProps) => {
  const [title, setTitle] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [description, setDescription] = useState("");

  function handleEventSubmit() {
    if (!title.trim()) return;

    const newEvent = {
      id: Date.now().toString(),
      title: title.trim(),
      time: eventTime.trim(),
      description: description.trim(),
    };

    setEvents((prev) => ({
      ...prev,
      [selectedDate]: [...(prev[selectedDate] || []), newEvent],
    }));

    setTitle("");
    setEventTime("");
    setDescription("");

    setModalVisible(false);
  }

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
        <View className="flex-1 justify-end  bg-white/90 dark:bg-black/90">
          <View className="rounded-t-3xl border-t-2 border-t-slate-800 bg-white p-5 shadow-modal dark:border-t-slate-200 dark:bg-black">
            <Text className="text-center font-inter-semibold text-black dark:text-white">
              Create an event
            </Text>
            <View className="gap-2 p-2">
              <Text className="font-inter-semibold text-lg text-black dark:text-white">
                Title:
              </Text>
              <TextInput
                className="rounded-xl border-2 border-slate-900 px-2 font-inter-medium text-black dark:text-white"
                value={title}
                onChangeText={setTitle}
                placeholder="Enter Title"
                placeholderTextColor="#9ca3af"
              />
            </View>
            <View className="gap-2 p-2">
              <Text className="font-inter-semibold text-lg text-black dark:text-white">
                Time:
              </Text>
              <TextInput
                className="rounded-xl border-2 border-slate-900 px-2 font-inter-medium text-black dark:text-white"
                value={eventTime}
                onChangeText={setEventTime}
                placeholder="Enter Time : 3:00 pm - 5:00 pm"
                placeholderTextColor="#9ca3af"
              />
            </View>
            <View className="mb-3 gap-2 p-2">
              <Text className="font-inter-semibold text-lg text-black dark:text-white">
                Description:
              </Text>
              <TextInput
                className="rounded-xl border-2 border-slate-900 px-2 font-inter-medium text-black dark:text-white"
                value={description}
                onChangeText={setDescription}
                placeholder="Enter Description"
                placeholderTextColor="#9ca3af"
              />
            </View>
            <Pressable
              className="mx-2 rounded-2xl border-2 border-red-900 bg-red-500 p-3 disabled:border-zinc-200 disabled:bg-zinc-300 disabled:dark:border-zinc-700 disabled:dark:bg-zinc-800"
              onPress={handleEventSubmit}
              disabled={!title.trim()}
            >
              <Text className="text-center font-inter-bold text-white">
                Submit
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default EventModal;
