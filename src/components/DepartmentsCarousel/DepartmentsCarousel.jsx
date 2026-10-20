import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Check, Volume2, ChevronLeft, ChevronRight } from 'lucide-react';
import { HOME_DEPARTMENTS } from '../../utils/demoData';
import './DepartmentsCarousel.scss';

export default function DepartmentsCarousel({ departments = HOME_DEPARTMENTS, interval = 6000 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const total = departments.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused || total < 2) return undefined;
    const t = setInterval(next, interval);
    return () => clearInterval(t);
  }, [paused, next, interval, total]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  };

  return (
    <div
      className="dept-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carusel"
      aria-label="Departamente OSFIIR"
    >
      <button
        type="button"
        className="dept-carousel__arrow dept-carousel__arrow--left"
        onClick={prev}
        aria-label="Departamentul anterior"
      >
        <ChevronLeft size={22} strokeWidth={3} />
      </button>

      <div className="dept-carousel__viewport">
        <div
          className="dept-carousel__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {departments.map((dept, i) => (
            <div
              key={dept.id}
              className="dept-carousel__slide"
              aria-hidden={i !== index}
              aria-label={`${i + 1} din ${total}`}
            >
              <div className="about-dept-card">
                <div className="about-dept-card__header">
                  <h3 className="about-dept-card__title">{dept.roTitle}</h3>
                  <span className="about-dept-card__tag">{dept.tag}</span>
                </div>

                <ul className="about-dept-card__bullets">
                  {dept.bullets.map((bullet, idx) => (
                    <li key={idx} className="about-dept-card__bullet-item">
                      <span className="about-dept-card__check">
                        <Check size={14} strokeWidth={3.5} />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="about-dept-card__callout">
                  <div className="about-dept-card__callout-icon">
                    <Volume2 size={26} />
                  </div>
                  <div className="about-dept-card__callout-body">
                    <h4 className="about-dept-card__callout-title">{dept.whyTitle}</h4>
                    <p className="about-dept-card__callout-text">{dept.whyText}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="dept-carousel__arrow dept-carousel__arrow--right"
        onClick={next}
        aria-label="Departamentul următor"
      >
        <ChevronRight size={22} strokeWidth={3} />
      </button>

      <div className="dept-carousel__dots" role="tablist" aria-label="Alege departamentul">
        {departments.map((d, i) => (
          <button
            key={d.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={d.roTitle}
            className={`dept-carousel__dot ${i === index ? 'is-active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
