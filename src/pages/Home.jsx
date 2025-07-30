import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import CategoryCard from '../Components/CategoryCard';
 // 

export default function Home() {
  const categories = [
    { name: 'History', icon: '✉️', subtitle: '1000+ Available' },
    { name: 'Human Resource', icon: '👨‍💼', subtitle: '224+ Available' },
    { name: 'Technology', icon: '🧠', subtitle: '185+ Available' },
    { name: 'Business', icon: '📊', subtitle: '434+ Available' },
    { name: 'Education', icon: '✍️', subtitle: '976+ Available' },
    { name: 'Religion', icon: '📚', subtitle: '254+ Vacancy' },
    { name: 'Art', icon: '📐', subtitle: '342+ Available' },
    { name: 'Geography', icon: '🌍', subtitle: '198+ Available' },
  ];

  const trendingTopics = [
    { name: 'Cybersecurity', icon: '🛡️', subtitle: 'Latest Threats' },
    { name: 'Data Science', icon: '📊', subtitle: 'Top Choice' },
    { name: 'Remote Work', icon: '🏠', subtitle: 'Most Viewed' },
    { name: 'Digital Marketing', icon: '📱', subtitle: 'Highly Rated' },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-7 px-4 sm:px-6 lg:px-8">
      {/* Carousel Section */}
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showThumbs={false}
        showStatus={false}
      >
        {/* Slide 1 */}
        <div className="relative h-[80vh]">
          <img src="/image/open.jpg" alt="Slide 1" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-start px-8">
            <div className="text-left max-w-xl text-black">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Find The Perfect Book You Deserve
              </h2>
              <p className="text-lg mb-6">
                Explore eBooks, journals, and resources anytime on Nguru Library.
              </p>
              <Link
                to="/register"
                className="bg-blue-700 text-white px-5 py-3 rounded mr-3 hover:bg-blue-800"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="bg-gray-200 text-gray-900 px-5 py-3 rounded hover:bg-white"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-[80vh]">
          <img src="/image/books.jpg" alt="Slide 2" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-start px-8">
            <div className="text-left max-w-xl text-blue-300">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Discover New Books and Learn Anywhere
              </h2>
              <p className="text-lg mb-6">
                Search, borrow, and read directly online. Powered by Nguru Library.
              </p>
              <Link
                to="/register"
                className="bg-blue-700 text-white px-5 py-3 rounded mr-3 hover:bg-blue-800"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="bg-gray-200 text-gray-900 px-5 py-3 rounded hover:bg-white"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </Carousel>

      {/* Category Section */}
      <h2 className="text-2xl font-bold mt-10 mb-6 text-center">
        📚 What Do You Want to Learn Today?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            icon={category.icon}
            name={category.name}
            subtitle={category.subtitle}
          />
        ))}
      </div>

      {/* Trending Section */}
      <h2 className="text-2xl font-bold mt-14 mb-6 text-center">
        🔥 Academic & Thoughtful 🔥
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trendingTopics.map((topic) => (
          <CategoryCard
            key={topic.name}
            icon={topic.icon}
            name={topic.name}
            subtitle={topic.subtitle}
          />
        ))}
      </div>
    </div>
  );
}
