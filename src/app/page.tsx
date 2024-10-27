"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-6xl">Hello World</h1>
    </div>
  );
}
