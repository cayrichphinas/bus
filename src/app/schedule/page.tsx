import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-[url('/image/h1.jpg')] text-white animate-background-zoom">
      {/* Header */}
      <header className="flex justify-between items-center p-4 sm:px-8 border-b border-gray-700">
        <div className="flex items-center">
          <Image
            src="/image/j1-removebg-preview.png"
            alt="Bus Service Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
        <div className="flex gap-4 text-sm hidden sm:flex">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/bus" className="hover:underline">Bus Ticketing</Link>
          <Link href="/schedule" className="hover:underline">Bus Schedule</Link>
          <Link href="/contact" className="hover:underline">Contact Us</Link>
          <Link href="/aboutus" className="hover:underline">About Us</Link>
          <Link href="/login" className="hover:underline">Login</Link>
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

      {/* Login Form Section */}
      <section className="flex-1 flex items-center justify-center px-4 sm:px-16 py-10 bg-gray-900 bg-opacity-60">
        <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-xl p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-1 text-sm">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-sm">Password</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="text-right text-sm">
              <Link href="/forgot-password" className="text-blue-400 hover:underline">Forgot Password?</Link>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition"
            >
              Login
            </button>
          </form>
          <p className="mt-6 text-center text-sm">
            Don’t have an account?{" "}
            <Link href="/register" className="text-blue-400 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-4 text-white">
        <p>&copy; 2025 Easy Bus. All rights reserved.</p>
      </footer>
    </div>
  );
}
