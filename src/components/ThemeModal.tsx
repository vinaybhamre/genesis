import { useTheme } from "@/hooks/useTheme";
import { Dispatch, SetStateAction } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import Radio from "./Radio";

type ThemeModalProps = {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
};

const ThemeModal = ({ modalVisible, setModalVisible }: ThemeModalProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <Modal transparent visible={modalVisible} animationType="fade">
      <Pressable
        className="flex-1 justify-end bg-black/30"
        onPress={() => setModalVisible(false)}
      >
        <Pressable onPress={() => {}}>
          <View className="rounded-t-3xl bg-white p-5 dark:bg-neutral-900">
            <View className="mb-3 items-center">
              <View className="h-1 w-10 rounded-full bg-slate-300 dark:bg-slate-600" />
            </View>
            <Text className="mb-2 text-center text-base font-semibold text-black dark:text-white">
              Appearance
            </Text>
            <View className="mb-2 h-[1px] bg-slate-200 dark:bg-slate-700" />
            <Pressable
              className="flex-row items-center justify-between py-4"
              onPress={() => {
                setTheme("light");
                setModalVisible(false);
              }}
            >
              <Text className="text-base text-black dark:text-white">
                Light
              </Text>
              <Radio selected={theme === "light"} />
            </Pressable>
            <Pressable
              className="flex-row items-center justify-between py-4"
              onPress={() => {
                setTheme("dark");
                setModalVisible(false);
              }}
            >
              <Text className="text-base text-black dark:text-white">Dark</Text>
              <Radio selected={theme === "dark"} />
            </Pressable>
            <Pressable
              className="flex-row items-center justify-between py-4"
              onPress={() => {
                setTheme("system");
                setModalVisible(false);
              }}
            >
              <Text className="text-base text-black dark:text-white">
                System Setting
              </Text>
              <Radio selected={theme === "system"} />
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default ThemeModal;
