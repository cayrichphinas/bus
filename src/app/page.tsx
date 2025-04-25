import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-[url('/image/h1.jpg')] text-white animate-background-zoom">
      {/* Header */}
      <header className="flex justify-between items-center p-4 sm:px-8 border-b border-gray-700 bg-opacity-90 bg-black">
        <div className="flex items-center">
          <Image
            src="/image/j1-removebg-preview.png"
            alt="Bus Ticketing Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
        <nav className="hidden sm:flex gap-6 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/bus" className="hover:underline">Bus Ticketing</Link>
          <Link href="/schedule" className="hover:underline">Bus Schedule</Link>
          <Link href="/contact" className="hover:underline">Contact Us</Link>
          <Link href="/aboutus" className="hover:underline">About Us</Link>
          <Link href="/login" className="hover:underline">Login</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-green-900 bg-opacity-75 text-center py-6">
        <h1 className="text-2xl sm:text-4xl font-bold">Welcome to Cebu Bus Ticketing! 🚌</h1>
        <p className="mt-2 text-lg">Explore Cebu with ease - bus your ticketing now!</p>
      </section>

      {/* Main Content */}
      <main className="flex-1 flex justify-center items-center overflow-hidden py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl">
          {[
            { src: '/image/a.jpg', route: 'Cebu City to Carcar', link: '/route-details/mactan' },
            { src: '/image/c.jpg', route: 'Cebu City to Oslob', link: '/route-details/lapulapu' },
            { src: '/image/c1.jpg', route: 'Cebu City to Sunboan', link: '/route-details/talisay' },
            { src: '/image/c3.jpg', route: 'Cebu City to Tan-awan', link: '/ticket-booking' },
          ].map((bus, index) => (
            <div key={index} className="relative w-full bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <Image
                src={bus.src}
                alt={bus.route}
                className="w-full h-[300px] object-cover"
                width={300}
                height={200}
              />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xl font-semibold">{bus.route} 🌟</p>
                <Link href="/detailsview">
  <span className="mt-2 bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-400 transition transform hover:scale-105">
    View Route Details
  </span>
</Link>

              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-4">
        <p className="text-sm">&copy; 2025 Bus Ticketing System. Develop By: CHERRECA</p>
      </footer>
    </div>
  );
}
