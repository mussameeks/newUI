import { useState } from "react";
import SideDrawer from "./SideDrawer";

const matchData = [
  {
    country: "Brazil",
    league: "Brasileirao Serie B",
    flag: "🇧🇷",
    matches: [
      {
        time: "10:00",
        teamA: "Chapecoense",
        teamB: "Amazonas",
        scoreA: 4,
        scoreB: 0,
        status: "finished",
      },
      {
        time: "14:00",
        teamA: "Paysandu",
        teamB: "Criciuma",
        scoreA: 0,
        scoreB: 1,
        status: "finished",
      },
    ],
  },
  {
    country: "Chile",
    league: "Liga de Primera",
    flag: "🇨🇱",
    matches: [
      {
        time: "10:00",
        teamA: "Cobresal",
        teamB: "Iquique",
        scoreA: 2,
        scoreB: 1,
        status: "finished",
      },
      {
        time: "21:00",
        teamA: "Espanola",
        teamB: "Deportes Limache",
        scoreA: 1,
        scoreB: 1,
        status: "finished",
      },
      {
        time: "21:00",
        teamA: "Vinotinto Club",
        teamB: "Libertad",
        scoreA: 1,
        scoreB: 0,
        status: "finished",
      },
    ],
  },
];

export default function MatchList() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);

  // Combine league/country data with match for easy drawer display
  const handleMatchClick = (match, block) => {
    setSelectedMatch({
      ...match,
      league: block.league,
      country: block.country,
      flag: block.flag,
    });
    setDrawerOpen(true);
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 px-2">
      {matchData.map((block, i) => (
        <div
          key={block.country + block.league}
          className="mb-6 bg-white dark:bg-gray-950 rounded-2xl shadow-lg"
        >
          {/* League Header */}
          <div className="flex items-center gap-2 p-3 border-b border-gray-100 dark:border-gray-800">
            <span className="text-xl">{block.flag}</span>
            <span className="font-semibold text-gray-800 dark:text-gray-100">
              {block.country}
            </span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-gray-600 dark:text-gray-300">
              {block.league}
            </span>
          </div>
          {/* Match List */}
          <div>
            {block.matches.map((match, j) => (
              <button
                key={j}
                className="flex w-full items-center justify-between px-4 py-3 border-b last:border-none border-gray-100 dark:border-gray-800 hover:bg-blue-50 dark:hover:bg-gray-900 transition cursor-pointer focus:outline-none"
                onClick={() => handleMatchClick(match, block)}
              >
                {/* Match Time */}
                <span className="w-14 text-gray-500 font-mono">{match.time}</span>
                {/* Teams */}
                <span className="flex-1 flex flex-col items-center gap-1">
                  <span className="font-semibold text-gray-800 dark:text-gray-100">
                    {match.teamA}
                  </span>
                  <span className="text-xs text-gray-400">vs</span>
                  <span className="font-semibold text-gray-800 dark:text-gray-100">
                    {match.teamB}
                  </span>
                </span>
                {/* Score */}
                <span className="w-14 text-right font-bold text-lg text-blue-600 dark:text-blue-400">
                  {match.scoreA} - {match.scoreB}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
      {/* Side Drawer */}
      <SideDrawer
        open={drawerOpen}
        match={selectedMatch}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
}