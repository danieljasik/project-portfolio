import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.statusBar}>
      <span>STATUS: ONLINE</span>
      <span style={{ opacity: 0.7 }}>Reality is not what it seems... neither is my code.</span>
      <span>© {new Date().getFullYear()} NEO.DEV | ALL RIGHTS RESERVED</span>
    </footer>
  );
};

const styles = {
  statusBar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'var(--primary-color)',
    color: 'var(--bg-color)',
    padding: '0.3rem 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.9rem',
    textShadow: 'none',
    zIndex: 100,
  },
};

export default Footer;