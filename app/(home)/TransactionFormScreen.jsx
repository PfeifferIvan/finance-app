import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomPickerModal from "../../components/CustomPicker";
import Input from "../../components/ui/Input";
import Colors from "../../constants/Colors";

export default function TransactionFormScreen() {
  const [transactionType, setTransactionType] = useState("Expense");
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Add Transaction</Text>
      </View>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          textInputConfig={{
            placeholder: "Enter the amount...",
            keyboardType: "decimal-pad",
            placeholderTextColor: Colors.textSecondary,
          }}
        />
        <View style={styles.rowInput}>
          <Text style={styles.label}>Transaction Type</Text>
          <CustomPickerModal
            data={["Expense", "Income"]}
            selectedValue={transactionType}
            onSelect={setTransactionType}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.modals.background,
  },
  textContainer: {
    marginHorizontal: 30,
    marginTop: 100,
  },
  text: {
    color: Colors.text,
    fontWeight: "bold",
    fontSize: 22,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  rowInput: {
    flex: 1,
  },
  label: {
    color: Colors.textSecondary,
    fontSize: 14,
    margin: 4,
  },
});
