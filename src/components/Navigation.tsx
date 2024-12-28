import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-navy-500 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gold-300 hover:text-gold-400 transition-colors">
            GoldInvestPro
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="hover:text-gold-300 transition-colors">Shop</Link>
            <Link to="/wallet" className="hover:text-gold-300 transition-colors">Wallet</Link>
            <Link to="/blog" className="hover:text-gold-300 transition-colors">Blog</Link>
          </div>

          {/* Mobile menu */}
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-navy-500 flex-col items-center gap-4 py-4 border-t border-white/10`}>
            <Link to="/shop" className="hover:text-gold-300 transition-colors">Shop</Link>
            <Link to="/wallet" className="hover:text-gold-300 transition-colors">Wallet</Link>
            <Link to="/blog" className="hover:text-gold-300 transition-colors">Blog</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};