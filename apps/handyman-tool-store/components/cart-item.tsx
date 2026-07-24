'use client';

import { X } from 'lucide-react';
import { CartItem as CartItemType } from '@/lib/cart-context';
import { useCart } from '@/lib/cart-context';

interface CartItemProps {
  item: CartItemType;
}

export function CartItemComponent({ item }: CartItemProps) {
  const { removeItem, updateQuantity } = useCart();

  return (
    <div className="bg-card p-4 rounded-lg shadow-sm dark:shadow-slate-900 border border-border flex gap-4">
      <div className="flex-shrink-0 w-24 h-24 bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-foreground mb-1">{item.product.name}</h3>
        <p className="text-muted-foreground text-sm mb-3">${item.product.price.toFixed(2)}</p>

        <div className="flex items-center gap-3">
          <button
            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
            className="px-2 py-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded text-sm font-semibold"
          >
            −
          </button>
          <span className="w-8 text-center font-semibold text-foreground">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
            className="px-2 py-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded text-sm font-semibold"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between">
        <button
          onClick={() => removeItem(item.product.id)}
          className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition"
        >
          <X size={20} />
        </button>
        <p className="text-xl font-bold text-foreground">
          ${(item.product.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
