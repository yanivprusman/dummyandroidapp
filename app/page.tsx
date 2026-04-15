"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <button
        onClick={() => setCount(count + 1)}
        className="rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-blue-700 active:bg-blue-800"
      >
        Clicked {count} {count === 1 ? "time" : "times"}
      </button>
    </div>
  );
}
