import { useState } from "react";

export default function LeadMachine() {
  const [produkt, setProdukt] = useState("");
  const [zielgruppe, setZielgruppe] = useState("");
  const [email, setEmail] = useState("");

  const handleGenerate = () => {
    setEmail(`Sehr geehrte Damen und Herren,\n\nwir bieten Lösungen für ${produkt}, speziell für ${zielgruppe}.\n\nMit freundlichen Grüßen\nLeadMachine-Team`);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>LeadMachine</h1>
      <input placeholder="Produkt" value={produkt} onChange={e => setProdukt(e.target.value)} />
      <input placeholder="Zielgruppe" value={zielgruppe} onChange={e => setZielgruppe(e.target.value)} />
      <button onClick={handleGenerate}>E-Mail generieren</button>
      <pre>{email}</pre>
    </div>
  );
}
