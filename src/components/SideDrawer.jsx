import { useState } from "react";
import { FaRegStar, FaStar, FaFutbol } from "react-icons/fa";

export default function SideDrawer({ open, onClose, match }) {
  const [isFav, setIsFav] = useState(false);

  if (!open || !match) return null;

  // Example stats, would be fetched/received from match in real app
  const stats = match.stats || {
    possessionA: "55%",
    possessionB: "45%",
    shotsA: 8,
    shotsB: 4,
    yellowA: 1,
    yellowB: 2,
    redA: 0,
    redB: 0,
  };

  // For demo, fake logos using emoji
  const teamLogos = {
    "Chapecoense": "🟢",
    "Amazonas": "🟡",
    "Paysandu": "🔵",
    "Criciuma": "⚫️",
    "Cobresal": "🟠",
    "Iquique": "🔷",
    "Espanola": "🔴",
    "Deportes Limache": "⚪️",
    "Vinotinto Club": "🟣",
    "Libertad": "⚪️",
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40 z-30"
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <aside className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-950 shadow-2xl z-40 transition-transform duration-300"
        style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
          <div>
            <div className="font-bold text-lg text-gray-800 dark:text-gray-100 flex items-center gap-2">
              <span className="text-2xl">{teamLogos[match.teamA] || <FaFutbol />}</span>
              {match.teamA}
              <span className="text-blue-500">vs</span>
              {match.teamB}
              <span className="text-2xl">{teamLogos[match.teamB] || <FaFutbol />}</span>
            </div>
            <div className="text-xs text-gray-400 flex items-center gap-2">
              {match.flag} {match.league} • {match.country}
            </div>
          </div>
          <button
            onClick={() => setIsFav(fav => !fav)}
            className="mr-2"
            title="Add to favorites"
          >
            {isFav
              ? <FaStar className="text-yellow-400 text-xl" />
              : <FaRegStar className="text-gray-400 text-xl" />}
          </button>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <span className="text-2xl text-gray-500">&times;</span>
          </button>
        </div>
        {/* Main Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">
              {match.scoreA} <span className="text-xl">-</span> {match.scoreB}
            </div>
            <div className="text-gray-600 dark:text-gray-300 mb-2">{match.time}</div>
            <div>
              <span className="inline-block px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-500">{match.status}</span>
            </div>
          </div>
          {/* Stats Section */}
          <div className="mb-4">
            <div className="font-semibold mb-2 text-gray-700 dark:text-gray-200">Stats</div>
            <div className="flex justify-between gap-2 text-sm mb-1">
              <span>{match.teamA}</span>
              <span>Possession</span>
              <span>{match.teamB}</span>
            </div>
            <div className="flex justify-between gap-2 mb-1">
              <span className="font-bold">{stats.possessionA}</span>
              <span className="text-xs text-gray-500">%</span>
              <span className="font-bold">{stats.possessionB}</span>
            </div>
            <div className="flex justify-between gap-2 text-sm mb-1">
              <span>{stats.shotsA}</span>
              <span>Shots</span>
              <span>{stats.shotsB}</span>
            </div>
            <div className="flex justify-between gap-2 text-sm mb-1">
              <span className="text-yellow-600">{stats.yellowA}</span>
              <span>Yellow Cards</span>
              <span className="text-yellow-600">{stats.yellowB}</span>
            </div>
            <div className="flex justify-between gap-2 text-sm">
              <span className="text-red-600">{stats.redA}</span>
              <span>Red Cards</span>
              <span className="text-red-600">{stats.redB}</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}