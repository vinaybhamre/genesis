import EventCard from "@/components/EventCard";
import EventModal from "@/components/EventModal";
import { events } from "@/data/events";
import { useTheme } from "@/hooks/useTheme";
import { getMarkedDates } from "@/lib/getMarkedDates";
import { CalenderEventType } from "@/types/event";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { CalendarList } from "react-native-calendars";
const CalendarEvents = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const formattedDate = new Date(selectedDate).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const [eventsData, setEventsData] =
    useState<Record<string, CalenderEventType[]>>(events);
  const dayEvents = eventsData[selectedDate] || [];
  const { resolvedTheme } = useTheme();

  const markedDates = getMarkedDates(eventsData, selectedDate, today);

  return (
    <View className=" flex-1 bg-white dark:bg-black">
      <CalendarList
        key={resolvedTheme}
        style={{
          height: 315,
        }}
        horizontal={true}
        pagingEnabled={true}
        firstDay={1}
        hideArrows={true}
        hideExtraDays={false}
        theme={{
          textDayFontWeight: "900",
          backgroundColor: "transparent",
          calendarBackground: "transparent",
          textMonthFontWeight: "900",
          monthTextColor: resolvedTheme === "dark" ? "#fff" : "#000",
          dayTextColor: resolvedTheme === "dark" ? "#fff" : "#000",
          textDisabledColor: resolvedTheme === "dark" ? "#374151" : "#cbd5f5",
        }}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
        }}
        markingType="custom"
        markedDates={markedDates}
      />
      <FlatList
        className="bg-slate-200 dark:bg-slate-900"
        ListHeaderComponent={() => (
          <Text className="bg-slate-200 p-4 font-inter-bold text-3xl text-slate-500 dark:bg-slate-900 dark:text-white">
            {formattedDate}
          </Text>
        )}
        stickyHeaderIndices={[0]}
        ListHeaderComponentStyle={{ marginBottom: 8 }}
        data={dayEvents}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <EventCard {...item} />}
        ItemSeparatorComponent={() => <View className="h-3" />}
        ListEmptyComponent={() => (
          <View className="items-center  p-4">
            <Text className=" font-inter-semibold text-lg text-black dark:text-white">
              No events for selected date
            </Text>
          </View>
        )}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      />

      <View className="absolute bottom-5 right-5">
        <Pressable
          className="rounded-full bg-blue-500 p-4"
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Ionicons name="add" size={24} color={"white"} />
        </Pressable>
      </View>
      <EventModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setEvents={setEventsData}
        selectedDate={selectedDate}
      />
    </View>
  );
};

export default CalendarEvents;
