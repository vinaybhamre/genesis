import { View } from "react-native";
import { CalendarList } from "react-native-calendars";
const CalendarEvents = () => {
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
          todayBackgroundColor: "#2b7fff",
          textMonthFontWeight: "900",
        }}
      />
    </View>
  );
};

export default CalendarEvents;
