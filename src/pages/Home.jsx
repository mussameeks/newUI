import { useState, useEffect } from "react";
import Header from "../components/Header";
import SportTabs from "../components/SportTabs";
import MainFilters from "../components/MainFilters";
import MatchList from "../components/MatchList";
import { getCountries, getLeagues } from "../api/football";

export default function Home() {
  // States
  const [sport] = useState("football"); // For expansion
  const [selectedTab, setSelectedTab] = useState("all");
  const [selectedSubtab, setSelectedSubtab] = useState("live");
  const [date, setDate] = useState(() => {
    const d = new Date();
    return d.toISOString().slice(0, 10);
  });
  const [countries, setCountries] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLeague, setSelectedLeague] = useState("");

  // On mount, load countries
  useEffect(() => {
    getCountries().then(res => setCountries(res.data.response));
  }, []);

  // When country changes, fetch leagues
  useEffect(() => {
    if (!selectedCountry) return setLeagues([]);
    getLeagues({ country: selectedCountry }).then(res => setLeagues(res.data.response));
  }, [selectedCountry]);

  // UI event handlers
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedLeague(""); // Reset league
  };
  const handleLeagueChange = (e) => setSelectedLeague(e.target.value);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <SportTabs />
      {/* Filters (country/league selection) */}
      <div className="max-w-2xl mx-auto px-2 mt-2 flex gap-2 items-center">
        <select
          className="p-2 rounded border bg-white dark:bg-gray-950"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="">All Countries</option>
          {countries.map((c) => (
            <option key={c.name} value={c.name}>
              {c.flag ? c.flag + " " : ""}{c.name}
            </option>
          ))}
        </select>
        <select
          className="p-2 rounded border bg-white dark:bg-gray-950"
          value={selectedLeague}
          onChange={handleLeagueChange}
        >
          <option value="">All Leagues</option>
          {leagues.map((l) => (
            <option key={l.league.id} value={l.league.id}>
              {l.league.name}
            </option>
          ))}
        </select>
        <input
          type="date"
          className="p-2 rounded border bg-white dark:bg-gray-950"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </div>
      <MainFilters
        selectedTab={selectedTab}
        selectedSubtab={selectedSubtab}
        date={date.split("-").reverse().join("/")} // "YYYY-MM-DD" to "DD/MM/YYYY"
        onTabChange={setSelectedTab}
        onSubtabChange={setSelectedSubtab}
      />
      <MatchList
        date={date}
        subtab={selectedSubtab}
        league={selectedLeague}
        country={selectedCountry}
        tab={selectedTab}
      />
    </div>
  );
}