import ProductCard from "@/components/product-card";
import { Product } from "@/types";
import products from "@/data/products.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Кредити</h1>
          <p className="text-gray-500 mt-2">
            Знайдено {products.length} пропозицій від провідних банків України
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(products as Product[]).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
