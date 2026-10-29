import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold mb-4">About LUXORA</h1>
        <p className="text-gray-600 text-lg max-w-2xl">
          LUXORA is a premium furniture and lifestyle brand dedicated to elevating your everyday style with modern designs crafted for comfort, quality, and timeless elegance.
        </p>
      </main>
      <Footer />
    </div>
  );
}