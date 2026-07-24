'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { FilterSidebar } from '@/components/filter-sidebar';
import { getProducts, Category } from '@/lib/product.dal';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>(undefined);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const filteredProducts = getProducts(selectedCategory, priceRange);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-2 text-foreground">Our Products</h1>
          <p className="text-muted-foreground mb-8">
            Browse our collection of {filteredProducts.length} professional tools and equipment
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FilterSidebar
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                priceRange={priceRange}
                onPriceChange={setPriceRange}
              />
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-card p-8 rounded-lg shadow-md dark:shadow-slate-900 text-center">
                  <p className="text-muted-foreground text-lg">
                    No products found. Try adjusting your filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
