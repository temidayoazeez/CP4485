"use client";

export default function DashboardButton({ weather, isDashboard = false }) {

    const handleClick = async () => {
        console.log(isDashboard ? "Remove from dashboard button clicked" : "Add to Dashboard button clicked");
        console.log(weather);

        if (isDashboard) {
          const response = await fetch("/api", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(weather)
          });
          
          const result = await response.json();
          console.log(result);

        } else {
          const response = await fetch("/api", {
            method: "DELETE"
          })

          const result = await response.json();
          console.log(result);
        }
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