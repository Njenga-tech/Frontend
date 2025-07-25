export default function About() {
  return (
    <section className="bg-white py-12 px-6 md:px-20 text-gray-800">
      <h2 className="text-3xl font-bold text-center text-yellow-900 mb-6">
        About Nguru Library
      </h2>

      <p className="text-lg leading-8 mb-4">
        <strong>Nguru Library</strong> is a modern digital and physical library built to inspire a culture of learning, innovation, and personal growth. Based in Kenya, our mission is to provide universal access to knowledge and empower individuals through education, whether in schools, communities, or at home.
      </p>

      <p className="text-lg leading-8 mb-4">
        With a growing collection of eBooks, journals, research papers, educational courses, and reference materials, Nguru Library serves students, educators, researchers, and curious minds of all ages. Our platform is designed to be intuitive, mobile-friendly, and accessible 24/7.
      </p>

      <p className="text-lg leading-8 mb-4">
        We believe that knowledge is power—and by creating a free and inclusive library, we aim to close the digital divide, promote academic excellence, and support lifelong learning in both rural and urban communities.
      </p>

      <p className="text-lg leading-8 mb-6">
        Join thousands of readers across the country in discovering books, enhancing skills, and building a better future—one page at a time.
      </p>

      <div className="flex justify-center">
        <a
          href="/register"
          className="bg-yellow-900 text-white px-6 py-3 rounded-md shadow-md hover:bg-yellow-800 transition"
        >
          Become a Member
        </a>
      </div>
    </section>
  );
}
