import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-[url('/image/h1.jpg')] text-white animate-background-zoom">
      {/* Header */}
      <header className="flex justify-between items-center p-4 sm:px-8 border-b border-gray-700">
        <div className="flex items-center">
          <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-indigo-500">
            Cebu Sundrays
          </span>
          <div className="bus-logo-container ml-8 relative">
            <Image
              src="/image/j1-removebg-preview.png"
              alt="Cebu Sundrays Bus Logo"
              width={100}
              height={50}
              className="bus-logo animate-bus-drive"
            />
          </div>
        </div>
        <div className="flex gap-4 text-sm hidden sm:flex">
          <Link href="/" className="hover:text-pink-400 transition-colors">Home</Link>
          <Link href="/bus" className="hover:text-pink-400 transition-colors">Bus Ticketing</Link>
          <Link href="/schedule" className="hover:text-pink-400 transition-colors">Bus Schedule</Link>
          <Link href="/contact" className="hover:text-pink-400 transition-colors">Contact Us</Link>
          <Link href="/aboutus" className="hover:text-pink-400 transition-colors">About Us</Link>
          <Link href="/login" className="hover:text-pink-400 transition-colors">Login</Link>
        </div>
      </header>

      {/* About Us Section */}
      <section className="bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-800 bg-opacity-80 py-16 text-center px-8">
        <h3 className="text-4xl font-extrabold text-white mb-6 text-shadow">About Cebu Sundrays</h3>
        <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
          Cebu Sundrays is dedicated to providing safe, reliable, and comfortable bus travel services across the beautiful island of Cebu.
          We strive to offer the best transportation experience with modern amenities, excellent customer service, and a commitment to safety and efficiency.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold text-white mb-3">Our Mission</h4>
            <p className="text-gray-300">To connect communities with efficient, affordable, and sustainable transport solutions.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold text-white mb-3">Our Vision</h4>
            <p className="text-gray-300">To be Cebu’s leading bus service, offering comfort, convenience, and safety for all travelers.</p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-10 px-8 text-center">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["/image/a.jpg", "/image/c.jpg", "/image/c1.jpg"].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              <Image src={src} alt={`Bus ${index + 1}`} width={400} height={250} className="w-full h-60 object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-4 mt-10">
        <p className="text-sm">&copy; 2025 Cebu Sundrays. All rights reserved.</p>
      </footer>
    </div>
  );
}
