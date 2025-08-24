import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold mb-4">
          Pure Water, Pure Trust
        </motion.h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Leading producers of sachet water and providers of world-class water purification solutions.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-2xl shadow-lg hover:bg-gray-100">
          Contact Us
        </button>
      </section>

      {/* About Us */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          We specialize in the production of high-quality sachet water and the sale of advanced water purification equipment, including reverse osmosis machines for treating borehole and saline water. Our mission is to ensure safe and affordable drinking water for everyone.
        </p>
      </section>

      {/* Products */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl shadow-md bg-white p-6 text-center">
            <img src="https://images.unsplash.com/photo-1581090700227-4c4e1cddf91d" alt="Sachet Water" className="w-full h-64 object-cover rounded-xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sachet Water</h3>
            <p className="text-gray-600">Refreshing and purified water, hygienically packaged for your convenience.</p>
          </div>
          <div className="rounded-2xl shadow-md bg-white p-6 text-center">
            <img src="https://images.unsplash.com/photo-1581092334685-fd1a2d2c95e7" alt="RO Machine" className="w-full h-64 object-cover rounded-xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Reverse Osmosis Machines</h3>
            <p className="text-gray-600">Advanced purification systems for treating borehole and saline water.</p>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl shadow-md bg-white p-6">
              <div className="flex text-yellow-500 mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 mb-4">“Excellent service and top-quality water. Highly recommended!”</p>
              <h4 className="font-semibold">Customer {i}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 md:px-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-6">For inquiries or orders, reach us at:</p>
        <p className="font-semibold text-lg">📞 +233 55 358 0474</p>
        <p className="font-semibold text-lg">✉️ info@yourcompany.com</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
