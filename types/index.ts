export type ProductType = "credit" | "deposit" | "insurance";

export interface Product {
  id: string;
  name: string;
  bank: string;
  type: ProductType;
  interestRate: number;
  minAmount: number;
  maxAmount: number;
  termMonths: number;
  description: string;
}
