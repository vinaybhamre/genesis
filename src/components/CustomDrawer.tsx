import { useTheme } from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useState } from "react";
import { Image, Modal, Pressable, Text, View } from "react-native";
import Radio from "./Radio";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const [visible, setVisible] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <>
      <View className="flex-1 bg-white dark:bg-black">
        <DrawerContentScrollView {...props}>
          <View className="flex-1 px-4 pt-6">
            <View className="items-center gap-2">
              <Image
                source={{ uri: "https://i.pravatar.cc/150?img=30" }}
                className="h-16 w-16 rounded-full"
              />
              <Text className="font-inter-semibold text-lg text-black dark:text-white">
                Aarav
              </Text>
              <Text className="text-slate-500 dark:text-slate-400">@aarav</Text>
            </View>

            <View className="my-6 h-[1px] bg-slate-200 dark:bg-slate-700" />

            <Pressable
              onPress={() => {
                props.navigation.closeDrawer();
                setTimeout(() => setVisible(true), 200);
              }}
              className="flex-row items-center gap-3 py-3"
            >
              <Ionicons
                name="moon-outline"
                size={20}
                color={resolvedTheme === "dark" ? "#fff" : "#000"}
              />
              <Text className="font-inter-medium text-base text-black dark:text-white">
                Appearance
              </Text>
            </Pressable>
          </View>
        </DrawerContentScrollView>
      </View>
      <Modal transparent visible={visible} animationType="fade">
        <Pressable
          className="flex-1 justify-end bg-black/30"
          onPress={() => setVisible(false)}
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
                  setVisible(false);
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
                  setVisible(false);
                }}
              >
                <Text className="text-base text-black dark:text-white">
                  Dark
                </Text>
                <Radio selected={theme === "dark"} />
              </Pressable>

              <Pressable
                className="flex-row items-center justify-between py-4"
                onPress={() => {
                  setTheme("system");
                  setVisible(false);
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
    </>
  );
};

export default CustomDrawer;
