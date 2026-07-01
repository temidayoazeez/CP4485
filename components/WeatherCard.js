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
    <div className="w-full max-w-md rounded-[2rem] border border-gray-100/80 bg-gradient-to-br from-slate-400 via-slate-50 to-slate-100/95 p-8 text-center shadow-[0_25px_60px_-25px_rgba(56,189,248,0.28),0_8px_30px_-20px_rgba(59,130,246,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_-30px_rgba(56,189,248,0.35),0_20px_60px_-30px_rgba(59,130,246,0.22)]">
      <h1 className="text-lg font-semibold tracking-wide text-slate-700 uppercase">{weather.name}</h1>
      {iconUrl && (
        <Image src={iconUrl} alt="Image Not Available" className="mx-auto" width={96} height={96} />
      )}
      <p className="text-sm font-medium text-slate-500 mb-3">{iconDescription}</p>
      <h2 className="text-3xl font-extrabold text-slate-900 mt-2">{weather.city}</h2>
      <p className="text-6xl font-black text-slate-900 my-4">
        {Math.round(main.temp)}°C
      </p>
      <p className="text-base text-slate-600 capitalize">{weather.condition}</p>

      {(humidity || wind) && (
        <div className="mt-6 grid gap-3 rounded-3xl border border-slate-200/80 bg-slate-50/80 p-4 text-sm text-slate-600 shadow-sm">
          {humidity && <span className="block">💧 Humidity: <span className="font-semibold text-slate-800">{humidity}%</span></span>}
          {wind && <span className="block">🌬️ Wind: <span className="font-semibold text-slate-800">{wind} km/h</span></span>}
        </div>
      )}
      <div className="mt-7">
        <DashboardButton weather={weather} isDashboard={isDashboard} />
      </div>
    </div>
  );
}