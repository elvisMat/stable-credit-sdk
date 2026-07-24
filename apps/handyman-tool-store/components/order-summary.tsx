'use client';

interface OrderSummaryProps {
  subtotal: number;
  tax?: number;
  shipping?: number;
  onCheckout?: () => void;
  checkoutText?: string;
}

export function OrderSummary({
  subtotal,
  tax = 0,
  shipping = 0,
  onCheckout,
  checkoutText = 'Proceed to Checkout',
}: OrderSummaryProps) {
  const total = subtotal + tax + shipping;

  return (
    <div className="bg-card p-6 rounded-lg shadow-md dark:shadow-slate-900 h-fit">
      <h2 className="text-xl font-bold mb-6 text-foreground">Order Summary</h2>

      <div className="space-y-4 mb-6 pb-6 border-b border-border">
        <div className="flex justify-between text-foreground">
          <span>Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>

        {tax > 0 && (
          <div className="flex justify-between text-foreground">
            <span>Tax (estimated)</span>
            <span className="font-semibold">${tax.toFixed(2)}</span>
          </div>
        )}

        {shipping > 0 && (
          <div className="flex justify-between text-foreground">
            <span>Shipping</span>
            <span className="font-semibold">${shipping.toFixed(2)}</span>
          </div>
        )}
      </div>

      <div className="flex justify-between mb-6 text-lg">
        <span className="font-bold text-foreground">Total</span>
        <span className="font-bold text-blue-600 dark:text-blue-400 text-2xl">${total.toFixed(2)}</span>
      </div>

      {onCheckout && (
        <button
          onClick={onCheckout}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition"
        >
          {checkoutText}
        </button>
      )}
    </div>
  );
}
