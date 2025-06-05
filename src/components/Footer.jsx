export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-4">
      <div className="max-w-2xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-600 dark:text-gray-400">
        <div>
          © {new Date().getFullYear()} Twijistats
        </div>
        <nav className="flex flex-wrap gap-3">
          <a href="#" className="hover:underline">Privacy & Cookies</a>
          <a href="#" className="hover:underline">Legal</a>
          <a href="#" className="hover:underline">Advertise</a>
          <a href="#" className="hover:underline">Feedback</a>
        </nav>
      </div>
    </footer>
  );
}