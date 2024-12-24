import { Link } from "react-router-dom";
import { UserRound, Menu, Phone, Mail, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-navy-500 text-white">
      {/* Top Bar */}
      <div className="bg-navy-400 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 text-sm">
              <a href="tel:+18001234567" className="flex items-center hover:text-gold-300">
                <Phone className="h-4 w-4 mr-1" />
                1-800-123-4567
              </a>
              <a href="mailto:info@goldinvestpro.com" className="flex items-center hover:text-gold-300">
                <Mail className="h-4 w-4 mr-1" />
                info@goldinvestpro.com
              </a>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="hidden md:flex items-center space-x-4">
                <a href="#" className="hover:text-gold-300">Market Updates</a>
                <a href="#" className="hover:text-gold-300">Support</a>
                <a href="#" className="hover:text-gold-300">Contact</a>
              </div>
              <Link 
                to="/profile" 
                className="hover:text-gold-300 transition-colors flex items-center gap-2 ml-4"
              >
                <UserRound size={20} />
                <span>Profile</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="py-4 border-b border-navy-400">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-gold-300 hover:text-gold-400 transition-colors">
              GoldInvestPro
            </Link>
            
            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products, articles..."
                  className="w-full py-2 px-4 pl-10 bg-navy-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-300"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
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
              <Button className="bg-gold-300 text-navy-500 hover:bg-gold-400">
                Start Investing
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-navy-500 flex-col items-center gap-4 py-4 border-t border-navy-400 z-50`}>
          <div className="w-full px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products, articles..."
                className="w-full py-2 px-4 pl-10 bg-navy-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-300"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <Link to="/shop" className="hover:text-gold-300 transition-colors">Shop</Link>
          <Link to="/wallet" className="hover:text-gold-300 transition-colors">Wallet</Link>
          <Link to="/blog" className="hover:text-gold-300 transition-colors">Blog</Link>
          <Button className="bg-gold-300 text-navy-500 hover:bg-gold-400 w-[calc(100%-2rem)]">
            Start Investing
          </Button>
        </div>
      </nav>
    </div>
  );
};