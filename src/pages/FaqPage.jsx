import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import MessageSection from '../components/MessageSection';
import { FAQ_ITEMS } from '../data/demoData';

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="subpage">
      <section className="subpage-hero">
        <div className="subpage-hero__container">
          <h1 className="about-hero__title">FAQ</h1>
          <p className="subpage-hero__lead">
            Întrebări frecvente despre OSFIIR, activitățile din facultate și serviciile
            pentru studenți.
          </p>
        </div>
      </section>

      <section className="subpage-section">
        <div className="subpage-container">
          <div className="faq-list">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-item__trigger"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      size={20}
                      className={`faq-item__chevron ${isOpen ? 'is-rotated' : ''}`}
                    />
                  </button>
                  {isOpen && <div className="faq-item__answer">{item.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <MessageSection />
    </div>
  );
}
