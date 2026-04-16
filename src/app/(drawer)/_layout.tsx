import { Drawer } from "expo-router/drawer.js";
import React from "react";

const DrawerLayout = () => {
  return (
    <Drawer>
      <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
    </Drawer>
  );
};

export default DrawerLayout;
