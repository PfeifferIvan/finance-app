import MainHeader from "@/components/ui/MainHeader";
import Colors from "@/constants/Colors";

import { StyleSheet, View } from "react-native";

function MainScreen() {
  return (
    <View style={styles.screen}>
      <MainHeader userName={"Ivan"} />
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
    backgroundColor: Colors.background,
  },
});
