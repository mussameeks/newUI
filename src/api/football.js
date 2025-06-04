
import axios from "axios";

export const api = axios.create({
  baseURL: "/api", // proxy endpoints
});

export function getCountries() {
  return api.get("/countries");
}

export function getLeagues({ country, season = 2024 }) {
  return api.get("/leagues", {
    params: { country, season },
  });
}

export function getFixtures({ date, league, country, status }) {
  return api.get("/fixtures", {
    params: { date, league, country, status },
  });
}
