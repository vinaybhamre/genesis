export const getMarkedDates = (
  events: Record<string, any[]>,
  selectedDate: string,
  today: string
) => {
  const markedDates: Record<string, any> = {};

  // dots
  Object.keys(events).forEach((date) => {
    markedDates[date] = {
      marked: true,
      dotColor: "#2b7fff",
    };
  });

  const isTodaySelected = today === selectedDate;

  // today
  markedDates[today] = {
    ...markedDates[today],
    customStyles: {
      container: {
        borderWidth: 1,
        borderColor: "#2b7fff",
        borderRadius: 20,
      },
      text: {
        color: isTodaySelected ? "#fff" : "#2b7fff",
        fontWeight: "bold",
      },
    },
  };

  // selected
  markedDates[selectedDate] = {
    ...markedDates[selectedDate],
    selected: true,
    selectedColor: "#2b7fff",
    selectedTextColor: "#fff",
  };

  return markedDates;
};
