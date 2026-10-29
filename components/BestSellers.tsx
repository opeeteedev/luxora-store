"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Heart, Eye, ShoppingBag, Star } from "lucide-react";

const products = [
  { id: "p001", name: "Modern Wooden Chair", category: "furniture", price: 129.00, originalPrice: null, rating: 5.0, reviewCount: 128, image: "/chair.jpg" },
  { id: "p002", name: "Minimalist Pendant Light", category: "lighting", price: 79.00, originalPrice: 99.00, rating: 5.0, reviewCount: 96, image: "/lamp.jpg" },
  { id: "p003", name: "Comfort Sofa", category: "furniture", price: 899.00, originalPrice: null, rating: 5.0, reviewCount: 156, image: "/sofa.jpg" },
  { id: "p004", name: "Round Coffee Table", category: "furniture", price: 149.00, originalPrice: null, rating: 5.0, reviewCount: 74, image: "/table.jpg" },
  { id: "p005", name: "Indoor Plant", category: "accessories", price: 49.00, originalPrice: null, rating: 5.0, reviewCount: 45, image: "/plant.jpg" },
];

const tabs = ["All", "Furniture", "Lighting", "Decor", "Accessories"];

export default function BestSellers({ onAddToCart }: { onAddToCart?: (p: any) => void }) {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? products
      : products.filter((p) => p.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">
      <h2 className="text-center text-2xl font-bold mb-6 uppercase">BEST SELLERS</h2>
      <div className="flex justify-center gap-6 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-medium ${activeTab === tab ? "text-[#FF6B00] border-b-2 border-[#FF6B00]" : "text-gray-500"}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {filtered.map((p) => (
          <div key={p.id} className="group">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src={p.image} alt={p.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw" className="object-cover" />
              {p.originalPrice && (
                <span className="absolute top-2 left-2 bg-[#FF6B00] text-white text-xs px-2 py-1 rounded">
                  Sale
                </span>
              )}
              <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white rounded-full p-2 shadow">
                  <Search className="w-4 h-4" />
                </button>
                <button className="bg-white rounded-full p-2 shadow">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="bg-white rounded-full p-2 shadow">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mt-3">{p.name}</h3>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#FF6B00] fill-[#FF6B00]" />
              ))}
              <span className="text-[#FF6B00] text-xs">({p.reviewCount})</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div>
                <span className="font-bold text-gray-900">${p.price.toFixed(2)}</span>
                {p.originalPrice && (
                  <span className="text-gray-400 text-sm line-through ml-2">
                    ${p.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <button
                onClick={() => onAddToCart?.(p)}
                className="border border-gray-300 rounded p-2"
              >
                <ShoppingBag className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}