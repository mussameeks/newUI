
export default async function handler(req, res) {
  const { date, league, country, status } = req.query;

  const params = new URLSearchParams();
  if (date) params.append("date", date);
  if (league) params.append("league", league);
  if (country) params.append("country", country);
  if (status) params.append("status", status);

  const API_KEY = process.env.VITE_API_FOOTBALL_KEY || process.env.API_FOOTBALL_KEY;

  const apiRes = await fetch(
    `https://v3.football.api-sports.io/fixtures?${params.toString()}`,
    { headers: { "x-apisports-key": API_KEY } }
  );
  const data = await apiRes.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(apiRes.status).json(data);
}
