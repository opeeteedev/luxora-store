"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BestSellers from "@/components/BestSellers";
import Footer from "@/components/Footer";


export default function Home() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const cartCount = cartItems.reduce((s, i) => s + i.quantity, 0);

  const handleAddToCart = (p: { id: number; name: string; price: number; image: string }) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === p.id);
      if (existing) {
        return prev.map((i) => (i.id === p.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { ...p, quantity: 1 }];
    });
  };

  return (
    <div>
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Hero />
      <Features />
      <BestSellers onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  );
}