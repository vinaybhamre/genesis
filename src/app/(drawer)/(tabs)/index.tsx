import CustomModal from "@/components/CustomModal";
import FeedCard from "@/components/FeedCard";
import { tweets } from "@/data/tweets";
import { shuffleArray } from "@/lib/shuffle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshingData, setRefreshingData] = useState(false);
  const [tweetsData, setTweetsData] = useState(tweets);
  function handleRefresh() {
    setRefreshingData(true);
    setTweetsData((data) => shuffleArray(data));
    setTimeout(() => setRefreshingData(false), 500);
  }

  return (
    <View className="flex-1 bg-white dark:bg-black">
      <FlatList
        ListHeaderComponent={() => (
          <Text className="mb-2 h-14 border-b border-b-slate-200 text-center align-middle text-xl font-bold text-blue-500 dark:border-b-slate-800 ">
            Latest Posts
          </Text>
        )}
        data={tweetsData}
        renderItem={({ item }) => <FeedCard {...item} />}
        ItemSeparatorComponent={() => <View className="h-2" />}
        keyExtractor={(item) => item.id}
        contentContainerClassName="pb-16"
        refreshing={refreshingData}
        onRefresh={handleRefresh}
      />

      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <View className="absolute bottom-5 right-5">
        <Pressable
          className="rounded-full bg-blue-500 p-4"
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Ionicons name="add" size={24} color={"white"} />
        </Pressable>
      </View>
    </View>
  );
}
