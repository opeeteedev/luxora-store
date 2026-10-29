import Link from "next/link";
import { Gem, Search, User, Heart, ShoppingCart, ChevronDown } from "lucide-react";

export default function Navbar({ cartCount = 3, onCartOpen }: { cartCount?: number; onCartOpen?: () => void }) {
  return (
    <header>
      <div className="w-full bg-[#FF6B00] text-white text-center text-xs uppercase tracking-widest py-2">
        FREE SHIPPING on all orders over $50
      </div>
      <nav className="sticky top-0 z-50 bg-white flex items-center justify-between px-6 py-4 shadow-sm">
        <Link href="/" className="flex flex-col items-start font-bold leading-tight">
          <span className="flex items-center gap-2">
            <Gem className="text-[#FF6B00]" />
            LUXORA
          </span>
          <span className="text-xs font-normal ml-7">STORE</span>
        </Link>
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link href="/" className="text-sm hover:text-[#FF6B00] transition-colors">
              Home
            </Link>
          </li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-[#FF6B00]">
            <Link href="/shop" className="text-sm">
              Shop
            </Link>
            <ChevronDown className="w-4 h-4" />
          </li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-[#FF6B00]">
            <Link href="/shop" className="text-sm">
              Categories
            </Link>
            <ChevronDown className="w-4 h-4" />
          </li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-[#FF6B00]">
            <Link href="/shop" className="text-sm">
              Pages
            </Link>
            <ChevronDown className="w-4 h-4" />
          </li>
          <li>
            <Link href="/about" className="text-sm hover:text-[#FF6B00] transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-sm hover:text-[#FF6B00] transition-colors">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 cursor-pointer hover:text-[#FF6B00]" />
          <User className="w-5 h-5 cursor-pointer hover:text-[#FF6B00]" />
          <Heart className="w-5 h-5 cursor-pointer hover:text-[#FF6B00]" />
          <div className="relative">
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-[#FF6B00]" onClick={onCartOpen} />
            <span className="absolute -top-2 -right-2 bg-[#FF6B00] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}