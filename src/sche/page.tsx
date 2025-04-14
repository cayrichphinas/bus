import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-[url('/image/h1.jpg')] text-white animate-background-zoom">
      {/* Header */}
      <header className="flex justify-between items-center p-4 sm:px-8 border-b border-gray-700">
        <div className="flex items-center">
          <Image
            src="/image/j1-removebg-preview.png" // Replace with your bus service logo
            alt="Bus Service Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
        <div className="flex gap-4 text-sm hidden sm:flex">
          <a href="/" className="hover:underline">Home</a>
          <a href="/bus" className="hover:underline">Bus Ticketing</a>
          <a href="/schedule" className="hover:underline">Bus Schedule</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
          <a href="/aboutus" className="hover:underline">About Us</a>
          <a href="/login" className="hover:underline">Login</a>
        </div>
        {/* Search Bar */}
        <div className="flex items-center border border-gray-600 rounded-md px-4 py-1">
          <input
            type="text"
            placeholder="Search for routes..."
            className="bg-transparent text-white placeholder-gray-400 outline-none"
          />
        </div>
      </header>

      {/* Message Section */}
      <section className="bg-blue-900 bg-opacity-50 text-center py-5">
        <p className="text-sm sm:text-xl font-medium mb-0">
          Welcome to Easy Bus! 🚍 Explore our routes, book tickets online, and travel comfortably. Your journey starts here!
        </p>
      </section>

      {/* Bus Schedule Section */}
      <section className="flex-1 py-10 px-4 sm:px-16 bg-gray-900 bg-opacity-60">
        <h2 className="text-center text-3xl font-bold mb-6"> Sundrays in Cebu City</h2>

        {/* Bus Schedule Table */}
        <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-lg">
          <table className="min-w-full table-auto text-left text-white">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-4 py-2">Route</th>
                <th className="px-4 py-2">Departure</th>
                <th className="px-4 py-2">Arrival</th>
                <th className="px-4 py-2">Duration</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample schedule rows */}
              <tr className="bg-gray-600 hover:bg-gray-700">
                <td className="px-4 py-2">Cebu City - Mactan</td>
                <td className="px-4 py-2">07:00 AM</td>
                <td className="px-4 py-2">07:45 AM</td>
                <td className="px-4 py-2">45m</td>
                <td className="px-4 py-2 text-green-400">On Time</td>
              </tr>
              <tr className="bg-gray-600 hover:bg-gray-700">
                <td className="px-4 py-2">Cebu City - Lapu-Lapu</td>
                <td className="px-4 py-2">09:00 AM</td>
                <td className="px-4 py-2">09:40 AM</td>
                <td className="px-4 py-2">40m</td>
                <td className="px-4 py-2 text-yellow-400">Delayed</td>
              </tr>
              <tr className="bg-gray-600 hover:bg-gray-700">
                <td className="px-4 py-2">Cebu City - Consolacion</td>
                <td className="px-4 py-2">11:00 AM</td>
                <td className="px-4 py-2">11:50 AM</td>
                <td className="px-4 py-2">50m</td>
                <td className="px-4 py-2 text-green-400">On Time</td>
              </tr>
              <tr className="bg-gray-600 hover:bg-gray-700">
                <td className="px-4 py-2">Cebu City - Talisay</td>
                <td className="px-4 py-2">01:00 PM</td>
                <td className="px-4 py-2">01:30 PM</td>
                <td className="px-4 py-2">30m</td>
                <td className="px-4 py-2 text-green-400">On Time</td>
              </tr>
              {/* More rows can be added here */}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-4 text-white">
        <p>&copy; 2025 Easy Bus. All rights reserved.</p>
      </footer>
    </div>
  );
}
