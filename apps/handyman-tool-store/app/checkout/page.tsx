"use client";
import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useCart } from "@/lib/cart-context";
import { CheckCircle2, CreditCard, Coins, AdIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StableCreditButton } from "stable-credit-react";
export default function CheckoutPage() {
  const { totalPrice, items, clearCart } = useCart();

  const [paymentMethod, setPaymentMethod] = useState<"stablecredit" | "card">(
    "stablecredit"
  );

  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const tax = totalPrice * 0.08;
  const shipping = totalPrice > 100 ? 0 : 10;
  const total = totalPrice + tax + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    // Dummy payment
    setOrderPlaced(true);

    clearCart();

    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Your cart is empty
            </p>

            <Link
              href="/products"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-1 flex items-center justify-center">
          <div className="bg-card border border-border rounded-2xl p-10 text-center max-w-md">
            <CheckCircle2 size={64} className="mx-auto text-green-500 mb-5" />

            <h1 className="text-3xl font-bold mb-3">Order Confirmed</h1>

            <p className="text-muted-foreground">
              Your order has been successfully placed.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-10">Checkout</h1>

        <form
          onSubmit={handlePlaceOrder}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* LEFT */}

          <div className="lg:col-span-2 space-y-8">
            {/* Shipping */}

            <section className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-6">
                Delivery Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  ["firstName", "First name"],
                  ["lastName", "Last name"],
                  ["email", "Email"],
                  ["phone", "Phone"],
                  ["address", "Street address"],
                  ["city", "City"],
                  ["state", "State"],
                  ["zipCode", "ZIP Code"],
                ].map(([name, placeholder]) => (
                  <input
                    key={name}
                    name={name}
                    placeholder={placeholder}
                    value={(formData as any)[name]}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 rounded-xl border border-border bg-background text-foreground outline-none focus:ring-2 focus:ring-primary"
                  />
                ))}
              </div>
            </section>

            {/* Payment */}

            <section className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-6">Payment Method</h2>

              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("stablecredit")}
                  className={`w-full text-left rounded-xl border p-5 transition ${
                    paymentMethod === "stablecredit"
                      ? "border-primary bg-primary/10"
                      : "border-border"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Coins />

                    <div>
                      <p className="font-semibold">
                        Get it on credit with StableCredit
                      </p>

                      <p className="text-sm text-muted-foreground">
                        Get it now and pay for it later
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`w-full text-left rounded-xl border p-5 transition ${
                    paymentMethod === "card"
                      ? "border-primary bg-primary/10"
                      : "border-border"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <CreditCard />

                    <div>
                      <p className="font-semibold">Credit / Debit Card</p>

                      <p className="text-sm text-muted-foreground">
                        Visa or Mastercard
                      </p>
                    </div>
                  </div>
                </button>
              </div>

              {paymentMethod === "stablecredit" && (
                <div className="mt-6 rounded-xl bg-muted p-5 space-y-3">
                  <div className="flex justify-between">
                    <span>Payment</span>

                    <strong>StableCredit</strong>
                  </div>

                  <div className="flex justify-between">
                    <span>Amount</span>

                    <strong>{total.toFixed(2)} SC</strong>
                  </div>
                </div>
              )}

              {paymentMethod === "card" && (
                <div className="border-1  my-2 p-4 rounded  flex justify-between">
                  Support comming soon <AdIcon />
                </div>
                // <div className="mt-6 space-y-4">
                //   <input
                //     placeholder="Card number"
                //     className="w-full px-4 py-3 rounded-xl border"
                //   />

                //   <div className="grid grid-cols-2 gap-4">
                //     <input
                //       placeholder="MM/YY"
                //       className="px-4 py-3 rounded-xl border border-border bg-background"
                //     />

                //     <input
                //       placeholder="CVV"
                //       className="px-4 py-3 rounded-xl border border-border bg-background"
                //     />
                //   </div>
                // </div>
              )}
            </section>

            <Button
              disabled={paymentMethod !== "stablecredit"}
              title=""
              className="w-full py-5"
            >
              {paymentMethod === "stablecredit"
                ? "Pay with StableCredit"
                : "Place Order"}
            </Button>
            <StableCreditButton className="w-full py-5 bg-primary text-primary-foreground hover:bg-primary/90" amount={total} currency="USDC" >
             Pay with StableCredit
            </StableCreditButton>
          </div>

          {/* SUMMARY */}

          <aside className="lg:col-span-1">
            <div className="sticky top-6 bg-card border border-border rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex justify-between text-sm"
                  >
                    <span>
                      {item.product.name}X{item.quantity}
                    </span>

                    <span className="font-semibold">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}

                <hr className="border-border" />

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <hr className="border-border" />

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>

                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </aside>
        </form>
      </main>

      <Footer />
    </div>
  );
}
