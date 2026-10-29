import { Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";

const items = [
  { icon: Truck, title: "Free Shipping", subtitle: "On orders over $50" },
  { icon: ShieldCheck, title: "Premium Quality", subtitle: "100% satisfied guarantee" },
  { icon: RotateCcw, title: "Easy Returns", subtitle: "30-day return policy" },
  { icon: Headphones, title: "24/7 Support", subtitle: "Dedicated customer support" },
];

export default function Features() {
  return (
    <section className="border-y border-gray-200 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-8">
        {items.map(({ icon: Icon, title, subtitle }) => (
          <div key={title} className="flex items-center gap-4">
            <Icon className="text-gray-400 w-8 h-8" />
            <div>
              <p className="font-semibold text-gray-800">{title}</p>
              <p className="text-sm text-gray-500">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}