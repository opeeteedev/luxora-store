import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <form className="max-w-lg flex flex-col gap-4">
          <input type="text" placeholder="Name" className="border border-gray-300 rounded px-4 py-2" />
          <input type="email" placeholder="Email" className="border border-gray-300 rounded px-4 py-2" />
          <textarea placeholder="Message" rows={5} className="border border-gray-300 rounded px-4 py-2" />
          <button type="submit" className="bg-[#FF6B00] text-white px-8 py-3 font-semibold hover:bg-orange-600 w-fit">
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}