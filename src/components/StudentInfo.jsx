import React from "react";
export default function StudentInfo({ student }) {
  const details = [
    ["Età", `${student.age} anni`],
    ["Corso di studi", student.course],
    ["Codice classe", student.classCode]
  ];

  return (
    <section className="panel info-panel">
      <h2>Informazioni Studente</h2>
      <dl className="details-list">
        {details.map(([label, value]) => (
          <div className="detail-row" key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
