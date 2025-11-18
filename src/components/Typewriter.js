import React, { useState, useEffect } from 'react';

// Ten custom hook można wydzielić do osobnego pliku, ale dla prostoty zostawiam go tutaj
const useTypewriter = (lines, speed = 50, initialDelay = 1000) => {
  const [completedLines, setCompletedLines] = useState([]);
  const [currentPartial, setCurrentPartial] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setCompletedLines([]);
    setCurrentPartial('');
    setIsComplete(false);

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const runTypewriter = async () => {
      await sleep(initialDelay);
      for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        if (cancelled) return;
        const line = lines[lineIndex];
        let partial = '';
        for (let i = 0; i < line.length; i++) {
          if (cancelled) return;
          partial += line.charAt(i);
          setCurrentPartial(partial);
          // eslint-disable-next-line no-await-in-loop
          await sleep(speed);
        }
        setCompletedLines((prev) => [...prev, line]);
        setCurrentPartial('');
      }
      setIsComplete(true);
    };

    runTypewriter();

    return () => {
      cancelled = true;
    };
  }, [lines, speed, initialDelay]);
  return { completedLines, currentPartial, isComplete };
};

const Typewriter = ({ lines, speed, initialDelay, onComplete }) => {
  const { completedLines, currentPartial, isComplete } = useTypewriter(lines, speed, initialDelay);

  useEffect(() => {
    if (isComplete && onComplete) {
      onComplete();
    }
  }, [isComplete, onComplete]);

  return (
    <>
      {completedLines.map((line, index) => (
        <div key={index} style={index === lines.length - 1 ? { marginTop: '2em' } : {}}>{line}</div>
      ))}
      {/* Kursor pojawia się tylko na końcu aktualnie pisanej linii */}
      {currentPartial && (
        <div>
          {currentPartial}
          <span style={styles.cursor}></span>
        </div>
      )}
    </>
  );
};

const styles = {
  cursor: {
    display: 'inline-block',
    width: '10px',
    height: '1.2em', // Dopasuj do rozmiaru czcionki
    backgroundColor: 'var(--primary-color)',
    animation: 'blink 1s step-end infinite',
    verticalAlign: 'bottom',
    marginLeft: '2px',
    borderRadius: '2px',
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