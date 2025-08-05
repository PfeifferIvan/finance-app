import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

export default function DrawerButton() {
  const navigation = useNavigation();

  function drawerHandler() {
    navigation.toggleDrawer();
  }

  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      style={[({ pressed }) => pressed && styles.pressed, styles.container]}
      onPress={drawerHandler}
    >
      <Ionicons name="menu-outline" size={22} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  container: {
    marginTop: 12,
  },
});
