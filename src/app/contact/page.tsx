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
      </header>

      {/* Message Section */}
      <section className="bg-blue-900 bg-opacity-50 text-center py-5">
        <p className="text-sm sm:text-xl font-medium mb-0">
          Welcome to Easy Bus! 🚍 Explore our routes, book tickets online, and travel comfortably. Your journey starts here!
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="flex-1 py-10 px-4 sm:px-16  bg-opacity-60">
        <div className="flex justify-center items-center">
          {/* Form Box with Aesthetic Colors */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-8 rounded-lg shadow-lg w-full sm:w-1/2">
            <h2 className="text-center text-3xl font-bold text-white mb-6">Contact Us</h2>

            {/* Contact Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Send
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-4 text-white">
        <p>&copy; 2025 Easy Bus. All rights reserved.</p>
      </footer>
    </div>
  );
}
