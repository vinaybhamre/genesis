import { useState } from "react";
import { View } from "react-native";
import { CalendarList } from "react-native-calendars";
const CalendarEvents = () => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  return (
    <View>
      <CalendarList
        style={{
          height: 320,
        }}
        horizontal={true}
        pagingEnabled={true}
        staticHeader={true}
        firstDay={1}
        hideArrows={true}
        hideExtraDays={false}
        theme={{
          // todayBackgroundColor: "#2b7fff",
          textMonthFontWeight: "900",
        }}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: "#2b7fff",
            selectedTextColor: "#fff",
          },
        }}
      />
    </View>
  );
};

export default CalendarEvents;
