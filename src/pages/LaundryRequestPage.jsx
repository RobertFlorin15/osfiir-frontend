import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import MessageSection from '../components/MessageSection';

export default function LaundryRequestPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dorm: 'P16',
    room: '',
    date: '',
    slot: '10:00 - 12:00',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="subpage">
      <section className="subpage-hero">
        <div className="subpage-hero__container">
          <h1 className="about-hero__title">CERERE SPĂLĂTORIE</h1>
          <p className="subpage-hero__lead">
            Rezervă rapid un interval orar la spălătoria căminului prin platforma OSFIIR.
          </p>
        </div>
      </section>

      <section className="subpage-section">
        <div className="subpage-container">
          <div className="form-card">
            {submitted ? (
              <div className="form-success">
                <CheckCircle2 size={54} color="#249E48" />
                <h2>Cererea ta a fost înregistrată (Demo)!</h2>
                <p>
                  Intervalul <strong>{formData.slot}</strong> în căminul{' '}
                  <strong>{formData.dorm}</strong> a fost rezervat pe numele{' '}
                  <strong>{formData.name || 'Student FIIR'}</strong>.
                </p>
                <button
                  type="button"
                  className="btn-green-pill"
                  onClick={() => setSubmitted(false)}
                >
                  Fă o nouă programare
                </button>
              </div>
            ) : (
              <form className="osfiir-form" onSubmit={handleSubmit}>
                <div className="osfiir-form__grid">
                  <div className="osfiir-form__field">
                    <label>Nume și Prenume</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Andrei Popescu"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="osfiir-form__field">
                    <label>Email Studențesc</label>
                    <input
                      type="email"
                      required
                      placeholder="student@stud.fiir.upb.ro"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="osfiir-form__field">
                    <label>Cămin</label>
                    <select
                      value={formData.dorm}
                      onChange={(e) => setFormData({ ...formData, dorm: e.target.value })}
                    >
                      <option value="P25">Cămin P25</option>
                      <option value="P4">Cămin P4</option>
                    </select>
                  </div>
                  <div className="osfiir-form__field">
                    <label>Număr Cameră</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: 304"
                      value={formData.room}
                      onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                    />
                  </div>
                  <div className="osfiir-form__field">
                    <label>Data programării</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div className="osfiir-form__field">
                    <label>Interval Orar</label>
                    <select
                      value={formData.slot}
                      onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                    >
                      <option value="08:00 - 10:00">08:00 - 10:00</option>
                      <option value="10:00 - 12:00">10:00 - 12:00</option>
                      <option value="12:00 - 14:00">12:00 - 14:00</option>
                      <option value="14:00 - 16:00">14:00 - 16:00</option>
                      <option value="18:00 - 20:00">18:00 - 20:00</option>
                    </select>
                  </div>
                </div>
                <div className="osfiir-form__submit">
                  <button type="submit" className="btn-green-pill">
                    Trimite Cererea de Spălătorie
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <MessageSection />
    </div>
  );
}
