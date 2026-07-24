export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 dark:text-slate-400 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white dark:text-slate-100 font-semibold mb-4">About ToolShop</h3>
            <p className="text-sm">
              Your one-stop shop for professional handyman tools and equipment. Quality products at competitive prices.
            </p>
          </div>
          <div>
            <h3 className="text-white dark:text-slate-100 font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Shop All Products</a></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white dark:text-slate-100 font-semibold mb-4">Support</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition">Returns</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 dark:border-slate-800 pt-4 text-center text-sm">
          <p>&copy; 2024 ToolShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
