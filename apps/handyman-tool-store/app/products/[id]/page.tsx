'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, ShoppingCart, ArrowLeft } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getProductById } from '@/lib/product.dal';
import { useCart } from '@/lib/cart-context';

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);

  // Resolve params
  if (!resolvedParams) {
    params.then(setResolvedParams);
  }

  if (!resolvedParams) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  const product = getProductById(resolvedParams.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
              <p className="text-muted-foreground mb-6">The product you&apos;re looking for doesn&apos;t exist.</p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                <ArrowLeft size={20} />
                Back to Products
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Back Link */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold mb-8"
          >
            <ArrowLeft size={20} />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden h-96 md:h-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="text-sm bg-blue-600/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full">
                  {product.category === 'power-tools'
                    ? 'Power Tools'
                    : product.category === 'hand-tools'
                      ? 'Hand Tools'
                      : 'Chainsaws'}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={
                        i < Math.round(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-slate-400 dark:text-slate-600'
                      }
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">${product.price.toFixed(2)}</p>
              </div>

              <p className="text-foreground text-lg mb-8">{product.description}</p>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-foreground mb-4">Specifications</h3>
                <ul className="space-y-2">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="text-foreground flex items-center gap-2">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4">
                <div className="flex items-center border border-border rounded-lg bg-card dark:bg-slate-900">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 text-foreground hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    −
                  </button>
                  <span className="px-6 py-3 font-semibold border-l border-r border-border text-foreground">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 text-foreground hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-lg transition ${
                    added
                      ? 'bg-green-600 text-white'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  <ShoppingCart size={20} />
                  {added ? 'Added to Cart!' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
