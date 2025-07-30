import Colors from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  userName: string;
};

function MainHeader({ userName }: Props) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.greeting}>Hello, {userName}</Text>
      <View style={styles.weatherContainer}>
        <MaterialCommunityIcons
          name="weather-cloudy"
          size={22}
          color={Colors.text}
        />
        <Text
          style={{ color: Colors.text, marginHorizontal: 12, fontSize: 15 }}
        >
          24°C
        </Text>
      </View>
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
  weatherContainer: {
    flex: 1,
    flexDirection: "row",
  },
});
