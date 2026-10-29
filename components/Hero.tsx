import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center overflow-hidden bg-white">
      {/* Background Image */}
      <Image
        src="/hero-clean.jpg"
        alt="Luxora Collection"
        fill
        priority
        className="object-cover object-right md:object-center"
      />

      {/* White Gradient Overlay (Fades the left side to white) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent w-full md:w-3/4" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16">
        <div className="max-w-lg">
          <p className="text-[#FF6B00] font-bold tracking-widest text-sm mb-4">
            NEW COLLECTION 2024
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Elevate Your <br /> Everyday Style
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover modern designs crafted for comfort, quality, and style.
          </p>
          <button className="bg-[#FF6B00] text-white px-8 py-3 font-semibold hover:bg-orange-600 transition-colors">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="absolute top-1/2 -translate-y-1/2 left-4 z-20 bg-white shadow-md rounded-full p-2 hover:bg-gray-100">
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button className="absolute top-1/2 -translate-y-1/2 right-4 z-20 bg-white shadow-md rounded-full p-2 hover:bg-gray-100">
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </section>
  );
}