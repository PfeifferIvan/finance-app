import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

type Props = {
  label: string;
  buttonStyle: StyleProp<ViewStyle>;
  onPress: () => void;
};

export default function ActionButton({ label, buttonStyle, onPress }: Props) {
  return (
    <View style={[styles.button, buttonStyle]}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
      >
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 12,
    width: 100,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
