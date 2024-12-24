import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-navy-500 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">GoldInvestPro</h3>
            <p className="text-gray-300">Your trusted partner in gold investment since 2010. Building wealth through precious metals expertise.</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold-300" />
                <a href="tel:+18001234567" className="hover:text-gold-300 transition-colors">
                  1-800-123-4567
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold-300" />
                <a href="mailto:info@goldinvestpro.com" className="hover:text-gold-300 transition-colors">
                  info@goldinvestpro.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold-300" />
                <span>123 Investment Ave, New York, NY</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gold-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-gold-300 transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/wallet" className="hover:text-gold-300 transition-colors">Wallet</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-gold-300 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-300 transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Investment Resources */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Investment Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/market-updates" className="hover:text-gold-300 transition-colors">Market Updates</Link>
              </li>
              <li>
                <Link to="/investment-guides" className="hover:text-gold-300 transition-colors">Investment Guides</Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-gold-300 transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/education" className="hover:text-gold-300 transition-colors">Education Center</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gold-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gold-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gold-300 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-navy-400 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-gold-300"
                />
                <button className="bg-gold-300 text-navy-500 px-4 py-2 rounded-r-md hover:bg-gold-400 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-center md:text-left text-gray-400">
              © {new Date().getFullYear()} GoldInvestPro. All rights reserved.
            </div>
            <div className="flex justify-center md:justify-end space-x-4 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-gold-300 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-gold-300 transition-colors">Terms of Service</Link>
              <Link to="/disclaimer" className="hover:text-gold-300 transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};