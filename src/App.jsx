import { Routes, Route } from "react-router-dom"; // ✅ NO Router here
import Navbar from "./Components/Navbar"; // ✅ Note: 'components' not 'Components'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Books from "./pages/Books";
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<Books />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
