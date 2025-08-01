type TransactionType = "income" | "expense";

export enum Category {
  Credits = "Credits",
  Services = "Services",
  Personal = "Personal",
  Savings = "Savings",
  Other = "Other",
}

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  description: string;
  date: string;
  category: Category;
}
