export const portfolioData = {
  profile: {
    name: "Alex 'Neo' Kowalski",
    title: "Full Stack Developer & Digital Architect",
    location: "Warsaw, Poland",
    email: "neo.kowalski@matrix.dev",
    phone: "+48 123 456 789",
    github: "https://github.com/neo-kowalski",
    linkedin: "https://linkedin.com/in/neo-kowalski",
    experience: "5+ years",
    status: "Available for freelance projects",
    motto: "There is no spoon... only clean code."
  },
  skills: {
    frontend: [
      { name: "React.js", level: 90 }, // <-- DODANE
      { name: "JavaScript/TypeScript", level: 95 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "SASS/SCSS", level: 90 }
    ],
    backend: [
      { name: "Node.js", level: 90 }, // <-- DODANE
      { name: "Python", level: 85 },   // <-- DODANE
      { name: "PHP", level: 80 },
      { name: "Express.js", level: 90 },
      { name: "RESTful APIs", level: 95 }
    ],
    database: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 }
    ],
    tools: [
      { name: "Git/GitHub", level: 95 },
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Linux", level: 90 },
      { name: "VS Code", level: 95 }
    ]
  },
  projects: [
    {
      id: 1,
      name: "Konfigurator zamówień zamków",
      description: "Aplikacja webowa B2B pozwalająca na wizualną konfigurację i składanie spersonalizowanych zamówień na zamki antywłamaniowe.",
      technologies: ["React", "Node.js", "PostgreSQL", "Three.js", "PDFKit"],
      features: [
        "Wizualna konfiguracja produktu w 3D",
        "Logika biznesowa walidująca opcje w czasie rzeczywistym",
        "Automatyczne generowanie specyfikacji PDF dla produkcji",
        "System zarządzania zamówieniami dla administratorów"
      ],
      github: "https://github.com/neo-kowalski/lock-configurator",
      demo: "https://lock-configurator.demo",
      status: "Completed",
      year: "2023"
    },
    {
      id: 2,
      name: "Strona z newsami (Headless CMS)",
      description: "Nowoczesny portal informacyjny oparty na architekturze Headless CMS, zapewniający błyskawiczne ładowanie i łatwe zarządzanie treścią przez redakcję.",
      technologies: ["Next.js", "Strapi", "GraphQL", "TailwindCSS", "Vercel"],
      features: [
        "Statycznie generowane strony (SSG) dla maksymalnej wydajności",
        "Dynamiczne kategorie i tagi",
        "Zaawansowana wyszukiwarka po stronie klienta",
        "Panel dla redaktorów do zarządzania treścią bez kodu"
      ],
      github: "https://github.com/neo-kowalski/news-portal",
      demo: "https://news-portal.demo",
      status: "Completed",
      year: "2024"
    },
    {
      id: 3,
      name: "Strona z newsami 2 (Headless CMS)",
      description: "Nowoczesny portal informacyjny oparty na architekturze Headless CMS, zapewniający błyskawiczne ładowanie i łatwe zarządzanie treścią przez redakcję.",
      technologies: ["Next.js", "Strapi", "GraphQL", "TailwindCSS", "Vercel"],
      features: [
        "Statycznie generowane strony (SSG) dla maksymalnej wydajności",
        "Dynamiczne kategorie i tagi",
        "Zaawansowana wyszukiwarka po stronie klienta",
        "Panel dla redaktorów do zarządzania treścią bez kodu"
      ],
      github: "https://github.com/neo-kowalski/news-portal",
      demo: "https://news-portal.demo",
      status: "Completed",
      year: "2024"
    },
    {
      id: 4,
      name: "Strona z newsami 3 (Headless CMS)",
      description: "Nowoczesny portal informacyjny oparty na architekturze Headless CMS, zapewniający błyskawiczne ładowanie i łatwe zarządzanie treścią przez redakcję.",
      technologies: ["Next.js", "Strapi", "GraphQL", "TailwindCSS", "Vercel"],
      features: [
        "Statycznie generowane strony (SSG) dla maksymalnej wydajności",
        "Dynamiczne kategorie i tagi",
        "Zaawansowana wyszukiwarka po stronie klienta",
        "Panel dla redaktorów do zarządzania treścią bez kodu"
      ],
      github: "https://github.com/neo-kowalski/news-portal",
      demo: "https://news-portal.demo",
      status: "Completed",
      year: "2024"
    }
  ],
  
  achievements: [
    "🏆 Nagroda 'To Działa™' - Kategoria Produkcyjna 2024",
    '(Za wdrożenie, które zadziałało za pierwszym razem, ku zdziwieniu nas samych i klienta.)',
    "🥇 Złoty Medal w Debugowaniu o Północy",
    '(Uhonorowani za znalezienie tego jednego brakującego średnika o 3 nad ranem.)',
    "📜 Certyfikat Przetrwania Aktualizacji Zależności",
    '(Pomyślnie zaktualizowaliśmy node_modules bez zepsucia całego projektu.)',
    "⭐ 5-gwiazdkowa ocena w kategorii 'Czyta dokumentację'",
    '(Przynajmniej jeden z nas twierdzi, że to robi.)',
    "☕ Rekord Zespołu w Przeliczaniu Kawy na Linie Kodu",
    '(Nasz współczynnik konwersji jest tajemnicą handlową.)',
    "🏆 Nagroda za Naprawienie Błędu, Który Sami Stworzyliśmy",
    '(I obiecujemy, że zrobimy to ponownie.)',
    "💡 Opublikowano 3 hipotezy na temat tego, dlaczego kod działa",
    '(Żadna nie została jeszcze potwierdzona eksperymentalnie.)',
    "📝 Autor bestsellera 'To działało na mojej maszynie i inne wymówki'",
    '(Dostępny w formie komentarzy w naszym kodzie źródłowym.)',
    "🥇 I Miejsce - Kto Dłużej Wytrzyma na Spotkaniu, Które Mogło Być Mailem",
    '(Nasz rekordzista zasnął dopiero po 45 minutach.)',
  ],
  // ------------------------------------------------

  services: [
    // ... twoje dane o usługach
  ]
};