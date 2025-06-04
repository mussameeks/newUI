
export default async function handler(req, res) {
  const API_KEY = process.env.VITE_API_FOOTBALL_KEY || process.env.API_FOOTBALL_KEY;
  const apiRes = await fetch(
    "https://v3.football.api-sports.io/countries",
    { headers: { "x-apisports-key": API_KEY } }
  );
  const data = await apiRes.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(apiRes.status).json(data);
}
