import Head from 'next/head';
import { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import MatrixRain from '../components/MatrixRain';
import DosWindow from '../components/DosWindow/DosWindow';
import ContactForm from '../components/ContactForm/ContactForm';
import Typewriter from '../components/Typewriter';
import Header from '../components/Header/Header';

export default function Home({ portfolioData }) {
  const { profile, skills, projects, achievements } = portfolioData;
  const [showEnter, setShowEnter] = useState(false);

  // Przygotowujemy dane do dwóch kolumn
  const skillCategories = Object.keys(skills);
  const leftColumnCategories = skillCategories.slice(0, 2); // np. frontend, backend
  const rightColumnCategories = skillCategories.slice(2, 4); // np. database, tools

  const scrollOffset = { scrollMarginTop: '5rem' };

  // Lista sekcji w kolejności
  const sectionOrder = ['welcome', 'about', 'skills', 'projects', 'contact'];
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        // Znajdź aktualnie widoczną sekcję
        const scrollY = window.scrollY;
        const sections = sectionOrder.map(id => document.getElementById(id));
        const currentIdx = sections.findIndex(sec => {
          if (!sec) return false;
          const rect = sec.getBoundingClientRect();
          // Sekcja jest "na górze" viewportu lub blisko
          return rect.top <= 80 && rect.bottom > 80;
        });
        // Przewiń do następnej sekcji
        if (currentIdx !== -1 && currentIdx < sections.length - 1) {
          const nextSection = sections[currentIdx + 1];
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Head>
        <title>C:\THREE GUYS ONE CODE</title>
        <meta name="description" content={profile.title} />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>█</text></svg>" />
      </Head>

      <MatrixRain />
      <Header />

      <div className="app-container">
        <main>
          {/* Sekcja powitalna na środku ekranu */}
          <div id="welcome" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '10vh' }}>
            <DosWindow
              title="C:\THREE GUYS ONE CODE\MAIN.TXT"
              headerText="MS-DOS EDITOR"
              style={{ width: '100%' }}
            >
              <div style={{ border: '1px solid var(--primary-color)', padding: '0.5rem', textAlign: 'center', marginBottom: '1rem' }}>
                WITAJ W NASZYM PORTFOLIO
              </div>
              <Typewriter lines={[
                "System uruchomiony...",
                "Ładowanie profilu użytkownika... [OK]",
                "Ustanowienie bezpiecznego połączenia... [OK]",
                "Pobieranie danych użytkownika... [OK]",
                "Inicjalizacja zakończona pomyślnie.",
                "Naciśnij ENTER, aby kontynuować."
              ]} speed={40} initialDelay={1000} />
            </DosWindow>
          </div>

          <div id="about" style={{ ...scrollOffset, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '10vh' }}>
            <DosWindow title="O.NAS">
              <h3 style={{ textAlign: 'center' }}>THREE GUYS ONE CODE</h3>
              <p style={{ textAlign: 'center', fontStyle: 'italic', opacity: 0.8 }}>
                Kompilujemy Twoją wizję w cyfrową rzeczywistość.
              </p>
              <p>Jesteśmy zgranym zespołem trzech pasjonatów, którzy łączą swoje unikalne umiejętności, aby tworzyć niezawodne i wydajne oprogramowanie. Wierzymy, że najlepszy kod powstaje w wyniku ścisłej współpracy i wspólnego dążenia do perfekcji.</p>
              <h3>Osiągnięcia Zespołu:</h3>
              {achievements.reduce((acc, curr, idx, arr) => {
                if (idx % 2 === 0) {
                  // achievement + opis
                  acc.push(
                    <p key={idx} style={{ marginBottom: '1em' }}>
                      <span style={{ fontWeight: 'bold' }}>{curr}</span><br />
                      <span style={{ fontStyle: 'italic', opacity: 0.8 }}>{arr[idx + 1] || ''}</span>
                    </p>
                  );
                }
                return acc;
              }, [])}
            </DosWindow>
          </div>

          <div id="skills" style={{ ...scrollOffset, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '10vh' }}>
            <DosWindow title="SKILLS.DAT">
              {/* --- UKŁAD DWUKOLUMNOWY DLA UMIEJĘTNOŚCI --- */}
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                {/* Lewa kolumna */}
                <div style={{ flex: 1, minWidth: '300px' }}>
                  {leftColumnCategories.map(category => (
                    <div key={category} style={{marginBottom: '1.5rem'}}>
                      <h3 style={{textTransform: 'uppercase'}}>{category}</h3>
                      {skills[category].map(skill => (
                          <p key={skill.name}>
                            <span>{skill.name.padEnd(25, '.')} </span>
                            <span style={{
                              background: `linear-gradient(to right, var(--primary-color) ${skill.level}%, #333 ${skill.level}%)`,
                              color: 'transparent',
                              WebkitBackgroundClip: 'text',
                              backgroundClip: 'text'
                            }}>
                              [▆▆▆▆▆▆▆▆▆▆]
                            </span>
                          </p>
                      ))}
                    </div>
                  ))}
                </div>
                {/* Prawa kolumna */}
                <div style={{ flex: 1, minWidth: '300px' }}>
                  {rightColumnCategories.map(category => (
                    <div key={category} style={{marginBottom: '1.5rem'}}>
                      <h3 style={{textTransform: 'uppercase'}}>{category}</h3>
                      {skills[category].map(skill => (
                          <p key={skill.name}>
                            <span>{skill.name.padEnd(25, '.')} </span>
                            <span style={{
                              background: `linear-gradient(to right, var(--primary-color) ${skill.level}%, #333 ${skill.level}%)`,
                              color: 'transparent',
                              WebkitBackgroundClip: 'text',
                              backgroundClip: 'text'
                            }}>
                              [▆▆▆▆▆▆▆▆▆▆]
                            </span>
                          </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </DosWindow>
          </div>
          
          <div id="projects" style={{ ...scrollOffset, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '10vh' }}>
            <DosWindow title="PROJECTS.DIR">
               {projects.map(project => (
                  <div key={project.id} style={{borderBottom: '1px dashed var(--primary-color)', marginBottom: '1rem', paddingBottom: '1rem'}}>
                      <h4>{project.name} - [{project.status}]</h4>
                      <p>{project.description}</p>
                      <p>Technologie: {project.technologies.join(', ')}</p>
                  </div>
               ))}
            </DosWindow>
          </div>

          <div id="contact" style={{ ...scrollOffset, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '10vh' }}>
            <DosWindow title="CONTACT.EXE" style={{ width: '100%' }}>
              <ContactForm />
            </DosWindow>
          </div>
        </main>
      </div>

      <footer style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, background: 'var(--bg-color)', borderTop: '2px solid var(--primary-color)',
        color: 'var(--primary-color)', padding: '0.5rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 100
      }}>
        <div style={{ fontSize: '1.4rem', fontWeight: 'bold', textShadow: '0 0 10px var(--primary-color)', marginBottom: '0.5rem' }}>
          Reality is not what it seems... neither is our code.
        </div>
        <div style={{ fontSize: '1rem', background: 'var(--primary-color)', color: 'var(--bg-color)', textShadow: 'none', padding: '0 0.5rem', width: '100%', textAlign: 'center' }}>
          MS-DOS Portfolio v1.0 © {new Date().getFullYear()} | Three guys one code
        </div>
      </footer>
    </>
  );
}

export async function getStaticProps() {
  return { props: { portfolioData } };
}