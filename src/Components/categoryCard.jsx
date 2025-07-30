// src/Components/CategoryCard.jsx

export default function Categorycard({ icon, name, subtitle }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 text-center transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
      <div className="text-5xl text-green-600 mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-green-500 font-medium mt-1">{subtitle}</p>
    </div>
  );
}
