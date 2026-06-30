"use client";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import {useState} from "react";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
      setLoading(true);
      setError("");
      try {
          const q = city ? `?city=${encodeURIComponent(city)}` : "";
          const response = await fetch(`/api${q}`);
          const data = await response.json();
          if (!response.ok || data?.error) {
              throw new Error(data?.error?.message || data?.error || "Failed to fetch");
          }
          setWeather(data);
      } catch (err) {
          setError(err.message || "Unknown error");
          setWeather(null);
      } finally {
          setLoading(false);
      }
  };

   return (
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-2">☀️ Current Weather</h1>
      <p className="text-gray-500 mb-8">Check the weather in any city</p>

      <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} loading={loading} />

      {loading && (
        <div className="border border-gray-200 rounded-2xl p-8 shadow bg-white w-full max-w-md text-center">
          <p className="text-gray-400">🔄 Loading weather data...</p>
        </div>
      )}

      {error && (
        <div className="border border-red-200 rounded-2xl p-8 shadow bg-red-50 w-full max-w-md text-center">
          <p className="text-red-600 font-medium">❌ {error}</p>
          <p className="text-red-400 text-sm mt-1">Please check the spelling and try again.</p>
        </div>
      )}

      {weather && !loading && <WeatherCard weather={weather}/>}
    </div>
  );
}
