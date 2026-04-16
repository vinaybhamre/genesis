import { timeAgo } from "@/lib/timeAgo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Image, Text, View } from "react-native";

type tweetType = {
  id: string;
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  stats: {
    likes: number;
    comments: number;
  };
};

const FeedCard = ({ id, user, content, stats, createdAt }: tweetType) => {
  const [imageError, setImageError] = useState(false);
  const INTERPUNCT = "\u00B7"; // ·

  return (
    <View className="flex-row gap-3 rounded-lg border-b border-b-slate-200/90 px-4 pb-3">
      <View>
        {imageError ? (
          <Ionicons name="person-circle-outline" size={40} />
        ) : (
          <Image
            source={{ uri: user.avatar }}
            onError={() => setImageError(true)}
            className="h-10 w-10 rounded-full"
          />
        )}
      </View>
      <View className="flex-1">
        <View className="flex-row items-center gap-1">
          <View className="shrink flex-row items-center gap-1">
            <Text
              className="shrink-0 font-inter-semibold text-lg"
              numberOfLines={1}
            >
              {user.name}
            </Text>
            <Text className="shrink text-lg text-slate-500" numberOfLines={1}>
              @{user.username}
            </Text>
          </View>
          <Text className="shrink-0 text-slate-500">
            {INTERPUNCT} {timeAgo(createdAt)}
          </Text>
          <Ionicons
            name="ellipsis-vertical"
            size={16}
            color="#94a3b8"
            style={{ marginLeft: "auto" }}
          />
        </View>
        <View className="gap-2">
          <View>
            <Text className="leading-6 text-black/90 ">{content}</Text>
          </View>
          <View className="flex-row gap-10">
            <View className="flex-row items-center gap-1">
              <Ionicons name="chatbubble-outline" size={18} color={"#475569"} />
              <Text className="font-inter-medium text-slate-600">
                {stats.comments}
              </Text>
            </View>
            <View className="flex-row items-center gap-1">
              <Ionicons name="heart-outline" size={18} color={"#475569"} />
              <Text className="font-inter-medium text-slate-600">
                {stats.likes}
              </Text>
            </View>
            <Ionicons name="share-social-outline" size={18} color={"#475569"} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeedCard;
