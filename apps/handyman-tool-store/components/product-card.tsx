import Link from 'next/link';
import { Product } from '@/lib/product.dal';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-card rounded-lg shadow-md dark:shadow-slate-900 overflow-hidden hover:shadow-xl transition-shadow">
        <div className="relative bg-slate-200 dark:bg-slate-700 h-48 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-foreground line-clamp-2 mb-2">
            {product.name}
          </h3>

          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>

          <div className="flex items-center gap-1 mb-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.round(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-400 dark:text-slate-600'}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
            <span className="text-xs bg-blue-600/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 px-2 py-1 rounded">
              {product.category === 'power-tools'
                ? 'Power Tools'
                : product.category === 'hand-tools'
                  ? 'Hand Tools'
                  : 'Chainsaws'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
