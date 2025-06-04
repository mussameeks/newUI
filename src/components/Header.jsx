import { FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full px-4 py-3 flex items-center justify-between bg-white dark:bg-gray-950 shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-md select-none">
          TS
        </div>
        <span className="font-semibold text-xl text-gray-800 dark:text-gray-100 select-none">
          Twijistats
        </span>
      </div>
      {/* Search Bar */}
      <div className="flex-1 max-w-lg mx-6">
        <input
          type="text"
          className="w-full rounded-full px-4 py-2 border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          placeholder="Search teams, leagues, matches…"
        />
      </div>
      {/* Right Controls */}
      <div className="flex items-center gap-4">
        <button
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="More"
        >
          <FiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>
        <button
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow transition"
        >
          <FaUserCircle className="w-5 h-5" />
          Sign In
        </button>
      </div>
    </header>
  );
}