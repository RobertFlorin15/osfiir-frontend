import React, { useState } from 'react';
import { RotateCcw, Sparkles } from 'lucide-react';
import MessageSection from '../components/MessageSection';
import { HOME_DEPARTMENTS } from '../data/demoData';

const QUIZ_QUESTIONS = [
  {
    question: 'Ce îți place cel mai mult să faci într-un proiect de echipă?',
    options: [
      { text: 'Să creez afișe, postări, poze și să promovez proiectul', deptId: 'pr' },
      { text: 'Să aduc oamenii împreună și să mențin atmosfera faină', deptId: 'hr' },
      { text: 'Să negociez cu sponsorii și să atrag resurse pentru echipă', deptId: 'fr' },
      { text: 'Să programez site-ul sau să mă ocup de partea tehnică', deptId: 'it' },
      { text: 'Să planific logistica și agenda evenimentului cap-coadă', deptId: 'proiecte' },
    ],
  },
  {
    question: 'Ce abilitate ai vrea să îți dezvolți cel mai mult în timpul facultății?',
    options: [
      { text: 'Design grafic, copywriting și comunicare în social media', deptId: 'pr' },
      { text: 'Public speaking, training și leadership de echipă', deptId: 'hr' },
      { text: 'Vânzări, persuasiune și networking cu companii de top', deptId: 'fr' },
      { text: 'Dezvoltare web, robotică și automatizări software', deptId: 'it' },
      { text: 'Project management și organizare de evenimente mari', deptId: 'proiecte' },
    ],
  },
  {
    question: 'Cum te-ar descrie prietenii tăi într-un singur cuvânt?',
    options: [
      { text: 'Creativ / Artistic', deptId: 'pr' },
      { text: 'Sociabil / Empatic', deptId: 'hr' },
      { text: 'Convingător / Ambițios', deptId: 'fr' },
      { text: 'Tehnic / Analitic', deptId: 'it' },
      { text: 'Organizat / Pragmatic', deptId: 'proiecte' },
    ],
  },
];

export default function DepartmentQuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleSelectOption = (deptId) => {
    const nextAnswers = [...answers, deptId];
    setAnswers(nextAnswers);
    setStep(step + 1);
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers([]);
  };

  const getRecommendedDept = () => {
    const counts = {};
    for (const id of answers) {
      counts[id] = (counts[id] || 0) + 1;
    }
    let bestId = answers[0] || 'pr';
    let maxCount = 0;
    for (const [id, count] of Object.entries(counts)) {
      if (count > maxCount) {
        maxCount = count;
        bestId = id;
      }
    }
    return HOME_DEPARTMENTS.find((d) => d.id === bestId) || HOME_DEPARTMENTS[0];
  };

  const isFinished = step >= QUIZ_QUESTIONS.length;
  const recommended = isFinished ? getRecommendedDept() : null;

  return (
    <div className="subpage">
      <section className="subpage-hero">
        <div className="subpage-hero__container">
          <h1 className="about-hero__title">AFLĂ DEPARTAMENTUL TĂU</h1>
          <p className="subpage-hero__lead">
            Răspunde la 3 întrebări rapide și descoperă în ce departament OSFIIR te
            potrivești cel mai bine!
          </p>
        </div>
      </section>

      <section className="subpage-section">
        <div className="subpage-container">
          <div className="quiz-card">
            {!isFinished ? (
              <>
                <div className="quiz-card__progress">
                  Întrebarea {step + 1} din {QUIZ_QUESTIONS.length}
                </div>
                <h2 className="quiz-card__question">{QUIZ_QUESTIONS[step].question}</h2>
                <div className="quiz-card__options">
                  {QUIZ_QUESTIONS[step].options.map((opt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="quiz-option-btn"
                      onClick={() => handleSelectOption(opt.deptId)}
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="quiz-result">
                <div className="quiz-result__badge">
                  <Sparkles size={18} /> Departamentul recomandat pentru tine
                </div>
                <h2 className="quiz-result__title">{recommended.roTitle}</h2>
                <p className="quiz-result__sub">{recommended.tag}</p>
                <p className="quiz-result__desc">{recommended.whyText}</p>
                <div className="quiz-result__actions">
                  <button type="button" className="btn-green-pill" onClick={resetQuiz}>
                    <RotateCcw size={16} /> Reia chestionarul
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <MessageSection />
    </div>
  );
}
