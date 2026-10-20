import React from 'react';
import logoSvg from '../../assets/imgs/logo.svg';
import './OsfiirLogo.scss';

export default function OsfiirLogo({ size = 'md', className = '' }) {
  const isLarge = size === 'lg';

  return (
    <div className={`osfiir-logo ${isLarge ? 'osfiir-logo--lg' : ''} ${className}`}>
      <img
        src={logoSvg}
        alt="OSFIIR - Organizația Studenților din Facultatea de Inginerie Industrială și Robotică"
        className="osfiir-logo__img"
      />
    </div>
  );
}
