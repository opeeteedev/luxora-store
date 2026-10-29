import { Gem, Globe, Mail, Camera, Play } from "lucide-react";

const shopLinks = ["Furniture", "Lighting", "Decor", "Accessories", "New Arrivals"];
const supportLinks = ["Contact Us", "FAQs", "Shipping & Returns", "Track Order", "Privacy Policy"];

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold mb-3">
            <Gem className="text-[#FF6B00]" />
            <span>LUXORA STORE</span>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Elevating your everyday style with premium, modern designs crafted for comfort and quality.
          </p>
          <div className="flex gap-4">
            <Globe className="w-5 h-5 cursor-pointer hover:text-[#FF6B00]" />
            <Mail className="w-5 h-5 cursor-pointer hover:text-[#FF6B00]" />
            <Camera className="w-5 h-5 cursor-pointer hover:text-[#FF6B00]" />
            <Play className="w-5 h-5 cursor-pointer hover:text-[#FF6B00]" />
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-3">Shop</h3>
          <ul className="space-y-2">
            {shopLinks.map((l) => (
              <li key={l} className="text-gray-300 text-sm hover:text-[#FF6B00] cursor-pointer">
                {l}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Support</h3>
          <ul className="space-y-2">
            {supportLinks.map((l) => (
              <li key={l} className="text-gray-300 text-sm hover:text-[#FF6B00] cursor-pointer">
                {l}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Newsletter</h3>
          <p className="text-gray-300 text-sm mb-3">Subscribe for exclusive offers.</p>
          <div className="flex">
            <input type="email" placeholder="Email" className="flex-1 px-3 py-2 rounded-l text-gray-800" />
            <button className="bg-[#FF6B00] px-4 py-2 rounded-r font-semibold">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-700 pt-8 mt-8 text-sm text-gray-400">
        © 2024 LUXORA STORE. All rights reserved.
      </div>
    </footer>
  );
}