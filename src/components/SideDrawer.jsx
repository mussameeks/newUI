export default function SideDrawer({ open, onClose, match }) {
  if (!open || !match) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40 z-30"
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <aside className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-950 shadow-2xl z-40 transition-transform duration-300"
        style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
          <div>
            <div className="font-bold text-lg text-gray-800 dark:text-gray-100">
              {match.teamA} <span className="text-blue-500">vs</span> {match.teamB}
            </div>
            <div className="text-xs text-gray-400">{match.league} • {match.country}</div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <span className="text-2xl text-gray-500">&times;</span>
          </button>
        </div>
        {/* Main Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">
              {match.scoreA} <span className="text-xl">-</span> {match.scoreB}
            </div>
            <div className="text-gray-600 dark:text-gray-300 mb-2">{match.time}</div>
            <div>
              <span className="inline-block px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-500">{match.status}</span>
            </div>
          </div>
          {/* Teams */}
          <div className="flex flex-col gap-2 items-center">
            <div className="text-lg font-semibold text-gray-700 dark:text-gray-200">{match.teamA}</div>
            <div className="text-gray-400">vs</div>
            <div className="text-lg font-semibold text-gray-700 dark:text-gray-200">{match.teamB}</div>
          </div>
        </div>
      </aside>
    </>
  );
}