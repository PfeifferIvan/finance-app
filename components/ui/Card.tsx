import Colors from "@/constants/Colors";
import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";

type Props = {
  title: string;
  amount: number;
  textStyle?: StyleProp<TextStyle>;
  amountStyle?: StyleProp<TextStyle>;
};

function Card({ title, amount, textStyle, amountStyle }: Props) {
  const formated = new Intl.NumberFormat("en-US").format(amount);
  return (
    <View style={[styles.card]}>
      <View style={styles.titleContainer}>
        <Text style={[styles.categoryTitle, textStyle]}>{title}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={[styles.amountText, amountStyle]}>$ {formated}</Text>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.card,
    elevation: 4, //Shadow for android.
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  categoryTitle: {
    color: Colors.text,
    fontSize: 14,
  },
  titleContainer: {
    flexDirection: "row",
    padding: 8,
  },
  amountContainer: {
    alignItems: "center",
  },
  amountText: {
    fontSize: 22,
    color: Colors.text,
    fontWeight: "bold",
  },
});
