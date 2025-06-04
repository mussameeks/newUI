import Header from "../components/Header";
import SportTabs from "../components/SportTabs";
import MainFilters from "../components/MainFilters";
import MatchList from "../components/MatchList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <SportTabs />
      <MainFilters />
      <MatchList />
    </div>
  );
}