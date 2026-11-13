import React, { useState } from "react";

const STORAGE_KEY = "motivazioneColloquio";

export default function InterviewProposal() {
  const [proposal, setProposal] = useState("no");
  const [motivation, setMotivation] = useState(
    () => localStorage.getItem(STORAGE_KEY) ?? "",
  );

  function handleSave() {
    if (proposal !== "si") return;

    const value = motivation.trim();
    if (!value) {
      alert("Inserisci una motivazione prima di salvare.");
      return;
    }

    localStorage.setItem(STORAGE_KEY, value);
    // Il valore viene mostrato anche nella Console del browser.
    console.log(`Key: ${STORAGE_KEY}`);
    console.log(`Value: ${value}`);
    alert(`Motivazione salvata: ${value}`);
  }

  return (
    <section className="panel interview-panel">
      <h2>Colloquio</h2>

      <fieldset className="radio-fieldset">
        <legend>Proporre a colloquio?</legend>
        <label className="radio-option">
          <input
            type="radio"
            name="interview"
            value="si"
            checked={proposal === "si"}
            onChange={() => setProposal("si")}
          />
          <span>Sì</span>
        </label>
        <label className="radio-option">
          <input
            type="radio"
            name="interview"
            value="no"
            checked={proposal === "no"}
            onChange={() => setProposal("no")}
          />
          <span>No</span>
        </label>
      </fieldset>

      {proposal === "si" && (
        <div className="motivation-area">
          <label htmlFor="motivation">Motivazione</label>
          <textarea
            id="motivation"
            rows="3"
            placeholder="Inserisci la motivazione..."
            value={motivation}
            onChange={(event) => setMotivation(event.target.value)}
          />
          <button type="button" onClick={handleSave}>
            Salva
          </button>
        </div>
      )}
    </section>
  );
}
