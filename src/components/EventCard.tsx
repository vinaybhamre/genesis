import { CalenderEventType } from "@/types/event";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

const EventCard = ({ title, time, description }: CalenderEventType) => {
  return (
    <View className="mx-4 flex-row items-start gap-3 rounded-2xl bg-indigo-600 py-4">
      <View className="pl-3 pr-2 pt-1">
        <Ionicons name="today-outline" color={"white"} size={20} />
      </View>
      <View>
        <Text className="font-inter-semibold text-lg text-white">{title}</Text>
        {time && <Text className="text-sm text-white/80">{time}</Text>}
        {description && (
          <Text className="text-sm text-white/80">{description}</Text>
        )}
      </View>
    </View>
  );
};

export default EventCard;
