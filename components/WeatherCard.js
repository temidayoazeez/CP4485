import Image from "next/image";

export default function WeatherCard({ weather }) {
  const icon = weather.raw?.weather?.[0]?.icon;
  const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : null;
  const humidity = weather.raw?.main?.humidity;
  const wind = weather.raw?.wind?.speed;

  return (
    <div className="border border-gray-200 rounded-2xl p-8 shadow-lg bg-white w-full max-w-md text-center">
      {iconUrl && (
        <Image src={iconUrl} alt={weather.condition} className="mx-auto" width={96} height={96} />
      )}
      <h2 className="text-2xl font-bold text-gray-800 mt-2">{weather.city}</h2>
      <p className="text-5xl font-extralight text-gray-900 my-4">
        {weather.temp}°C
      </p>
      <p className="text-lg text-gray-500 capitalize">{weather.condition}</p>

      {(humidity || wind) && (
        <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-gray-100 text-sm text-gray-500">
          {humidity && <span>💧 Humidity: {humidity}%</span>}
          {wind && <span>🌬️ Wind: {wind} km/h</span>}
        </div>
      )}
    </div>
  );
}