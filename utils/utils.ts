export function amountFormater(amount: number) {
  return new Intl.NumberFormat("en-US").format(amount);
}
