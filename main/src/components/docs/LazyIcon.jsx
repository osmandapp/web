import React from 'react';
import LazyVisible from './legend/LazyVisible';
import styles from './legenditem.module.css';

export default function LazyIcon({ legendBackground, src, alt, className }) {
  const placeholder = (
    <div
      className={className}
      style={{ legendBackground }}
    />
  );

  return (
    <LazyVisible>
      {({ isVisible }) =>
        isVisible
          ? <img src={src} alt={alt} className={className} />
          : placeholder
      }
    </LazyVisible>
  );
}