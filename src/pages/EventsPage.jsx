import React, { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import MessageSection from '../components/MessageSection';
import { DEMO_EVENTS } from '../data/demoData';

const CATEGORIES = ['Toate', 'Social', 'Tehnic', 'Carieră', 'Sport & Gaming', 'Educațional', 'Caritabil'];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('Toate');

  const filteredEvents =
    activeCategory === 'Toate'
      ? DEMO_EVENTS
      : DEMO_EVENTS.filter((e) => e.category === activeCategory);

  return (
    <div className="subpage">
      <section className="subpage-hero">
        <div className="subpage-hero__container">
          <h1 className="about-hero__title">EVENIMENTE</h1>
          <p className="subpage-hero__lead">
            Descoperă proiectele, competițiile și activitățile organizate de voluntarii
            OSFIIR pentru studenți.
          </p>

          <div className="filter-pills">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`filter-pill ${activeCategory === cat ? 'filter-pill--active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="subpage-section">
        <div className="subpage-container">
          <div className="events-grid">
            {filteredEvents.map((ev) => (
              <article
                key={ev.id}
                className="event-card"
                style={{ borderColor: ev.badgeColor }}
              >
                <div className="event-card__img-wrap">
                  <div className="home-about__card-placeholder" />
                  <span
                    className="event-card__badge"
                    style={{ backgroundColor: ev.badgeColor }}
                  >
                    {ev.category}
                  </span>
                </div>
                <div className="event-card__body">
                  <h3 className="event-card__title">{ev.title}</h3>
                  <div className="event-card__meta">
                    <span>
                      <Calendar size={15} /> {ev.date}
                    </span>
                    <span>
                      <MapPin size={15} /> {ev.location}
                    </span>
                  </div>
                  <p className="event-card__desc">{ev.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MessageSection />
    </div>
  );
}
