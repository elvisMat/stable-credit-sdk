'use client';

import { Category } from '@/lib/product.dal';

interface FilterSidebarProps {
  selectedCategory: Category | undefined;
  onCategoryChange: (category: Category | undefined) => void;
  priceRange: { min: number; max: number };
  onPriceChange: (range: { min: number; max: number }) => void;
}

const categories = [
  { id: 'power-tools' as const, label: 'Power Tools' },
  { id: 'hand-tools' as const, label: 'Hand Tools' },
  { id: 'chainsaws' as const, label: 'Chainsaws' },
];

export function FilterSidebar({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
}: FilterSidebarProps) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-md dark:shadow-slate-900 h-fit">
      <h2 className="text-xl font-bold mb-6 text-foreground">Filters</h2>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-foreground">Category</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === undefined}
              onChange={() => onCategoryChange(undefined)}
              className="w-4 h-4"
            />
            <span className="text-foreground">All Categories</span>
          </label>
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.id}
                onChange={() => onCategoryChange(cat.id)}
                className="w-4 h-4"
              />
              <span className="text-foreground">{cat.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">Price Range</h3>
        <div className="space-y-3">
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Min: ${priceRange.min}</label>
            <input
              type="range"
              min="0"
              max="1000"
              step="50"
              value={priceRange.min}
              onChange={(e) => onPriceChange({ ...priceRange, min: Number(e.target.value) })}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Max: ${priceRange.max}</label>
            <input
              type="range"
              min="0"
              max="1000"
              step="50"
              value={priceRange.max}
              onChange={(e) => onPriceChange({ ...priceRange, max: Number(e.target.value) })}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
