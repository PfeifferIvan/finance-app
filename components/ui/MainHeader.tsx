import Colors from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";
import Weather from "../Weather";

type Props = {
  userName: string;
};

function MainHeader({ userName }: Props) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.greeting}>Hello, {userName}</Text>
      <Weather />
    </View>
  );
}

export default MainHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
    marginHorizontal: 40,
  },
  greeting: {
    color: Colors.text,
    fontSize: 22,
    fontWeight: "bold",
    flex: 3,
  },
});
