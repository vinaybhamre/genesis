import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  const [imageError, setImageError] = useState(false);

  const navigation = useNavigation<any>();

  return (
    <SafeAreaView edges={["top"]} className="bg-white">
      <View className="h-14 flex-row items-center justify-between bg-white px-4">
        <View>
          {imageError ? (
            <Ionicons name="person-circle-outline" size={40} />
          ) : (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={{ uri: "https://i.pravatar.cc/150?img=30" }}
                onError={() => setImageError(true)}
                className="h-10 w-10 rounded-full"
              />
            </Pressable>
          )}
        </View>
        <View>
          <Text className=" font-inter-semibold text-3xl">Genesis</Text>
        </View>
        <View>
          <Ionicons name="menu" size={28} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
