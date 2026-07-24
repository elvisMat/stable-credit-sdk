'use client';

import Link from 'next/link';
import { ShoppingCart, Home, Package } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  const { totalItems } = useCart();

  return (
    <header className="bg-blue-600 dark:bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold hover:opacity-90 transition">
            <Package size={28} />
            <span>ToolShop</span>
          </Link>

          <nav className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition">
              <Home size={20} />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link href="/products" className="flex items-center gap-2 hover:opacity-90 transition">
              <Package size={20} />
              <span className="hidden sm:inline">Products</span>
            </Link>
            <Link href="/cart" className="relative flex items-center gap-2 hover:opacity-90 transition">
              <ShoppingCart size={20} />
              <span className="hidden sm:inline">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
