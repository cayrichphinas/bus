// src/components/Header.tsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
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
  );
}