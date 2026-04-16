import Header from "@/components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        header: () => <Header />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Feed",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={24} />
          ),
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#000",
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: ({ color }) => (
            <Ionicons name="calendar" color={color} size={24} />
          ),
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#000",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
