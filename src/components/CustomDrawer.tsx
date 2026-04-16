import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Image, Pressable, Text, View } from "react-native";

const CustomDrawer = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View className="flex-1 px-4 pt-6">
        <View className="items-center gap-2">
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=30" }}
            className="h-16 w-16 rounded-full"
          />
          <Text className="font-inter-semibold text-lg">Aarav</Text>
          <Text className="text-slate-500">@aarav</Text>
        </View>

        <View className="my-6 h-[1px] bg-slate-200" />

        <Pressable className="flex-row items-center gap-3 py-3">
          <Ionicons name="moon-outline" size={20} />
          <Text className="font-inter-medium text-base">Appearance</Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
