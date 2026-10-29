import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: 99 + i * 10,
  image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop",
}));

export default function ShopPage() {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="bg-gray-100 aspect-square">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <p className="font-bold text-gray-800">{p.name}</p>
                <p className="font-semibold text-[#FF6B00]">${p.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}