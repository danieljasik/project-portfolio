import React, { useState, useEffect } from 'react';

// Ten custom hook można wydzielić do osobnego pliku, ale dla prostoty zostawiam go tutaj
const useTypewriter = (text, speed = 50) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    // Resetuj tekst przy każdej zmianie tekstu wejściowego
    setDisplayedText(''); 
    
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    // Czyszczenie interwału, gdy komponent jest odmontowywany
    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return displayedText;
};

const Typewriter = ({ text, speed }) => {
  const displayedText = useTypewriter(text, speed);

  return (
    <>
      {displayedText}
      <span style={styles.cursor}></span>
    </>
  );
};

const styles = {
  cursor: {
    display: 'inline-block',
    width: '10px',
    height: '1.5rem', // Dopasuj do rozmiaru czcionki
    backgroundColor: 'var(--primary-color)',
    animation: 'blink 1s step-end infinite',
    verticalAlign: 'bottom',
    marginLeft: '5px'
  }
};

// Wstrzykiwanie animacji globalnie, aby uniknąć problemów
// Możesz to przenieść do globals.css
if (typeof window !== 'undefined') {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes blink {
        from, to { opacity: 1; }
        50% { opacity: 0; }
      }
    `;
    try {
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    } catch (e) {
        console.warn("Could not insert keyframe rule:", e);
    }
}


export default Typewriter;