import { TRANSACTIONS } from "@/data/dummy-data";
import { FlatList } from "react-native";
import TransactionItem from "../TransactionItem";

export default function TransactionsList() {
  return (
    <FlatList
      data={TRANSACTIONS}
      renderItem={({ item }) => <TransactionItem {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
}
