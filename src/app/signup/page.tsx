import Image from "next/image";
import Link from "next/link";


export default function Signup() {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-[url('/image/h1.jpg')] text-white relative">
      {/* Color Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

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
      </header>

      {/* Signup Section */}
      <section className="flex flex-col items-center justify-center flex-grow bg-opacity-70 p-6 sm:p-10 z-10 relative">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-white">Create an Account</h2>

        {/* Signup Form */}
        <form className="flex flex-col w-full max-w-md space-y-6 p-6 rounded-lg shadow-lg bg-gradient-to-r from-green-500 to-blue-500">
          {/* Full Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your full name"
              className="w-full p-3 bg-gray-800 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 hover:scale-105 transition"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full p-3 bg-gray-800 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 hover:scale-105 transition"
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
              placeholder="Create a password"
              className="w-full p-3 bg-gray-800 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 hover:scale-105 transition"
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              placeholder="Re-enter your password"
              className="w-full p-3 bg-gray-800 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 hover:scale-105 transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 hover:scale-105 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{' '}
            <Link href="/login">
              <span className="text-yellow-300 hover:underline">Login here</span>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
