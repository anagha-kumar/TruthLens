import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("");

  useEffect(() => {
  fetch("http://127.0.0.1:8000/health")
    .then(res => res.json())
    .then(data => setStatus(data.status))
    .catch(err => console.error("Backend fetch failed:", err));
}, []);

  return (
    <main style={{ padding: 24 }}>
      <h1>TruthLens</h1>
      <p>Backend status: {status}</p>
    </main>
  );
}