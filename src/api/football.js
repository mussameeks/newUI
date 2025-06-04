import axios from "axios";

const API_URL = "https://v3.football.api-sports.io";
const API_KEY = import.meta.env.VITE_API_FOOTBALL_KEY;

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "x-apisports-key": API_KEY,
  },
});

export function getCountries() {
  return api.get("/countries");
}

export function getLeagues({ country, season = 2024 }) {
  return api.get("/leagues", {
    params: {
      country,
      season,
    },
  });
}

export function getFixtures({ date, league, country, status }) {
  return api.get("/fixtures", {
    params: {
      date,     // format: YYYY-MM-DD
      league,   // league id
      country,  // optional: country name
      status,   // "NS" upcoming, "FT" finished, "1H/2H/LIVE" for live
    },
  });
}