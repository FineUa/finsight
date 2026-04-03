import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

// Format currency in Ukrainian hryvnia
function formatAmount(amount: number): string {
  return amount.toLocaleString("uk-UA") + " ₴";
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
          <p className="text-sm text-gray-500 mt-0.5">{product.bank}</p>
        </div>
        <span className="shrink-0 bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full">
          Кредит
        </span>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>

      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-50">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide">Ставка</p>
          <p className="text-2xl font-bold text-blue-600 mt-0.5">
            {product.interestRate}%
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide">Термін</p>
          <p className="text-xl font-semibold text-gray-800 mt-0.5">
            {product.termMonths} міс.
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide">Мін. сума</p>
          <p className="text-sm font-medium text-gray-700 mt-0.5">
            {formatAmount(product.minAmount)}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide">Макс. сума</p>
          <p className="text-sm font-medium text-gray-700 mt-0.5">
            {formatAmount(product.maxAmount)}
          </p>
        </div>
      </div>

      <button className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-xl transition-colors">
        Детальніше
      </button>
    </div>
  );
}
