"use client";

import { useState } from "react";
import { Sidebar } from "@/components/ui/sidebar";

export default function TestPage() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen p-8">
      <h1 className="mb-6 text-2xl font-bold">Component Testing Page</h1>

      <div className="space-y-8">
        <Sidebar />
        <section className="rounded-lg border p-4">
          <h2 className="mb-4 text-xl">Test Component 1</h2>
          <div className="rounded bg-gray-100 p-4">
            {/* Add your components here */}
          </div>
        </section>

        {/* Add more sections as needed */}
      </div>
    </main>
  );
}
