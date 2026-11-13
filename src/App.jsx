import React from "react";
import { studentData } from "./data";
import StudentHeader from "./components/StudentHeader";
import StudentInfo from "./components/StudentInfo";
import Evaluations from "./components/Evaluations";
import AttendanceCard from "./components/AttendanceCard";
import InterviewProposal from "./components/InterviewProposal";

export default function App() {
  // L'intero oggetto dati viene passato al componente principale della dashboard.
  return (
    <main className="page-shell">
      <div className="dashboard">
        <StudentHeader student={studentData.student} />

        <div className="dashboard-grid">
          <section className="main-column" aria-label="Riepilogo studente">
            <StudentInfo student={studentData.student} />
            <Evaluations evaluations={studentData.evaluations} />
          </section>

          <aside className="side-column" aria-label="Informazioni aggiuntive">
            <AttendanceCard
              attendance={studentData.attendance}
              note={studentData.note}
            />
            <InterviewProposal />
          </aside>
        </div>

        <footer className="footer">
          Copyright © Portale Studente - Tutti i diritti riservati
        </footer>
      </div>
    </main>
  );
}
