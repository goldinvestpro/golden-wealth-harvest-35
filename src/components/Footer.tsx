import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-navy-500 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">GoldInvestPro</h3>
            <p className="text-gray-300">Your trusted partner in gold investment since 2024.</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold-300" />
                <a href="tel:+4915210755401" className="hover:text-gold-300 transition-colors">
                  +49 1521 0755401
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold-300" />
                <a href="tel:+4915210840824" className="hover:text-gold-300 transition-colors">
                  +49 1521 0840824
                </a>
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
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faqs" className="hover:text-gold-300 transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-300 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-gold-300 transition-colors">Security</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="hover:text-gold-300 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-gold-300 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/compliance" className="hover:text-gold-300 transition-colors">Compliance</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} GoldInvestPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};