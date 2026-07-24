'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CartItemComponent } from '@/components/cart-item';
import { OrderSummary } from '@/components/order-summary';
import { useCart } from '@/lib/cart-context';

export default function CartPage() {
  const { items, totalPrice } = useCart();

  const handleCheckout = () => {
    if (items.length > 0) {
      window.location.href = '/checkout';
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Shopping Cart</h1>

          {items.length === 0 ? (
            <div className="bg-card p-12 rounded-lg shadow-md dark:shadow-slate-900 text-center mb-8">
              <p className="text-muted-foreground text-lg mb-6">Your cart is empty</p>
              <Link
                href="/products"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <CartItemComponent key={item.product.id} item={item} />
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <OrderSummary subtotal={totalPrice} onCheckout={handleCheckout} />
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
