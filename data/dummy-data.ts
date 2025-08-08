import { Category, Transaction } from "@/model/Transaction";

export const TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    type: "income",
    amount: 3500,
    description: "Monthly Payroll",
    date: new Date("2025-08-01"),
    category: Category.Payroll,
  },
  {
    id: "2",
    type: "expense",
    amount: 200,
    description: "Netflix Subscription",
    date: new Date("2025-08-03"),
    category: Category.Services,
  },
  {
    id: "3",
    type: "expense",
    amount: 150,
    description: "Dinner at Italian Restaurant",
    date: new Date("2025-08-04"),
    category: Category.Personal,
  },
  {
    id: "4",
    type: "income",
    amount: 500,
    description: "Credit Refund",
    date: new Date("2025-08-05"),
    category: Category.Credits,
  },
  {
    id: "5",
    type: "expense",
    amount: 100,
    description: "Transfer to Savings",
    date: new Date("2025-08-06"),
    category: Category.Savings,
  },
  {
    id: "6",
    type: "expense",
    amount: 75,
    description: "Miscellaneous purchase",
    date: new Date("2025-08-06"),
    category: Category.Other,
  },
];
