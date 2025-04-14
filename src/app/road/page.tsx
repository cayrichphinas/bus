import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-black text-white font-sans overflow-hidden">

      {/* Full Page Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/h1.jpg"
          alt="Sundrays Bus Background"
          fill
          className="object-cover opacity-20 blur-[2px]"
          priority
        />
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10">

        {/* Header */}
        <header className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 shadow-lg">
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
        <section className="relative h-[380px] flex items-center justify-center text-center bg-gradient-to-br from-gray-800/80 to-gray-950/80 shadow-inner">
          <div className="p-10 rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.1)] max-w-3xl mx-auto bg-black/60 backdrop-blur-lg">
            <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-widest text-sky-400 animate-pulse drop-shadow-lg">
              🚌 Cebu City to Oslob
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Fill up the ticketing form below to book your ride.
            </p>
          </div>
        </section>

        {/* Booking Form */}
        <main className="flex justify-center py-16 px-4">
          <form className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-3xl shadow-[0_0_40px_#00bfff33] w-full max-w-xl space-y-6">
            <h3 className="text-2xl font-bold text-sky-400 text-center mb-6">📝 Bus Ticketing Form</h3>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <input
              type="date"
              className="w-full p-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <input
              type="time"
              className="w-full p-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <input
              type="text"
              placeholder="Seat Number"
              className="w-full p-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full p-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />

            <button
              type="submit"
              className="w-full bg-sky-400 hover:bg-sky-300 text-black font-bold py-3 rounded-full transition duration-300 shadow-md"
            >
              Bus Ticketing
            </button>
          </form>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white text-center py-6">
          <p className="text-sm tracking-wide">
            &copy; 2025 Sundrays Bus Ticketing | All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
