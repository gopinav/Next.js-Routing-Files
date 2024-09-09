import Link from "next/link";

export default function DashboardLayout({
  children,
  panel,
}: {
  children: React.ReactNode;
  panel: React.ReactNode;
}) {
  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <nav className="w-64 bg-gray-800 p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings" className="hover:text-gray-300">
              Settings
            </Link>
          </li>
          <li>
            <Link href="/dashboard/analytics" className="hover:text-gray-300">
              Analytics
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex-grow p-4">{children}</main>
      <aside className="w-64 bg-gray-800 p-4">{panel}</aside>
    </div>
  );
}
