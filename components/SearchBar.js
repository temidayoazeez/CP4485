"use client";

export default function SearchBar({ city, setCity, fetchWeather, loading }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6 w-full max-w-md">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
        className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-5 py-3 rounded-lg transition flex items-center gap-2"
      >
        🔍
      </button>
    </form>
  );
}