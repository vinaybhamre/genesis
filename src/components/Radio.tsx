import { View } from "react-native";

const Radio = ({ selected }: { selected: boolean }) => {
  return (
    <View
      className={`h-5 w-5 items-center justify-center rounded-full border-2 ${
        selected ? "border-blue-500" : "border-slate-400"
      }`}
    >
      {selected && <View className="h-2.5 w-2.5 rounded-full bg-blue-500" />}
    </View>
  );
};

export default Radio;
