import React from 'react';
import { Link } from 'react-router-dom';
import './MessageSection.scss';

export default function MessageSection({
  topLine = 'DO YOU HAVE',
  middleLine = 'A MESSAGE',
  bottomLine = 'FOR US?',
  buttonText = 'Contact Us',
  buttonLink = '/contact',
  className = '',
}) {
  return (
    <section className={`message-section ${className}`} aria-label="Contact Call to Action">
      <div className="message-section__inner">
        <div className="message-section__typography">
          <span className="message-section__line message-section__line--top">
            {topLine}
          </span>
          <span className="message-section__line message-section__line--middle">
            {middleLine}
          </span>
          <span className="message-section__line message-section__line--bottom">
            {bottomLine}
          </span>
        </div>

        <div className="message-section__action">
          <Link to={buttonLink} className="message-section__btn">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
