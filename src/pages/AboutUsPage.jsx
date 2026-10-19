import React from 'react';
import BoardCarousel from '../components/BoardCarousel';
import DepartmentsCarousel from '../components/DepartmentsCarousel';
import MessageSection from '../components/MessageSection';

export default function AboutUsPage() {

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__container">
          <h1 className="about-hero__title">ABOUT US</h1>

          <div className="about-hero__grid">
            <div className="about-hero__text-col">
              <h2 className="about-hero__subtitle">CINE SUNTEM NOI ?</h2>
              <p className="about-hero__paragraph">
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of using
                Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                as opposed to using &apos;Content here, content here&apos;, making it look
                like readable English. Many desktop publishing packages and web page
                editors now use Lorem Ipsum as their default model text, and a search for
                &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by accident,
                sometimes on purpose (injected humour and the like). {/* bine ca n-a scris in latina totul*/}
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

      <section className="about-pillars">
        <div className="about-pillars__container">
          <div className="pillar-card pillar-card--orange">
            <h3 className="pillar-card__title">VIZIUNE</h3>
            <div className="pillar-card__icon">
              <ViziuneIcon />
            </div>
            <ul className="pillar-card__list">
              <li>Comunitate unită</li>
              <li>Pregătiți pentru viitor</li>
              <li>Experiență completă</li>
            </ul>
          </div>

          <div className="pillar-card pillar-card--blue pillar-card--elevated">
            <h3 className="pillar-card__title pillar-card__title--underlined">MISIUNE</h3>
            <div className="pillar-card__icon">
              <MisiuneIcon />
            </div>
            <ul className="pillar-card__list">
              <li>Reprezentare activă</li>
              <li>Punte de legătură</li>
              <li>Conexiune cu industria</li>
            </ul>
          </div>

          <div className="pillar-card pillar-card--green">
            <h3 className="pillar-card__title">VALORI</h3>
            <div className="pillar-card__icon">
              <ValoriIcon />
            </div>
            <ul className="pillar-card__list">
              <li>Unitate</li>
              <li>Integritate</li>
              <li>Inovație</li>
              <li>Implicare</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-depts">
        <div className="about-depts__container">
          <div className="reflected-heading">
            <h2 className="reflected-heading__main">DEPARTAMENTE</h2>
            <div className="reflected-heading__mirror" aria-hidden="true">
              DEPARTAMENTE
            </div>
          </div>

          <DepartmentsCarousel />
        </div>
      </section>

      <BoardCarousel />

      <MessageSection />
    </div>
  );
}

function ViziuneIcon() {
  return (
    <svg viewBox="0 0 120 110" width="105" height="96" fill="none" stroke="#F58A1F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {/* Stars */}
      <path d="M26 22L29 29L36 32L29 35L26 42L23 35L16 32L23 29L26 22Z" />
      <circle cx="52" cy="18" r="2.5" />
      {/* Telescope tube */}
      <path d="M24 62L78 30L86 44L30 74L24 62Z" />
      <path d="M78 30L90 23L99 39L86 44" />
      <path d="M18 66L24 62L30 74L23 77L18 66Z" />
      {/* Tripod */}
      <path d="M56 58L35 98" />
      <path d="M56 58L56 98" />
      <path d="M56 58L74 88" />
      {/* Gear */}
      <circle cx="82" cy="78" r="10" />
      <circle cx="82" cy="78" r="16" strokeDasharray="6 5" />
    </svg>
  );
}

function MisiuneIcon() {
  return (
    <svg viewBox="0 0 120 110" width="105" height="96" fill="none" stroke="#2C55A5" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
      {/* Outer industrial gear */}
      <circle cx="60" cy="56" r="26" strokeDasharray="8 5" />
      <circle cx="60" cy="56" r="19" />
      {/* Crossed wrenches */}
      <path d="M28 26L45 43M75 73L92 90" />
      <path d="M92 26L75 43M45 73L28 90" />
      <circle cx="25" cy="23" r="6" />
      <circle cx="95" cy="23" r="6" />
      <circle cx="25" cy="93" r="6" />
      <circle cx="95" cy="93" r="6" />
      {/* Handshake / unity center */}
      <path d="M47 56C51 50 57 50 60 54C63 50 69 50 73 56C69 63 63 66 60 66C57 66 51 63 47 56Z" />
    </svg>
  );
}

function ValoriIcon() {
  return (
    <svg viewBox="0 0 120 110" width="105" height="96" fill="none" stroke="#249E48" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {/* Shield with check */}
      <path d="M60 16L78 23V39C78 51 69 60 60 64C51 60 42 51 42 39V23L60 16Z" />
      <path d="M53 39L58 44L68 34" />
      {/* Lightbulb / gear on top right */}
      <circle cx="88" cy="36" r="11" strokeDasharray="5 4" />
      <circle cx="88" cy="36" r="6" />
      {/* Team people at bottom */}
      <circle cx="60" cy="74" r="7" />
      <path d="M46 96C46 88 52 83 60 83C68 83 74 88 74 96" />
      <circle cx="38" cy="78" r="6" />
      <path d="M26 96C26 89 31 85 38 85" />
      <circle cx="82" cy="78" r="6" />
      <path d="M94 96C94 89 89 85 82 85" />
    </svg>
  );
}
