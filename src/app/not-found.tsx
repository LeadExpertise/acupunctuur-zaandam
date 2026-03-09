import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold">404 — Pagina niet gevonden</h1>
      <p className="mt-4 text-gray-600">
        De pagina die je zoekt bestaat niet.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
      >
        Terug naar home
      </Link>
    </main>
  );
}
