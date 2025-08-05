import TransactionButton from "@/components/TransactionButton";
import Card from "@/components/ui/Card";
import MainHeader from "@/components/ui/MainHeader";
import TransactionsList from "@/components/ui/TransactionsList";
import Colors from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import DrawerButton from "@/components/ui/DrawerButton";
import { StyleSheet, Text, View } from "react-native";

function MainScreen() {
  const [income, setIncome] = useState(44000);
  const [expense, setExpense] = useState(10000);

  const currentBalance = income - expense;

  return (
    <LinearGradient colors={Colors.gradients.background} style={styles.screen}>
      <View style={styles.drawerButton}>
        <DrawerButton />
      </View>
      <View>
        <MainHeader userName={"Ivan"} />
        <Card title="Current Balance" amount={currentBalance} />
      </View>
      <View style={styles.inexContainer}>
        <View style={styles.incomeContainer}>
          <Card
            title="Income"
            amount={income}
            textStyle={{ color: Colors.income }}
            amountStyle={{ fontSize: 18 }}
          />
        </View>
        <View style={styles.expenseContainer}>
          <Card
            title="Expenses"
            amount={expense}
            textStyle={{ color: Colors.expense }}
            amountStyle={{ fontSize: 18 }}
          />
        </View>
      </View>
      <Text style={styles.subtitle}>Recent Transactions</Text>
      <TransactionsList />
      <TransactionButton />
    </LinearGradient>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
    backgroundColor: Colors.background,
  },
  inexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  incomeContainer: {
    width: "50%",
  },
  expenseContainer: {
    width: "50%",
  },
  subtitle: {
    marginHorizontal: 30,
    paddingTop: 20,
    fontSize: 18,
    color: Colors.textSecondary,
  },
  drawerButton: {
    justifyContent: "center",
    paddingTop: 40,
    marginHorizontal: 25,
  },
});
