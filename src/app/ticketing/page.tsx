import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white font-sans">
      
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 shadow-lg">
        <div className="flex items-center gap-4">
          <Image
            src="/image/j1-removebg-preview.png"
            alt="Sundrays Logo"
            width={60}
            height={60}
            className="object-contain drop-shadow-lg"
          />
          <h1 className="text-3xl font-extrabold tracking-wider text-white drop-shadow">
            Sundrays Bus
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center text-center bg-cover bg-center bg-[url('/image/h1.jpg')] border-y border-gray-700 shadow-inner animate-background-zoom">
        <div className="bg-black/60 backdrop-blur-lg p-10 rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.1)] max-w-3xl mx-auto">
          <h2 className="text-5xl font-black mb-4 tracking-widest text-yellow-400 animate-pulse">
            Explore Cebu in Style
          </h2>
          <p className="text-lg text-gray-300">
            Reliable. Comfortable. Fast. The best rides across Cebu, only with Sundrays.
          </p>
        </div>
      </section>

      {/* Routes Section */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-16 px-8 bg-black/30">
        {[
          {
            img: "/image/a.jpg",
            route: "Cebu City to Carcar",
            link: "/route-details/carcar",
            qrcode: "/image/i.png",
          },
          {
            img: "/image/c.jpg",
            route: "Cebu City to Argao",
            link: "/route-details/argao",
            qrcode: "/image/i.png",
          },
          {
            img: "/image/t.jpg",
            route: "Cebu City to Oslob",
            link: "/route-details/oslob",
            qrcode: "/image/i.png",
          },
          {
            img: "/image/c.jpg",
            route: "Cebu City to Dalaguete",
            link: "/route-details/dalaguete",
            qrcode: "/image/i.png",
          },
          {
            img: "/image/c1.jpg",
            route: "Cebu City to Samboan",
            link: "/route-details/samboan",
            qrcode: "/image/i.png",
          },
          {
            img: "/image/c3.jpg",
            route: "Cebu City to Tan-awan",
            link: "/ticket-booking",
            qrcode: "/image/i.png",
          },
        ].map((bus, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-yellow-400/30 transition-all duration-300 group"
          >
            <Image
              src={bus.img}
              alt={bus.route}
              className="w-full h-[200px] object-cover transition-transform group-hover:scale-105 duration-300"
              width={400}
              height={250}
            />
            <div className="p-6 text-center space-y-4">
              <h3 className="text-2xl font-bold text-yellow-400">{bus.route}</h3>
              <Link href="/road">
                <button className="bg-yellow-400 hover:bg-yellow-300 text-black py-2 px-6 rounded-full font-bold shadow-md transition-all duration-300">
                  Bus Ticketing
                </button>
              </Link>

              {/* QR Code */}
              <div className="mt-6 bg-gray-900/60 border border-yellow-400 rounded-xl p-4 shadow-inner backdrop-blur-md hover:shadow-yellow-400/50 transition-shadow duration-300">
                <p className="text-sm font-semibold text-yellow-300">🚌 Sundrays Cebu City</p>
                <p className="text-xs text-gray-300 mb-3">📲 Scan this code before boarding</p>
                <Image
                  src={bus.qrcode}
                  alt="Sundrays Bus QR Code"
                  width={80}
                  height={80}
                  className="mx-auto border border-yellow-500 rounded-md shadow-md"
                />
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-800 to-purple-900 text-white text-center py-6">
        <p className="text-sm tracking-wide">
          &copy; 2025 Sundrays Bus Ticketing | All rights reserved.
        </p>
      </footer>
    </div>
  );
}
