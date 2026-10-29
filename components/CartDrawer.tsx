"use client";

import { X } from "lucide-react";

export default function CartDrawer({
  open,
  onClose,
  items,
}: {
  open: boolean;
  onClose: () => void;
  items?: any[];
}) {
  if (!items) return null;
  if (!open) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold">Your Cart</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 p-4">
          <p className="text-gray-500">Your cart is currently empty.</p>
        </div>
      </div>
    </>
  );
}