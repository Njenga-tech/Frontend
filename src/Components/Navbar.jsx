import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-yellow-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-yellow-300">Nguru Library</h1>

        {/* Links */}
        <ul className="flex items-center space-x-6 text-lg font-medium">
          <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
          <li><Link to="/register" className="hover:text-blue-300">Sign Up</Link></li>
          <li>
            <Link
              to="/login"
              className="hover:text-yellow-300 bg-white text-blue-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-100 transition"
            >
              Login →
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
