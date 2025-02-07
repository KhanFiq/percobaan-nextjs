"use client";

import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");

  const handleClick = (value: string) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("0");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-blue-500">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <div className="mb-4 p-4 text-right bg-gray-300 rounded text-2xl font-mono">
          <div className="text-gray-700">{input || "0"}</div>
          <div className="font-bold text-black text-3xl">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", "C", "=", "+"].map((btn) => (
            <button
              key={btn}
              className="p-4 bg-blue-600 text-white rounded-lg text-xl font-bold hover:bg-blue-700 transition duration-200"
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
