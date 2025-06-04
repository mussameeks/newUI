import { useState } from "react";
import { FaFutbol, FaBasketballBall, FaVolleyballBall, FaTableTennis, FaHandRock } from "react-icons/fa";

const sports = [
  { label: "Football", icon: <FaFutbol />, key: "football" },
  { label: "Basketball", icon: <FaBasketballBall />, key: "basketball" },
  { label: "Volleyball", icon: <FaVolleyballBall />, key: "volleyball" },
  { label: "Tennis", icon: <FaTableTennis />, key: "tennis" },
  { label: "Handball", icon: <FaHandRock />, key: "handball" },
];

export default function SportTabs({ activeSport, onChange }) {
  // If you want to control from above, use props; else use state locally:
  const [selected, setSelected] = useState(activeSport || "football");

  const handleClick = (key) => {
    setSelected(key);
    if (onChange) onChange(key);
  };

  return (
    <nav className="w-full flex gap-2 overflow-x-auto py-2 px-2 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
      {sports.map((sport) => (
        <button
          key={sport.key}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition font-medium text-sm
            ${selected === sport.key
              ? "bg-blue-500 text-white shadow"
              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900"}
          `}
          onClick={() => handleClick(sport.key)}
        >
          <span className="text-lg">{sport.icon}</span>
          {sport.label}
        </button>
      ))}
    </nav>
  );
}