import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-yellow-900 text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between max-w-8xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-300">Nguru Library</h1>
        <ul className="flex space-x-6 text-1.5xl font-medium">
          <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
          <li><Link to="/register" className="hover:text-blue-300">Register</Link></li>
          <li><Link to="/login" className="hover:text-yellow-300 bg-white text-blue-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-100 transition">Login →
          </Link></li>
        </ul>
      </div>
    </nav>
  );
}
