import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gradient-to-r from-indigo-700 to-purple-900 shadow-xl">
        <div className="flex items-center">
          <Image
            src="/image/j1-removebg-preview.png"
            alt="Bus Ticketing Logo"
            width={100}
            height={40}
            className="object-contain"
          />
        </div>
        <nav className="hidden sm:flex gap-6 text-lg font-medium">
          <Link href="/" className="hover:text-yellow-400 transition duration-300">Home</Link>
          <Link href="/bus" className="hover:text-yellow-400 transition duration-300">Bus Ticketing</Link>
          <Link href="/schedule" className="hover:text-yellow-400 transition duration-300">Bus Schedule</Link>
          <Link href="/contact" className="hover:text-yellow-400 transition duration-300">Contact Us</Link>
          <Link href="/aboutus" className="hover:text-yellow-400 transition duration-300">About Us</Link>
          <Link href="/login" className="hover:text-yellow-400 transition duration-300">Login</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center text-center bg-cover bg-center bg-[url('/image/g.png')]">
        <div className="bg-black bg-opacity-60 p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold mb-4 tracking-wide">Explore Cebu with Comfort & Ease</h1>
          <p className="text-lg">Fast, Reliable, and Comfortable Bus Rides Across Cebu</p>
        </div>
      </section>

      {/* Bus Routes Section */}
      <main className="flex flex-wrap justify-center gap-8 py-12 px-6">
        {[{
          img: "/image/a.jpg",
          route: "Cebu City to Carcar",
          link: "/route-details/mactan"
        }, {
          img: "/image/c.jpg",
          route: "Cebu City to Argao",
          link: "/route-details/lapulapu"
        }, {
            img: "/image/t.jpg",
            route: "Cebu City to Oslob",
            link: "/route-details/lapulapu"
        }, {
            img: "/image/c.jpg",
            route: "Cebu City to Dalaugete",
            link: "/route-details/lapulapu"
        
        }, {
          img: "/image/c1.jpg",
          route: "Cebu City to Sunboan",
          link: "/route-details/talisay"
        }, {
          img: "/image/c3.jpg",
          route: "Cebu City to Tan-awan",
          link: "/ticket-booking"
        }].map((bus, index) => (
          <div key={index} className="w-full sm:w-1/4 bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-500">
            <Image src={bus.img} alt={bus.route} className="w-full h-[250px] object-cover" width={400} height={250} />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-3">{bus.route}</h3>
              <Link href="/ticketing">
                <button className="bg-yellow-500 text-black py-3 px-8 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300 shadow-md">
                  View Route Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </main>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-700 to-purple-900 text-white text-center py-6 mt-6">
        <p className="text-sm">&copy; 2025 Cebu Sundrays Bus Ticketing. All rights reserved.</p>
      </footer>
    </div>
  );
}
