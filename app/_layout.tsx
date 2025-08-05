import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
    </Drawer>
  );
}
