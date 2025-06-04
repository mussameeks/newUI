import Header from "../components/Header";
import SportTabs from "../components/SportTabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <SportTabs />
      {/* MatchList will be added next */}
    </div>
  );
}