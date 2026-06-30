import {connectToDB} from "@/app/api/db";
import WeatherCard from "@/components/WeatherCard";
export default async function DashboardPage() {

  const response = await fetch("http://localhost:3000/api/dashboard")
  const cities = await response.json();
  console.log(cities)

  return (
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-2">📊 Dashboard</h1>
      <p className="text-gray-500 mb-8">Welcome to your dashboard</p>
      {Object.values(cities).map((city, index) => (
        <WeatherCard key={index} weather={city}/>
      ))}
    </div>
  );
}