import Colors from "@/constants/Colors";
import { Transaction } from "@/model/Transaction";
import { amountFormater, formatDate } from "@/utils/utils";
import { StyleSheet, Text, View } from "react-native";

export default function TransactionItem({
  amount,
  date,
  type,
  description,
}: Transaction) {
  const formated = amountFormater(amount);
  const typeColor = type === "expense" ? Colors.expense : Colors.income;
  const sign = type === "expense" ? "-" : "";
  const oneWordDescription = description.split(" ")[0];
  return (
    <View style={styles.transactionContainer}>
      <View style={styles.amountContainer}>
        <Text style={[styles.amountText, { color: typeColor }]}>
          {sign}${formated}
        </Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{formatDate(date)}</Text>
        <Text style={[{ color: "white" }]}>{oneWordDescription}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  transactionContainer: {
    width: "85%",
    height: 50,
    padding: 12,
    marginTop: 12,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.card,
    elevation: 4, //Shadow for android.
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    flexDirection: "row",
  },
  amountContainer: {
    flex: 2,
  },
  dateContainer: {
    flex: 1,
    justifyContent: "center",
  },
  amountText: {
    color: Colors.text,
    fontWeight: "bold",
    fontSize: 24,
  },
  dateText: {
    color: Colors.textSecondary,
    paddingVertical: 2,
  },
});
