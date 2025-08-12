import appConfig from "@/app.config";
import { Transaction } from "@/model/Transaction";
import axios from "axios";

const BACKEND_URL = appConfig.expo.extra.BACKEND_URL;

export async function getAllTransactions() {}

export async function addTransaction(transactionData: Transaction) {
  try {
    await axios.post(BACKEND_URL + "transactions.json", transactionData);
    console.log("Succesfully added!");
  } catch (e) {
    console.error(e);
  }
}
