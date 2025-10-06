import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#0B132B] text-white py-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-xl font-semibold">Fatima's Blogging</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-8 list-none">
          <li>
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-white hover:text-gray-300 transition"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
