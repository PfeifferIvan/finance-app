import MainScreen from "@/src/screens/MainScreen";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function Index() {
  let screen: React.JSX.Element = <MainScreen />;

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.rootContainer}>{screen}</View>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
