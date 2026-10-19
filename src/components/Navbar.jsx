import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import OsfiirLogo from './OsfiirLogo';

const NAV_ITEMS = [
  {
    label: 'Acasă',
    path: '/',
  },
  {
    label: 'Despre',
    children: [
      { label: 'Despre noi', path: '/despre-noi' },
      { label: 'Despre facultate', path: '/despre-facultate' },
    ],
  },
  {
    label: 'Implică-te',
    children: [
      { label: 'Evenimente', path: '/evenimente' },
      { label: 'Află departamentul tău', path: '/afla-departamentul' },
    ],
  },
  {
    label: 'Servicii Studenți',
    children: [
      { label: 'Cerere spălătorie', path: '/cerere-spalatorie' },
      { label: 'FAQ', path: '/faq' },
    ],
  },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getCurrentPageLabel = () => {
    if (location.pathname === '/') return 'Acasă';
    if (location.pathname === '/contact') return 'Contact';
    for (const item of NAV_ITEMS) {
      if (item.children) {
        const found = item.children.find((c) => c.path === location.pathname);
        if (found) return found.label;
      }
    }
    return 'Acasă';
  };

  const isParentActive = (item) => {
    if (item.path) return location.pathname === item.path;
    return item.children?.some((c) => c.path === location.pathname);
  };

  return (
    <header className="navbar-header" ref={navRef}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-link" aria-label="OSFIIR Acasă">
          <OsfiirLogo />
        </Link>

        <div className="navbar-mobile-current">
          <span className="navbar-mobile-current__text">{getCurrentPageLabel()}</span>
          <span className="navbar-mobile-current__underline" />
        </div>

        {/* Desktop Pill Navigation */}
        <nav className="navbar-pill" aria-label="Navigație principală">
          {NAV_ITEMS.map((item) => {
            const active = isParentActive(item);
            if (!item.children) {
              return (
                <div key={item.label} className="navbar-item">
                  <NavLink
                    to={item.path}
                    className={`navbar-link ${active ? 'navbar-link--active' : ''}`}
                  >
                    {item.label}
                  </NavLink>
                </div>
              );
            }

            const isOpen = openDropdown === item.label;

            return (
              <div
                key={item.label}
                className={`navbar-item navbar-item--has-dropdown ${isOpen ? 'is-open' : ''}`}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={`navbar-link navbar-dropdown-trigger ${active ? 'navbar-link--active' : ''}`}
                  onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                  aria-expanded={isOpen}
                >
                  {item.label}
                </button>

                {/* Seamless blue rounded dropdown tab matching Image 3 */}
                <div className={`navbar-dropdown ${isOpen ? 'navbar-dropdown--open' : ''}`}>
                  <div className="navbar-dropdown__inner">
                    {item.children.map((sub) => (
                      <NavLink
                        key={sub.path}
                        to={sub.path}
                        className={({ isActive }) =>
                          `navbar-dropdown__link ${isActive ? 'navbar-dropdown__link--active' : ''}`
                        }
                      >
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <Link to="/contact" className="navbar-contact-btn">
          Contact
        </Link>

        <button
          type="button"
          className="navbar-mobile-toggle"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Deschide meniul"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="navbar-mobile-drawer">
          <div className="navbar-mobile-drawer__list">
            {NAV_ITEMS.map((item) => {
              if (!item.children) {
                return (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) =>
                      `navbar-mobile-link ${isActive ? 'navbar-mobile-link--active' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              }
              const expanded = mobileAccordion === item.label || isParentActive(item);
              return (
                <div key={item.label} className="navbar-mobile-group">
                  <button
                    type="button"
                    className="navbar-mobile-group__btn"
                    onClick={() =>
                      setMobileAccordion(mobileAccordion === item.label ? null : item.label)
                    }
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={18}
                      className={`navbar-mobile-chevron ${expanded ? 'is-rotated' : ''}`}
                    />
                  </button>
                  {expanded && (
                    <div className="navbar-mobile-sublist">
                      {item.children.map((sub) => (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          className={({ isActive }) =>
                            `navbar-mobile-sublink ${isActive ? 'navbar-mobile-sublink--active' : ''}`
                          }
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link to="/contact" className="navbar-mobile-contact">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
