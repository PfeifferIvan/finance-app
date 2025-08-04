import Colors from "@/constants/Colors";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function TransactionButton() {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressed : "")}
      >
        <Text style={styles.textStyle}>Add Transaction</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.info,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    margin: 12,
    overflow: "hidden",
  },
  textStyle: {
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
