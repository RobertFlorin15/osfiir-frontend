import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BOARD_MEMBERS } from '../data/demoData';

export default function BoardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const total = BOARD_MEMBERS.length; // 9 persoane la board

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  const getRelativeOffset = (index) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section
      className="board-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Board OSFIIR 2026 - 2027"
    >
      <h2 className="board-section__title">
        <span>BOARD</span> <span className="board-section__years">2026 - 2027</span>
      </h2>

      <div className="board-carousel">
        <button
          type="button"
          className="board-carousel__arrow board-carousel__arrow--left"
          onClick={prevSlide}
          aria-label="Membrul anterior din Board"
        >
          <ChevronLeft size={22} strokeWidth={3} />
        </button>

        <div className="board-carousel__stage">
          {BOARD_MEMBERS.map((member, index) => {
            const offset = getRelativeOffset(index);
            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;
            const isFarLeft = offset === -2;
            const isFarRight = offset === 2;

            let positionClass = 'board-card-wrap--hidden';
            if (isCenter) positionClass = 'board-card-wrap--center';
            else if (isLeft) positionClass = 'board-card-wrap--left';
            else if (isRight) positionClass = 'board-card-wrap--right';
            else if (isFarLeft) positionClass = 'board-card-wrap--far-left';
            else if (isFarRight) positionClass = 'board-card-wrap--far-right';

            return (
              <div
                key={member.id}
                className={`board-card-wrap ${positionClass}`}
                onClick={() => {
                  if (isLeft) prevSlide();
                  if (isRight) nextSlide();
                }}
                role={isLeft || isRight ? 'button' : undefined}
                tabIndex={isCenter || isLeft || isRight ? 0 : -1}
                aria-hidden={!isCenter && !isLeft && !isRight}
              >
                <div
                  className={`board-card ${
                    isCenter ? 'board-card--primary' : 'board-card--secondary'
                  }`}
                >
                  <div className="board-card__visual">
                    <div className="board-card__orange-bg" />
                  </div>

                  <div className="board-card__info">
                    <h3 className="board-card__name">{member.name}</h3>
                    <div className="board-card__role-pill">{member.role}</div>
                    <a
                      href={`mailto:${member.email}`}
                      className="board-card__email"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
        <button
          type="button"
          className="board-carousel__arrow board-carousel__arrow--right"
          onClick={nextSlide}
          aria-label="Membrul următor din Board"
        >
          <ChevronRight size={22} strokeWidth={3} />
        </button>
      </div>

      <div className="board-carousel__mobile-controls">
        <button
          type="button"
          className="board-carousel__mobile-btn"
          onClick={prevSlide}
          aria-label="Anteriorul"
        >
          <ChevronLeft size={20} strokeWidth={3} />
        </button>
        <div className="board-carousel__mobile-line">
          <div
            className="board-carousel__mobile-line-fill"
            style={{
              width: `${((activeIndex + 1) / total) * 100}%`,
            }}
          />
        </div>
        <button
          type="button"
          className="board-carousel__mobile-btn"
          onClick={nextSlide}
          aria-label="Următorul"
        >
          <ChevronRight size={20} strokeWidth={3} />
        </button>
      </div>

      {/* Punctele tip insta */}
      <div className="board-carousel__dots" role="tablist" aria-label="Selectează membrul Board">
        {BOARD_MEMBERS.map((member, idx) => (
          <button
            key={member.id}
            type="button"
            role="tab"
            aria-selected={idx === activeIndex}
            aria-label={`${member.name} - ${member.role} (${idx + 1} din ${total})`}
            className={`board-carousel__dot ${
              idx === activeIndex ? 'board-carousel__dot--active' : ''
            }`}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
}
