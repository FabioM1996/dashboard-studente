import React from "react";
export default function Evaluations({ evaluations }) {
  return (
    <section className="panel evaluations-panel">
      <h2>Valutazioni</h2>
      <ul className="evaluation-list">
        {evaluations.map((item) => (
          <li className="evaluation-row" key={item.id}>
            <span className="evaluation-topic">{item.topic}</span>
            <span className="evaluation-percent">{item.percentage}%</span>
            <strong className="evaluation-score">{item.score}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
