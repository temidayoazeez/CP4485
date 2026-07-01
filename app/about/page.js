export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100/90 px-4 py-16">
      <div className="w-full max-w-3xl rounded-[2rem] border border-slate-200/80 bg-white/95 p-10 shadow-[0_25px_80px_-30px_rgba(15,23,42,0.25)] backdrop-blur-sm">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-sky-600">Weather Dashboard</p>
          <h1 className="mt-3 text-5xl font-extrabold text-slate-900">About This App</h1>
          <p className="mt-4 text-base text-slate-500 sm:text-lg">Search, save, and manage city weather details with a modern dashboard experience.</p>
        </div>

        <div className="grid gap-6 text-slate-600 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">What it does</h2>
            <p className="mt-3 text-sm leading-6">Look up the latest weather for any city using OpenWeatherMap, then view temperature, weather conditions, humidity, and wind details in a polished card.</p>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Dashboard support</h2>
            <p className="mt-3 text-sm leading-6">Save cities to a dashboard backed by MongoDB, and remove entries cleanly with the built-in button action.</p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200/80 bg-slate-50 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">How it works</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <li>• Enter any city name and fetch live weather data.</li>
            <li>• Weather is displayed in a responsive card with icon, temperature, and conditions.</li>
            <li>• Add the city to the dashboard or remove it with one click.</li>
            <li>• Dashboard data is stored through a Node API that connects to MongoDB.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}