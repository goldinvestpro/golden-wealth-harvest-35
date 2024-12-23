import { Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy-500 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <div className="flex flex-col items-center space-y-3">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-gold-300" />
              <a href="tel:+4915210755401" className="hover:text-gold-300 transition-colors">
                +49 1521 0755401
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-gold-300" />
              <a href="tel:+4915210840824" className="hover:text-gold-300 transition-colors">
                +49 1521 0840824
              </a>
            </div>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            © {new Date().getFullYear()} GoldInvestPro. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};