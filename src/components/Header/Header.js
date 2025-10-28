import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  // Definiujemy elementy menu w tablicy dla czystości kodu
  const menuItems = [
    { label: 'O NAS', href: '#about' },
    { label: 'UMIEJĘTNOŚCI', href: '#skills' },
    { label: 'PROJEKTY', href: '#projects' },
    { label: 'KONTAKT', href: '#contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.prompt}>
        &gt;_ C:\PORTFOLIO&gt;_
      </div>
      <nav className={styles.nav}>
        {menuItems.map((item) => (
          <a key={item.label} href={item.href} className={styles.navLink}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;