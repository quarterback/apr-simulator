import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [output, setOutput] = useState("");

  const simulateAPR = () => {
    const fws = 32.5;
    const lsc = 1.25;
    const osi = 0.92;
    const owp = 0.85;
    const apr = ((fws + (owp * 10)) / 2) * osi;
    setOutput(`APR Score: ${apr.toFixed(2)}`);
  };

  return (
    <div>
      <Head>
        <title>APR Simulator</title>
      </Head>
      <main>
        <h1>APR Simulator</h1>
        <button onClick={simulateAPR}>Simulate APR</button>
        <p>{output}</p>
      </main>
    </div>
  );
}
