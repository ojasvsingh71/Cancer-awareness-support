import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-pink-500" fill="currentColor" />
              <h3 className="text-xl font-bold">Cancer Awareness</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Supporting individuals and families through awareness, education, and community connection.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-pink-500" />
                <span>support@cancerawareness.org</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-pink-500" />
                <span>1-800-SUPPORT</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-pink-500" />
                <span>Available Nationwide</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-pink-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-pink-500 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  Support Groups
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  Educational Materials
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} Cancer Awareness & Support. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Together, we can make a difference in the fight against cancer.
          </p>
        </div>
      </div>
    </footer>
  );
}
