import { ReactNode } from "react";
import { Link } from "wouter";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white p-6">
        <ul className="flex gap-2 items-center justify-between">
          <li>
            <Link href="/" className="text-4xl tracking-wider text-indigo-600">
              Ploxie
            </Link>
          </li>
          <div className="flex gap-4">
            <li>
              <Link href="/plattegrond">plattegrond</Link>
            </li>
            <li>
              <Link href="/organisatie">organisatie</Link>
            </li>
            <li>
              <Link href="/ruimtes">ruimtes</Link>
            </li>
          </div>
        </ul>
      </header>
      <main className="bg-gray-100 flex-1 p-2">{children}</main>
      <footer className="bg-gray-200 p-5">hoi</footer>
    </div>
  );
};
