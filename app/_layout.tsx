import Colors from "@/constants/Colors";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerStyle: {
          backgroundColor: Colors.drawer.background,
          width: "50%",
        },
        drawerActiveBackgroundColor: Colors.drawer.activeBackground,
        drawerActiveTintColor: Colors.drawer.activeText,
        drawerInactiveTintColor: Colors.drawer.inactiveText,
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
        }}
      />
    </Drawer>
  );
}
