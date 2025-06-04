import { useEffect, useState } from "react";
import { getFixtures } from "../api/football";
import SideDrawer from "./SideDrawer";

const statusMap = {
  live: "LIVE",
  finished: "FT",
  upcoming: "NS",
};

export default function MatchList({ date, subtab, league, country, tab }) {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);

  useEffect(() => {
    setLoading(true);
    // "All" tab: ignore country/league filters
    const apiCountry = tab === "all" ? undefined : country;
    const apiLeague = tab === "all" ? undefined : league;

    getFixtures({
      date,
      league: apiLeague,
      country: apiCountry,
      status: statusMap[subtab] || undefined,
    })
      .then(res => {
        setMatches(res.data.response || []);
      })
      .catch(() => setMatches([]))
      .finally(() => setLoading(false));
  }, [date, league, country, subtab, tab]);

  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const toggleFav = (fixtureId) => {
    let newFavs;
    if (favorites.includes(fixtureId)) {
      newFavs = favorites.filter((id) => id !== fixtureId);
    } else {
      newFavs = [...favorites, fixtureId];
    }
    localStorage.setItem("favorites", JSON.stringify(newFavs));
    window.dispatchEvent(new Event("storage"));
  };

  const filteredMatches = tab === "favorites"
    ? matches.filter((m) => favorites.includes(m.fixture.id))
    : matches;

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (!filteredMatches.length) return <div className="text-center py-8">No matches found.</div>;

  // Group by league
  const leagues = {};
  filteredMatches.forEach(match => {
    const leagueId = match.league.id;
    if (!leagues[leagueId]) leagues[leagueId] = { ...match.league, matches: [] };
    leagues[leagueId].matches.push(match);
  });

  return (
    <div className="max-w-2xl mx-auto mt-6 px-2">
      {Object.values(leagues).map((league) => (
        <div
          key={league.id}
          className="mb-6 bg-white dark:bg-gray-950 rounded-2xl shadow-lg"
        >
          <div className="flex items-center gap-2 p-3 border-b border-gray-100 dark:border-gray-800">
            {league.logo && (
              <img src={league.logo} alt="" className="w-6 h-6 rounded" />
            )}
            <span className="font-semibold text-gray-800 dark:text-gray-100">
              {league.name}
            </span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-gray-600 dark:text-gray-300">
              {league.country}
            </span>
          </div>
          <div>
            {league.matches.map((m) => (
              <button
                key={m.fixture.id}
                className="flex w-full items-center justify-between px-4 py-3 border-b last:border-none border-gray-100 dark:border-gray-800 hover:bg-blue-50 dark:hover:bg-gray-900 transition cursor-pointer focus:outline-none"
                onClick={() => {
                  setSelectedMatch(m);
                  setDrawerOpen(true);
                }}
              >
                <span className="w-14 text-gray-500 font-mono">
                  {m.fixture.status.elapsed
                    ? `${m.fixture.status.elapsed}'`
                    : m.fixture.status.short}
                </span>
                <span className="flex-1 flex flex-col items-center gap-1">
                  <span className="font-semibold text-gray-800 dark:text-gray-100">
                    {m.teams.home.name}
                  </span>
                  <span className="text-xs text-gray-400">vs</span>
                  <span className="font-semibold text-gray-800 dark:text-gray-100">
                    {m.teams.away.name}
                  </span>
                </span>
                <span className="w-14 text-right font-bold text-lg text-blue-600 dark:text-blue-400">
                  {m.goals.home} - {m.goals.away}
                </span>
                <button
                  onClick={e => { e.stopPropagation(); toggleFav(m.fixture.id); }}
                  className="ml-2"
                  title="Add to favorites"
                >
                  {favorites.includes(m.fixture.id)
                    ? "★"
                    : "☆"}
                </button>
              </button>
            ))}
          </div>
        </div>
      ))}
      <SideDrawer
        open={drawerOpen}
        match={selectedMatch}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
}