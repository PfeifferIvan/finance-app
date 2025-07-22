import MainScreen from "@/src/screens/MainScreen";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";

export default function Index() {
  let screen = <MainScreen />;

  return (
    <LinearGradient
      colors={["#1C1C1E", "#2C3E50"]}
      style={styles.rootContainer}
    >
      <StatusBar style="light" />
      <SafeAreaView>{screen}</SafeAreaView>;
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
