import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/health`;

    fetch(apiUrl)
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