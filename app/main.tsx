import Card from "@/components/ui/Card";
import MainHeader from "@/components/ui/MainHeader";
import Colors from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

import { Text } from "react-native";

import { StyleSheet, View } from "react-native";

function MainScreen() {
  return (
    <LinearGradient colors={Colors.gradients.background} style={styles.screen}>
      <View>
        <MainHeader userName={"Ivan"} />
        <Card>
          <Text>Hello From Card</Text>
        </Card>
      </View>
    </LinearGradient>
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
