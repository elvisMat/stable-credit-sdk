import Link from 'next/link';
import { Wrench, Zap, Package } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { getProducts } from '@/lib/product.dal';

export const metadata = {
  title: 'ToolShop - Professional Handyman Tools',
  description: 'Quality tools and equipment for contractors and DIY enthusiasts',
};

export default function Home() {
  const featuredProducts = getProducts().slice(0, 3);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Professional Tools for Every Job</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              From chainsaws to power drills, find everything you need for your next project at unbeatable prices.
            </p>
            <Link
              href="/products"
              className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
            >
              Shop Now
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-card">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose ToolShop?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600/10 dark:bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Quality Products</h3>
                <p className="text-muted-foreground">
                  All our tools are carefully selected and tested for durability and performance.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600/10 dark:bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Fast Shipping</h3>
                <p className="text-muted-foreground">
                  Get your tools quickly with our reliable and efficient delivery service.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600/10 dark:bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Expert Support</h3>
                <p className="text-muted-foreground">
                  Our knowledgeable team is here to help you find the right tool for your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-foreground">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/products"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
