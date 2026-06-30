import Image from "next/image";
import DashboardButton from "./DashboardButton";

export default function WeatherCard({ weather, isDashboard = false }) {
  const icon = weather.weather?.[0]?.icon;
  const iconDescription = weather.weather?.[0].description;
  const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : null;
  const humidity = weather.main?.humidity;
  const wind = weather.wind?.speed;
  const main = weather.main
  console.log("Weather: ", weather)

  return (
    <div className="border border-gray-200 rounded-2xl p-8 shadow-lg bg-white w-full max-w-md text-center">
      {iconUrl && (
        <Image src={iconUrl} alt={weather.condition} className="mx-auto" width={96} height={96} />
      )}
      <p className="text-1xl font-extralight text-gray-900 my-4">{iconDescription}</p>
      <h2 className="text-2xl font-bold text-gray-800 mt-2">{weather.city}</h2>
      <p className="text-5xl font-extralight text-gray-900 my-4">
        {main.temp}°C
      </p>
      <p className="text-lg text-gray-500 capitalize">{weather.condition}</p>

      {(humidity || wind) && (
        <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-gray-100 text-sm text-gray-500">
          {humidity && <span>💧 Humidity: {humidity}%</span>}
          {wind && <span>🌬️ Wind: {wind} km/h</span>}
        </div>
      )}
      <br />
      <DashboardButton weather={weather} isDashboard={isDashboard} />
    </div>
  );
}