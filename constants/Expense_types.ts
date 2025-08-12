import { Category } from "@/model/Transaction";

export const EXPENSE_TYPES: Category[] = [
  Category.Credits,
  Category.Other,
  Category.Personal,
  Category.Savings,
  Category.Services,
];

export const INCOME_TYPES: Category[] = [Category.Payroll];
