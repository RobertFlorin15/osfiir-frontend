import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="subpage">
      <section className="subpage-hero">
        <div className="subpage-hero__container">
          <h1 className="about-hero__title">CONTACT</h1>
          <p className="subpage-hero__lead">
            Ai o întrebare, o propunere de proiect sau vrei să devii partener OSFIIR?
            Scrie-ne un mesaj!
          </p>
        </div>
      </section>

      <section className="subpage-section" style={{ paddingBottom: '5rem' }}>
        <div className="subpage-container">
          <div className="contact-layout">
            <div className="contact-info-box">
              <h2>Date de contact</h2>
              <p>
                Echipa noastră îți stă la dispoziție pentru orice întrebare legată de
                viața studențească la FIIR.
              </p>

              <div className="contact-info-list">
                <div className="contact-info-row">
                  <span className="contact-info-icon" style={{ background: '#F58A1F' }}>
                    <MapPin size={20} />
                  </span>
                  <div>
                    <strong>Adresă</strong>
                    <p>Splaiul Independenței 313, București (Campus UPB - FIIR)</p>
                  </div>
                </div>

                <div className="contact-info-row">
                  <span className="contact-info-icon" style={{ background: '#2C55A5' }}>
                    <Phone size={20} />
                  </span>
                  <div>
                    <strong>Telefon</strong>
                    <p>+40 721 000 000</p>
                  </div>
                </div>

                <div className="contact-info-row">
                  <span className="contact-info-icon" style={{ background: '#249E48' }}>
                    <Mail size={20} />
                  </span>
                  <div>
                    <strong>Email</strong>
                    <p>office@osfiir.ro</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-card">
              {sent ? (
                <div className="form-success">
                  <CheckCircle2 size={54} color="#249E48" />
                  <h2>Mesajul a fost trimis (Demo)!</h2>
                  <p>Îți mulțumim! Echipa OSFIIR îți va răspunde în cel mai scurt timp.</p>
                  <button
                    type="button"
                    className="btn-green-pill"
                    onClick={() => setSent(false)}
                  >
                    Trimite încă un mesaj
                  </button>
                </div>
              ) : (
                <form className="osfiir-form" onSubmit={handleSubmit}>
                  <div className="osfiir-form__grid">
                    <div className="osfiir-form__field">
                      <label>Nume complet</label>
                      <input type="text" required placeholder="Numele tău" />
                    </div>
                    <div className="osfiir-form__field">
                      <label>Adresă de email</label>
                      <input type="email" required placeholder="email@exemplu.ro" />
                    </div>
                  </div>
                  <div className="osfiir-form__field" style={{ marginTop: '1rem' }}>
                    <label>Subiect</label>
                    <input type="text" required placeholder="Cu ce te putem ajuta?" />
                  </div>
                  <div className="osfiir-form__field" style={{ marginTop: '1rem' }}>
                    <label>Mesaj</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Scrie mesajul tău aici..."
                    />
                  </div>
                  <div className="osfiir-form__submit">
                    <button type="submit" className="btn-green-pill">
                      <Send size={16} /> Trimite Mesajul
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
