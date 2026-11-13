import React from "react";
export default function StudentHeader({ student }) {
  const initials = `${student.firstName[0]}${student.lastName[0]}`;

  return (
    <header className="student-header panel">
      <div className="avatar" aria-hidden="true">{initials}</div>
      <div>
        <p className="eyebrow">Profilo studente</p>
        <h1>{student.firstName} {student.lastName}</h1>
      </div>
    </header>
  );
}
