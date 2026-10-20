import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BoardCarousel from '../../components/BoardCarousel/BoardCarousel';
import MessageSection from '../../components/MessageSection/MessageSection';
import HeroBlobPhoto from '../../components/Home/HeroBlobPhoto';
import { HOME_DEPARTMENTS } from '../../utils/demoData';
import './Home.scss';

export default function Home() {
  const [selectedDeptIndex, setSelectedDeptIndex] = useState(0);
  const activeDept = HOME_DEPARTMENTS[selectedDeptIndex];

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-section__container">
          <div className="hero-section__content">
            <h1 className="hero-section__title">
              <span className="hero-section__welcome">WELCOME TO</span>
              <span className="hero-section__brand">OSFIIR!</span>
            </h1>

            {/* Mobile-only visual placement right under title (matches Image 1) */}
            <div className="hero-section__visual hero-section__visual--mobile">
              <HeroBlobPhoto />
            </div>

            <p className="hero-section__text">
              It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using Lorem Ipsum
              is that it has a more-or-less normal distribution of letters, as opposed to
              using &apos;Content here, content here&apos;, making it look like readable
              English. Many desktop publishing packages and web page editors now use Lorem
              Ipsum as their default model te (injected humour and the like).
            </p>

            <div className="hero-section__cta-wrap">
              <Link to="/afla-departamentul" className="btn-green-pill hero-section__cta">
                Ce departament ți se potrivește ?
              </Link>
            </div>
          </div>

          <div className="hero-section__visual hero-section__visual--desktop">
            <HeroBlobPhoto />
          </div>
        </div>
      </section>

      <section className="home-about">
        <div className="home-about__container">
          <div className="home-about__top">
            <div className="home-about__heading-block">
              <div className="home-about__stacked-title" aria-label="ABOUT US">
                <span className="home-about__word-about">ABOUT</span>
                <div className="home-about__us-row">
                  <span className="home-about__word-us" data-text="US">
                    US
                  </span>
                  {/* Desktop horizontal arrow */}
                  <svg
                    className="home-about__arrow-desktop"
                    viewBox="0 0 140 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <line
                      x1="0"
                      y1="12"
                      x2="134"
                      y2="12"
                      stroke="#2C55A5"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M124 4L135 12L124 20"
                      stroke="#2C55A5"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div className="home-about__arrows-mobile" aria-hidden="true">
                    <span className="v-arrow v-arrow--1" />
                    <span className="v-arrow v-arrow--2" />
                    <span className="v-arrow v-arrow--3" />
                  </div>
                </div>
              </div>
            </div>

            <div className="home-about__description-wrap">
              <p className="home-about__text">
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of using
                Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                as opposed to using &apos;Content here, content here&apos;, making it look
                like readable English. Many desktop publishing packages and web page
                editors now use Lorem Ipsum as their default model text, and a search for
                &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by accident,
                sometimes on purpose (injected humour and the like).
              </p>
              <div className="home-about__readmore-wrap">
                <Link to="/despre-noi" className="btn-green-pill home-about__readmore">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="home-about__collage">
            <div className="home-about__stars" aria-hidden="true">
              <svg viewBox="0 0 80 65" width="76" height="62">
                <polygon
                  points="22,2 27,14 40,15 30,24 33,37 22,30 11,37 14,24 4,15 17,14"
                  fill="#F58A1F"
                />
                <polygon
                  points="56,8 59,17 69,18 61,24 64,33 56,28 48,33 51,24 43,18 53,17"
                  fill="#2C55A5"
                />
                <polygon
                  points="38,36 41,44 49,45 43,50 45,58 38,54 31,58 33,50 27,45 35,44"
                  fill="#249E48"
                />
              </svg>
            </div>

            {/* Left green-bordered placeholder card (Desktop) */}
            <div className="home-about__card home-about__card--left">
              <div className="home-about__card-placeholder" />
            </div>

            {/* Center blue-bordered placeholder card */}
            <div className="home-about__card home-about__card--center">
              <div className="home-about__card-placeholder" />
            </div>

            {/* Right orange-bordered placeholder card */}
            <div className="home-about__card home-about__card--right">
              <div className="home-about__card-placeholder" />
            </div>
          </div>
        </div>
      </section>

      <BoardCarousel />

      <section className="home-depts">
        <div className="home-depts__container">
          {/* Reflected Heading */}
          <div className="reflected-heading">
            <h2 className="reflected-heading__main">DEPARTAMENTE</h2>
            <div className="reflected-heading__mirror" aria-hidden="true">
              DEPARTAMENTE
            </div>
          </div>

          <div className="home-depts__content">
            <div className="home-depts__details" key={activeDept.id}>
              <div className="home-depts__emblem">
                <span className="home-depts__big-letters">{activeDept.shortCode}</span>
                <span className="home-depts__outlined-sub">{activeDept.outlineTitle}</span>
              </div>
              <p className="home-depts__text">{activeDept.description}</p>
            </div>

            <div className="home-depts__selector-wrap">
              <div className="home-depts__pills">
                {HOME_DEPARTMENTS.map((dept, index) => {
                  const isActive = index === selectedDeptIndex;
                  return (
                    <button
                      key={dept.id}
                      type="button"
                      onClick={() => setSelectedDeptIndex(index)}
                      className={`home-depts__pill ${
                        isActive ? 'home-depts__pill--active' : ''
                      }`}
                    >
                      {dept.buttonLabel}
                    </button>
                  );
                })}
              </div>

              <div className="home-depts__side-dots" aria-hidden="true">
                {[0, 1, 2].map((dotIdx) => (
                  <span
                    key={dotIdx}
                    className={`home-depts__side-dot ${
                      selectedDeptIndex % 3 === dotIdx ? 'is-active' : ''
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MessageSection />
    </div>
  );
}
