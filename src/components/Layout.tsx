import { ReactNode } from "react";
import { Link } from "wouter";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white p-6">
        <ul className="flex gap-2">
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/ruimtes">ruimtes</Link>
          </li>
          <li>
            <Link href="/plattegrond">plattegrond</Link>
          </li>
          <li>
            <Link href="/organisatie">organisatie</Link>
          </li>
        </ul>
      </header>
      <main className="bg-gray-100 flex-1 p-2">{children}</main>
      <footer className="bg-gray-200 p-5">hoi</footer>
    </div>
  );
};
