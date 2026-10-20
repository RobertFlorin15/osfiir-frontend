import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import OsfiirLogo from '../OsfiirLogo/OsfiirLogo';
import './Footer.scss';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <button
        type="button"
        className="site-footer__scroll-top"
        onClick={scrollToTop}
        aria-label="Înapoi sus"
      >
        <ArrowUp size={20} strokeWidth={2.8} />
      </button>

      <div className="site-footer__container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link to="/" className="site-footer__logo-link" onClick={scrollToTop}>
              <OsfiirLogo size="lg" />
            </Link>
          </div>

          <div className="site-footer__contact">
            <div className="site-footer__contact-item">
              <span className="site-footer__icon-circle">
                <MapPin size={15} />
              </span>
              <span>Splaiul Independenței 313, București</span>
            </div>
            <div className="site-footer__contact-item">
              <span className="site-footer__icon-circle">
                <Phone size={15} />
              </span>
              <span>+40 721 000 000</span>
            </div>
            <div className="site-footer__contact-item">
              <span className="site-footer__icon-circle">
                <Mail size={15} />
              </span>
              <span>office@osfiir.ro</span>
            </div>
          </div>

          <div className="site-footer__about">
            <h3 className="site-footer__about-title">Despre OSFIIR</h3>
            <p className="site-footer__about-text">
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
              opposed to using &apos;Content here, content here&apos;, making it look.
            </p>
          </div>
        </div>

        <div className="site-footer__bottom">
          <div className="site-footer__bottom-left">
            <nav className="site-footer__links" aria-label="Linkuri subsol">
              <Link to="/">Acasă</Link>
              <span className="site-footer__sep">|</span>
              <Link to="/despre-noi">Despre noi</Link>
              <span className="site-footer__sep">|</span>
              <Link to="/despre-facultate">Despre facultate</Link>
              <span className="site-footer__sep">|</span>
              <Link to="/evenimente">Evenimente</Link>
              <span className="site-footer__sep">|</span>
              <Link to="/faq">FAQ</Link>
            </nav>
            <div className="site-footer__copy">© OSFIIR 2026</div>
          </div>

          <div className="site-footer__socials">
            <span className="site-footer__socials-label">FOLLOW US ON SOCIAL MEDIA</span>
            <div className="site-footer__social-icons">
              <a
                href="https://facebook.com" //facebook (daca avea emojiuri il puneam pe ala cu inima franta)
                target="_blank"
                rel="noreferrer"
                className="site-footer__social-btn"
                aria-label="Facebook OSFIIR"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com" //de schimbat (exista?)) )
                target="_blank"
                rel="noreferrer"
                className="site-footer__social-btn"
                aria-label="TikTok OSFIIR"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z" />
                </svg>
              </a>
              <a
                href="https://instagram.com" //de schimbat
                target="_blank"
                rel="noreferrer"
                className="site-footer__social-btn"
                aria-label="Instagram OSFIIR"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
