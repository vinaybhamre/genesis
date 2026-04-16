import FeedCard from "@/components/FeedCard";
import { tweets } from "@/data/tweets";
import { FlatList, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 bg-white">
      <Text className="text-xl font-bold text-blue-500 text-center align-middle h-16">
        Home Feed
      </Text>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <FeedCard {...item} />}
        ItemSeparatorComponent={() => <View className="h-2" />}
        keyExtractor={(item) => item.id}
        contentContainerClassName="pb-16"
      />
    </View>
  );
}
