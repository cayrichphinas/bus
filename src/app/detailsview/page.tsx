import Image from "next/image";

export default function Home() {
  const busRoutes = [
    {
      route: 'Cebu City to Carcar',
      price: '₱120',
      plateNumber: 'SND-0325',
      image: '/image/h.jpg',
      qrcode: '/image/i.png',
    },
    {
      route: 'Cebu City to Oslob',
      price: '₱166',
      plateNumber: 'SND-0220',
      image: '/image/c.jpg',
      qrcode: '/image/i.png',
    },
  ];

  return (
    <div className="relative min-h-screen text-green-500 font-sans overflow-hidden">

      {/* Background Image fully behind content */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-[url('/image/h1.jpg')] bg-cover bg-center animate-background-zoom" />
        
      </div>

      {/* Page Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
      
        {/* Header */}
        <header className="flex justify-between items-center p-4 sm:px-8   shadow-lg border-b border-green-400">
          <div className="flex items-center">
            <Image
              src="/image/j1-removebg-preview.png"
              alt="Sundrays Bus Logo"
              width={120}
              height={40}
              className="object-contain drop-shadow-lg"
            />
          </div>
        </header>

        {/* Hero Section */}
        <section className="text-center py-10 backdrop-blur-md shadow-inner">
          <h1 className="text-3xl sm:text-5xl font-bold  ">
            🌞 Sundrays Bus Routes - Explore Cebu!
          </h1>
          <p className="mt-4 text-lg text-green-200">
            Discover scenic routes under the sun, from city to sea 🌴
          </p>
        </section>

        {/* Main Content */}
        <main className="flex-1 flex justify-center items-center py-12 px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-6xl">
            {busRoutes.map((bus, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-white  to-black bg-opacity-90 rounded-2xl p-6 shadow-[0_0_20px_#00ff00] hover:scale-[1.02] transition-transform  border-2"
              >
                <h2 className="text-center text-xl font-bold text-green-300 mb-4 tracking-widest uppercase">
                  🚌 Bus Ticketing
                </h2>

                {/* Ticket Details */}
                <div className="space-y-3 text-sm">
                  <p className="text-green-400">
                    <span className="font-semibold">Route:</span> {bus.route}
                  </p>
                  <p className="text-green-400">
                    <span className="font-semibold">Plate No.:</span> {bus.plateNumber}
                  </p>
                  <p className="text-green-400">
                    <span className="font-semibold">Price:</span> {bus.price}
                  </p>
                </div>

                {/* Visuals */}
                <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
                  <Image
                    src={bus.image}
                    alt="Bus Preview"
                    width={160}
                    height={100}
                    className="rounded-lg shadow-[0_0_10px_#00ff00] border border-green-600"
                  />
                  <div className="flex flex-col items-center text-center">
                    <span className="text-xs text-green-300 mb-1">QR Code</span>
                    <Image
                      src={bus.qrcode}
                      alt="QR Code"
                      width={100}
                      height={100}
                      className="rounded-md "
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-black bg-opacity-80 text-green-400 text-center py-6 mt-auto border-t border-green-400">
          <p className="text-sm">&copy; 2025 Sundrays Bus Ticketing Cebu. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
