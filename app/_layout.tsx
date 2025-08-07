import Colors from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { Drawer } from "expo-router/drawer";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  return (
    <>
      <LinearGradient
        colors={Colors.gradients.background}
        style={StyleSheet.absoluteFill}
      >
        <View style={styles.screen}>
          <Drawer
            screenOptions={{
              drawerStyle: {
                backgroundColor: "transparent",
                width: "50%",
              },
              sceneStyle: {
                backgroundColor: "transparent",
              },
              drawerActiveBackgroundColor: Colors.drawer.activeBackground,
              drawerActiveTintColor: Colors.drawer.activeText,
              drawerInactiveTintColor: Colors.drawer.inactiveText,
            }}
          >
            <Drawer.Screen
              name="(home)"
              options={{
                headerShown: false,
                title: "Home",
              }}
            />
          </Drawer>
        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "transparent",
  },
});
