import CustomDrawer from "@/components/CustomDrawer";
import { Drawer } from "expo-router/drawer.js";
import React from "react";

const DrawerLayout = () => {
  return (
    <Drawer
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerItemStyle: {
            display: "none",
          },
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
