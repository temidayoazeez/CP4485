"use client";

export default function DashboardButton({ weather }) {

    const handleClick = async () => {
        console.log("Add to Dashboard button clicked");
        console.log(weather);
        const response = await fetch("/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(weather)
        });
        const result = await response.json();
        console.log(result);
    }

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
      Add to Dashboard
    </button>
  );
}