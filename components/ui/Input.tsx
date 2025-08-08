import Colors from "@/constants/Colors";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

type Props = {
  label: string;
  textInputConfig: TextInputProps;
};

export default function Input({ label, textInputConfig }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...textInputConfig} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
    marginVertical: 4,
  },
  label: {
    color: Colors.textSecondary,
    fontSize: 14,
    margin: 4,
  },
  input: {
    borderRadius: 8,
    backgroundColor: Colors.input,
    padding: 6,
    fontSize: 18,
    color: Colors.text,
  },
});
