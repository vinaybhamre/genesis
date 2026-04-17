import { useTheme } from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import ThemeModal from "./ThemeModal";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const [visible, setVisible] = useState(false);

  const { resolvedTheme } = useTheme();

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

      <ThemeModal modalVisible={visible} setModalVisible={setVisible} />
    </>
  );
};

export default CustomDrawer;
