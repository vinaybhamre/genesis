import Header from "@/components/Header";
import { useTheme } from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

const TabLayout = () => {
  const { resolvedTheme } = useTheme();

  const tabBarBgColor = resolvedTheme === "dark" ? "black" : "white";
  const tabBarActiveIconColor = resolvedTheme === "dark" ? "white" : "black";

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        header: () => <Header />,
        tabBarStyle: {
          backgroundColor: tabBarBgColor,
          borderTopColor: tabBarBgColor,
        },
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
          tabBarActiveTintColor: tabBarActiveIconColor,
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
          tabBarActiveTintColor: tabBarActiveIconColor,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
