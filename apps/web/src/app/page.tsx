'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => { setCount(c => c + 1); }, 1000);
  }, []);
  const changeColor = () => { document.getElementById('title').style.color = 'red'; };

  return (
    <main className="p-24 flex flex-col items-center">
      <h1 id="title" className="text-4xl font-bold">Candidate Challenge</h1>
      <p>Counter: {count}</p>
      <button onClick={changeColor} className="bg-blue-500 text-white p-2 mt-4 rounded">Change Color</button>
    </main>
  );
}
