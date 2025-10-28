import React from 'react';
import styles from './DosWindow.module.css';

// POPRAWKA: Dodajemy 'style' do listy propsów
const DosWindow = ({ title, headerText, children, className, style }) => { 
  return (
    // POPRAWKA: Przekazujemy otrzymany 'style' do głównego diva
    <div className={`${styles.window} ${className || ''}`} style={style}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        {headerText && <span className={styles.headerText}>{headerText}</span>}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default DosWindow;