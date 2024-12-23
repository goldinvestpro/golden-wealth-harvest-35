import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="bg-navy-500 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gold-300 hover:text-gold-400 transition-colors">
            GoldInvestPro
          </Link>
          
          <div className="flex gap-8">
            <Link to="/shop" className="hover:text-gold-300 transition-colors">Shop</Link>
            <Link to="/wallet" className="hover:text-gold-300 transition-colors">Wallet</Link>
            <Link to="/blog" className="hover:text-gold-300 transition-colors">Blog</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};