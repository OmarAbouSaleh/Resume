import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="max-w-7xl mx-auto">
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-white hover:text-gray-400 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/resume" className="text-white hover:text-gray-400 transition duration-300">
              Resume
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-400 transition duration-300">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
