import Header from "../components/Header";
import SportTabs from "../components/SportTabs";
import MatchList from "../components/MatchList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <SportTabs />
      <MatchList />
    </div>
  );
}