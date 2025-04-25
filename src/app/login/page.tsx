import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-[url('/image/h1.jpg')] text-white animate-background-zoom relative">
      {/* Color Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Header */}
      <header className="flex justify-between items-center p-4 sm:px-8 border-b border-gray-700 z-10 relative">
        <div className="flex items-center">
          <Image
            src="/image/j1-removebg-preview.png"
            alt="Bus Service Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
        <div className="hidden sm:flex gap-4 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/bus" className="hover:underline">Bus Ticketing</Link>
          <Link href="/Schedule" className="hover:underline">Bus Schedule</Link>
          <Link href="/contact" className="hover:underline">Contact Us</Link>
          <Link href="/aboutus" className="hover:underline">About Us</Link>
          <Link href="/login" className="hover:underline">Login</Link>
        </div>
      </header>

      {/* Login Section */}
      <section className="flex flex-col items-center justify-center flex-grow bg-opacity-60 bg-gradient-to-br p-6 sm:p-10 rounded-lg shadow-2xl transform transition-all duration-1000 z-10 relative">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 animate-fade-in-up text-white">Login to Your Account</h2>

        <form className="flex flex-col w-full max-w-md space-y-6 p-6 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-500">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full p-3 bg-gray-800 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className="w-full p-3 bg-gray-800 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-all duration-300 hover:scale-105"
          >
            Login
          </button>
        </form>

        {/* Registration Link */}
        <div className="mt-4 text-center animate-fade-in-up">
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup">
              <span className="text-blue-400 hover:underline">Sign up here</span>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
