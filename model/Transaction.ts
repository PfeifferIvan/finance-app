type TransactionType = "income" | "expense";

export enum Category {
  Credits = "Credits",
  Services = "Services",
  Personal = "Personal",
  Savings = "Savings",
  Other = "Other",
  Payroll = "Payroll",
}

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  description: string;
  date: Date;
  category: Category;
}
