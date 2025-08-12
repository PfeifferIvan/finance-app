import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomPickerModal from "../../components/CustomPicker";
import ActionButton from "../../components/ui/ActionButton";
import Input from "../../components/ui/Input";
import Colors from "../../constants/Colors";
import { EXPENSE_TYPES, INCOME_TYPES } from "../../constants/Expense_types";

export default function TransactionFormScreen() {
  const [transactionType, setTransactionType] = useState("Expense");
  const [transactionCategory, setTransactionCategory] = useState("Other");
  const pickerData =
    transactionType === "Expense" ? EXPENSE_TYPES : INCOME_TYPES;

  function cancelHandler() {
    router.back();
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Add Transaction</Text>
      </View>
      <View style={styles.inputRow}>
        <View style={styles.rowInput}>
          <Input
            label="Amount"
            textInputConfig={{
              placeholder: "Enter the amount...",
              keyboardType: "decimal-pad",
              placeholderTextColor: Colors.textSecondary,
            }}
          />
        </View>
        <View style={styles.rowInput}>
          <Text style={styles.label}>Transaction Type</Text>
          <CustomPickerModal
            data={["Expense", "Income"]}
            selectedValue={transactionType}
            onSelect={setTransactionType}
          />
        </View>
      </View>
      <View>
        <Input
          label="Description"
          textInputConfig={{
            placeholder: "One word description",
            placeholderTextColor: Colors.textSecondary,
          }}
        />
        <Input label="Date" textInputConfig={{ placeholder: "DD/MM/YYYY" }} />
      </View>
      <View style={styles.rowInput}>
        <Text style={[styles.label, { marginHorizontal: 12 }]}>Category</Text>
        <CustomPickerModal
          data={pickerData}
          selectedValue={transactionCategory}
          onSelect={setTransactionCategory}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ActionButton
          label="Cancel"
          buttonStyle={{ backgroundColor: Colors.disabled }}
          onPress={cancelHandler}
        />
        <ActionButton
          label="Add"
          buttonStyle={{ backgroundColor: Colors.info }}
        />
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
    minWidth: 100,
    maxHeight: 70,
  },
  label: {
    color: Colors.textSecondary,
    fontSize: 14,
    margin: 4,
  },
  categoryContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
});
