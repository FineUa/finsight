import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductCard from "@/components/product-card";
import { Product } from "@/types";

const mockProduct: Product = {
  id: "1",
  name: "Кредит на все",
  bank: "ПриватБанк",
  type: "credit",
  interestRate: 19.9,
  minAmount: 1000,
  maxAmount: 200000,
  termMonths: 60,
  description: "Споживчий кредит без застави для будь-яких потреб",
};

describe("ProductCard", () => {
  it("відображає назву продукту", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("Кредит на все")).toBeInTheDocument();
  });

  it("відображає назву банку", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("ПриватБанк")).toBeInTheDocument();
  });

  it("відображає відсоткову ставку", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("19.9%")).toBeInTheDocument();
  });
});
