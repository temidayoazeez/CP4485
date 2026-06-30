"use client";

export default function DashboardButton({ weather, isDashboard = false }) {

    const handleClick = async () => {
        const city = weather?.city || weather?.name;
        if (!city) {
            console.error("Unable to determine city for dashboard action.");
            return;
        }

        const response = await fetch("/api", {
            method: isDashboard ? "DELETE" : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ city })
        });
        
        const result = await response.json();
        console.log(result);

        window.location.reload();
    }

  const buttonText = isDashboard ? "Remove from dashboard" : "Add to Dashboard";
  const buttonClass = isDashboard
    ? "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

  return (
    <button className={buttonClass} onClick={handleClick}>
      {buttonText}
    </button>
  );
}