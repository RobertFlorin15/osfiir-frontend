import React from 'react';
import { Cpu, Cog, Award } from 'lucide-react';
import MessageSection from '../components/MessageSection';

export default function FacultyPage() {
  const specs = [
    {
      title: 'Robotică și Automatizări',
      color: '#2C55A5',
      desc: 'Proiectarea sistemelor robotice industriale, senzori, cinematică și inteligență artificială aplicată în producție.',
    },
    {
      title: 'Inginerie Industrială & CAD/CAM',
      color: '#F58A1F',
      desc: 'Modelare 3D avansată, fabricație aditivă, optimizarea proceselor tehnologice și proiectare asistată de calculator.',
    },
    {
      title: 'Ingineria Calității & Logistică',
      color: '#249E48',
      desc: 'Managementul sistemelor industriale, logistică integrată, ergonomie și asigurarea calității în industrie.',
    },
  ];

  return (
    <div className="subpage">
      <section className="subpage-hero">
        <div className="subpage-hero__container">
          <h1 className="about-hero__title">DESPRE FACULTATE</h1>
          <p className="subpage-hero__lead">
            Facultatea de Inginerie Industrială și Robotică (FIIR) din cadrul UNSTPB
            pregătește inginerii viitorului în domenii de vârf ale tehnologiei moderne.
          </p>
        </div>
      </section>

      <section className="about-hero" style={{ paddingTop: '1rem' }}>
        <div className="about-hero__container">
          <div className="about-hero__grid">
            <div className="about-hero__text-col">
              <h2 className="about-hero__subtitle">TRADIȚIE ȘI INOVAȚIE LA FIIR</h2>
              <p className="about-hero__paragraph">
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of using
                Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                as opposed to using &apos;Content here, content here&apos;, making it look
                like readable English. Many desktop publishing packages and web page
                editors now use Lorem Ipsum as their default model text.
              </p>
            </div>
            <div className="about-hero__image-col">
              <div className="about-hero__photo-frame">
                <div className="home-about__card-placeholder" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="subpage-section">
        <div className="subpage-container">
          <div className="reflected-heading">
            <h2 className="reflected-heading__main">DOMENII DE STUDIU</h2>
            <div className="reflected-heading__mirror" aria-hidden="true">
              DOMENII DE STUDIU
            </div>
          </div>

          <div className="demo-cards-grid">
            {specs.map((s, idx) => (
              <div
                key={idx}
                className="demo-feature-card"
                style={{ borderColor: s.color }}
              >
                <div className="demo-feature-card__icon" style={{ color: s.color }}>
                  {idx === 0 ? <Cpu size={36} /> : idx === 1 ? <Cog size={36} /> : <Award size={36} />}
                </div>
                <h3 className="demo-feature-card__title">{s.title}</h3>
                <p className="demo-feature-card__text">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <MessageSection />
    </div>
  );
}
