import React from "react";
export default function AttendanceCard({ attendance, note }) {
  return (
    <section className="panel attendance-panel">
      <h2>Ulteriori Informazioni</h2>
      <p className="small-label">Percentuale di frequenza</p>
      <div className="attendance-number">{attendance}<span>%</span></div>
      <div
        className="progress-track"
        role="progressbar"
        aria-label="Percentuale di frequenza"
        aria-valuenow={attendance}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-fill" style={{ width: `${attendance}%` }} />
      </div>
      <p className="small-label note-label">Note</p>
      <p className="student-note">{note}</p>
    </section>
  );
}
