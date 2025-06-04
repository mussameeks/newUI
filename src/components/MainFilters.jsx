import { useState } from "react";

export default function MainFilters({
  onTabChange,
  onSubtabChange,
  selectedTab = "all",
  selectedSubtab = "live",
  date = "13/06",
}) {
  const [tab, setTab] = useState(selectedTab);
  const [subtab, setSubtab] = useState(selectedSubtab);

  const handleTab = (t) => {
    setTab(t);
    onTabChange?.(t);
  };
  const handleSubtab = (s) => {
    setSubtab(s);
    onSubtabChange?.(s);
  };

  return (
    <section className="w-full max-w-2xl mx-auto mt-4 px-2">
      {/* Tabs + Date row */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button
            className={\`px-6 py-2 rounded-lg font-semibold border transition
              \${tab === "all"
                ? "bg-blue-500 text-white border-blue-500 shadow"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-transparent hover:bg-blue-100 dark:hover:bg-blue-900"}
            \`}
            onClick={() => handleTab("all")}
          >
            All
          </button>
          <button
            className={\`px-6 py-2 rounded-lg font-semibold border transition
              \${tab === "favorites"
                ? "bg-blue-500 text-white border-blue-500 shadow"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-transparent hover:bg-blue-100 dark:hover:bg-blue-900"}
            \`}
            onClick={() => handleTab("favorites")}
          >
            Favorites
          </button>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer select-none">
          <span className="inline-block px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 font-semibold">
            {date}
          </span>
        </div>
      </div>
      {/* Subtabs */}
      <div className="flex gap-6 mt-4 border-b border-gray-200 dark:border-gray-800">
        {["live", "finished", "upcoming"].map((s) => (
          <button
            key={s}
            onClick={() => handleSubtab(s)}
            className={\`pb-2 px-2 font-medium text-gray-700 dark:text-gray-200 transition relative
              \${subtab === s ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400" : "hover:text-blue-500"}
            \`}
            style={{ marginBottom: "-1px" }}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>
    </section>
  );
}