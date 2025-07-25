import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Book data
const sampleBooks = [
  // Academic
  { id: 1, title: "Intro to CS", author: "John Smith", category: "Academic Library", genre: "Computer Science", cover: "https://covers.openlibrary.org/b/id/56486-M.jpg", readLink: "https://learn.saylor.org/index.php?" },
  { id: 3, title: "Physics Basics", author: "Isaac Newton", category: "Academic Library", genre: "Physics", cover: "https://covers.openlibrary.org/b/id/301031-M.jpg", readLink: "https://phys.libretexts.org/Bookshelves/University_Physics/Physics_(Boundless)/1%3A_The_Basics_of_Physics/1.1%3A_The_Basics_of_Physics" },
  { id: 4, title: "Biology Intro", author: "Charles Darwin", category: "Academic Library", genre: "Biology", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_q5fZK_w9BywaWgo-gUt-4bU-FZvW30YUEQ&s", readLink: "https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/General_Biology_(Boundless)/01%3A_The_Study_of_Life/1.01%3A_The_Science_of_Biology_-__Introduction_to_the_Study_of_Biology" },
  { id: 5, title: "Chemistry 101", author: "Marie Curie", category: "Academic Library", genre: "Chemistry", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxbPSCc8tflGk9taEOUnHG-HgBcq-tafTTg&s", readLink:"https://chem.libretexts.org/Courses/Palomar_College/PC%3A_CHEM100_-_Fundamentals_of_Chemistry/01%3A_The_Chemical_World" },

  // General
  { id: 6, title: "Atomic Habits", author: "James Clear", category: "General Library", genre: "Self-Help", cover: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg", readLink: "https://dn790007.ca.archive.org/0/items/atomic-habits-pdfdrive/Atomic%20habits%20%28%20PDFDrive%20%29.pdf" },
  { id: 7, title: "Deep Work", author: "Cal Newport", category: "General Library", genre: "Focus", cover: "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg", readLink: "https://example.com/books/deep-work.pdf" },
  { id: 8, title: "Think and Grow Rich", author: "Napoleon Hill", category: "General Library", genre: "Success", cover: "https://d2j6dbq0eux0bg.cloudfront.net/images/40569255/4724582899.webp", readLink: "https://apex.oracle.com/pls/apex/lonestar/r/files/static/v13Y/Think-And-Grow-Rich_2011-06.pdf" },
  { id: 9, title: "Make Your Bed", author: "William H. McRaven", category: "General Library", genre: "Leadership", cover: "https://m.media-amazon.com/images/I/81GqtNbs+PL.jpg", readLink: "https://online.fliphtml5.com/kfzmx/irup/#p=1" },
  { id: 10, title: "Power of Habit", author: "Charles Duhigg", category: "General Library", genre: "Psychology", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAaTZT7KeSlBPyMQIncPC3CBDhN04yedw95Q&s", readLink: "https://www.slideserve.com/haile/the-power-of-habit#google_vignette" },

  // Novels
  { id: 11, title: "Pride & Prejudice", author: "Jane Austen", category: "Novels", genre: "Romance", cover: "https://www.loyalbooks.com/image/detail/Pride-and-Prejudice-Jane-Austen.jpg", readLink: "https://example.com/books/pride-and-prejudice.pdf" },
  { id: 12, title: "Harry Potter", author: "J.K. Rowling", category: "Novels", genre: "Fantasy", cover: "", readLink: "https://example.com/books/harry-potter.pdf" },
  { id: 13, title: "1984", author: "George Orwell", category: "Novels", genre: "Dystopian", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhi4WJbRcUel2BjP2lQKkYECVQzV3uBa_kQ&s", readLink: "https://example.com/books/1984.pdf" },
  { id: 14, title: "The Hobbit", author: "J.R.R. Tolkien", category: "Novels", genre: "Fantasy", cover: "https://www.pinterest.com/pin/68891069299363993/", readLink: "https://anyflip.com/jdktq/yqqm/basic/301-350" },
  { id: 15, title: "Alchemist", author: "Paulo Coelho", category: "Novels", genre: "Adventure", cover: "", readLink: "https://example.com/books/the-alchemist.pdf" },
];

const booksPerScroll = 4;

export default function Books() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const [slides, setSlides] = useState({
    general: 0,
    academic: 0,
    novels: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in.");
      navigate("/login");
    } else {
      try {
        const decoded = JSON.parse(atob(token.split(".")[1]));
        setUserName(decoded.name || decoded.email || "User");
      } catch {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  }, [navigate]);

  const renderBooks = (books, key) => {
    const start = slides[key] * booksPerScroll;
    const visibleBooks = books.slice(start, start + booksPerScroll);
    const totalSlides = Math.ceil(books.length / booksPerScroll);

    return (
      <div className="mb-12">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold text-blue-700 capitalize">{key} Section</h2>
          <div className="space-x-2">
            <button
              onClick={() => setSlides((prev) => ({ ...prev, [key]: Math.max(prev[key] - 1, 0) }))}
              className="bg-white px-3 py-1 rounded shadow hover:bg-gray-100"
            >
              ⬅️
            </button>
            <button
              onClick={() =>
                setSlides((prev) => ({
                  ...prev,
                  [key]: prev[key] + 1 < totalSlides ? prev[key] + 1 : prev[key],
                }))
              }
              className="bg-white px-3 py-1 rounded shadow hover:bg-gray-100"
            >
              ➡️
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visibleBooks.map((book) => (
            <a
              key={book.id}
              href={book.readLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-lg shadow hover:shadow-md block"
            >
              <img src={book.cover} alt={book.title} className="h-48 w-full object-cover rounded" />
              <div className="mt-2">
                <h3 className="text-sm font-semibold">{book.title}</h3>
                <p className="text-xs text-gray-500">by {book.author}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <aside className="w-48 bg-black p-6 text-white sticky top-0 h-screen">
        <h2 className="text-xl font-bold mb-6">📚 LIBRARY</h2>
        <ul className="space-y-3">
          <li><a href="#general" className="hover:underline">General</a></li>
          <li><a href="#academic" className="hover:underline">Academic</a></li>
          <li><a href="#novels" className="hover:underline">Novels</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-12">
        <section id="welcome">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome, {userName}</h1>
          <p className="text-white">Explore books across all sections.</p>
        </section>

        <section id="general">
          {renderBooks(sampleBooks.filter((b) => b.category === "General Library"), "general")}
        </section>

        <section id="academic">
          {renderBooks(sampleBooks.filter((b) => b.category === "Academic Library"), "academic")}
        </section>

        <section id="novels">
          {renderBooks(sampleBooks.filter((b) => b.category === "Novels"), "novels")}
        </section>
      </main>
    </div>
  );
}
