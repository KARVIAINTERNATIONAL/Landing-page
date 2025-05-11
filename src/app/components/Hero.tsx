// src/app/components/Hero.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Navigation Bar within Hero */}
      <div className="absolute top-0 left-0 w-full z-20 bg-transparent">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo & Site Title */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Karvia-Sporra International Logo"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold uppercase tracking-wide text-white">
              KARVIA-SPORRA INTERNATIONAL
            </span>
          </div>
          {/* Nav Links & CTA */}
          <div className="flex items-center space-x-6">
            <Link href="/#waitlist" className="text-white hover:text-green-400">
              Get on the Waitlist
            </Link>
            <Link href="/#about" className="text-white hover:text-green-400">
              About
            </Link>
            <Link href="/#insights" className="text-white hover:text-green-400">
              Insights
            </Link>
            <Link href="/#help" className="text-white hover:text-green-400">
              Help
            </Link>
            <Link
              href="/#join"
              className="px-5 py-2 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-lg"
            >
              Join
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            The Home of Agri‑Tech<br />Innovation in Africa
          </h1>
          <p className="text-xl mb-8">
            Empowering farmers with data, logistics & mobile solutions.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/#discover"
              className="px-8 py-3 bg-green-500 hover:bg-green-400 rounded-lg font-medium transition"
            >
              Discover More
            </Link>
            <Link
              href="/#start"
              className="px-8 py-3 border border-white hover:bg-white hover:text-gray-900 rounded-lg font-medium transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
