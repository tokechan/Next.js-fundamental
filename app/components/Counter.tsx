"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    console.log(count);
  }

  function decrement() {
    setCount(count - 1);
    console.log(count);
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Counter</h2>
      <div className="flex items-center gap-4">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          -
        </button>
        <span className="text-3xl font-bold">{count}</span>
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          +
        </button>
      </div>
    </div>
  );
}