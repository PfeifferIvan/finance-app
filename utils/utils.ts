import { Category, Transaction, TransactionType } from "@/model/Transaction";

export function amountFormater(amount: number) {
  return new Intl.NumberFormat("en-US").format(amount);
}

export function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

const validTransactionTypes: TransactionType[] = ["income", "expense"];

export function validateTransaction(input: Transaction): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (typeof input.id !== "string" || input.id.trim() === "") {
    errors.push("Invalid or missing ID.");
  }

  if (!validTransactionTypes.includes(input.type)) {
    errors.push("Invalid transaction type.");
  }

  if (
    typeof input.amount !== "number" ||
    isNaN(input.amount) ||
    input.amount <= 0
  ) {
    errors.push("Amount must be a positive number.");
  }

  if (
    typeof input.description !== "string" ||
    input.description.trim() === ""
  ) {
    errors.push("Description is required.");
  }

  if (!(input.date instanceof Date) || isNaN(input.date.getTime())) {
    errors.push("Invalid date.");
  }

  if (!Object.values(Category).includes(input.category)) {
    errors.push("Invalid category.");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
