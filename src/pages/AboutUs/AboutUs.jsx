import React from 'react';
import BoardCarousel from '../../components/BoardCarousel/BoardCarousel';
import DepartmentsCarousel from '../../components/DepartmentsCarousel/DepartmentsCarousel';
import MessageSection from '../../components/MessageSection/MessageSection';
import { ViziuneIcon, MisiuneIcon, ValoriIcon } from '../../components/AboutUs/PillarIcons';
import './AboutUs.scss';

export default function AboutUs() {

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
