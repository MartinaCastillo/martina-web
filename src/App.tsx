import { useState } from "react";

export default function App() {
  const [language, setLanguage] = useState<"es" | "en">("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = translations[language];
  
const ARFlag = (
  <svg width="20" height="20" viewBox="0 0 640 480">
    <rect width="640" height="480" fill="#74acdf"/>
    <rect width="640" height="160" y="160" fill="#fff"/>
    <circle cx="320" cy="240" r="40" fill="#f6b40e"/>
  </svg>
);

const USFlag = (
  <svg width="20" height="20" viewBox="0 0 7410 3900">
    <rect width="7410" height="3900" fill="#b22234"/>
    <path d="M0 450h7410v300H0zm0 600h7410v300H0zm0 600h7410v300H0zm0 600h7410v300H0zm0 600h7410v300H0z" fill="#fff"/>
    <rect width="2960" height="2100" fill="#3c3b6e"/>
  </svg>
);

const flag = language === "es" ? ARFlag : USFlag;

  return (
    <div>
      <header className="header">
  <div className="wrap nav">
    <div>
      <div className="brand">Martina Castillo</div>
      <div className="subbrand">@martinac_dev</div>
    </div>

    <div className="nav-right">
      <nav className="menu">
        <a href="#about">{t.about}</a>
        <a href="#experience">{t.experience}</a>
        <a href="#contact">{t.contact}</a>
      </nav>

      {/* 🌐 Botón idioma SIEMPRE visible */}
      <button onClick={toggleLanguage} className="language-switch">
        {flag}
      </button>
    </div>
  </div>
</header>


      <main className="wrap">
        <section className="hero">
          <div>
            <div className="badge">
              <span>{t.mission}</span>
              <span
                className="status-dot"
                aria-label="Disponible"
                title="Disponible"
              ></span>
            </div>

            <div className="intro">
              <h1>{t.title}</h1>
              <span className="lead">{t.subtitle}</span>
            </div>

            <div className="cta">
              <a
                className="btn ghost"
                href={language === "es"
                  ? "/CV_Martina_Castillo_Roca_ES.pdf"
                  : "/CV_Martina_Castillo_Roca_EN.pdf"}
                download
              >
                {t.downloadCV}
              </a>
              <a className="btn ghost" href="#contact">
                {t.writeMe}
              </a>
            </div>

            <div className="rainbow-line animate"></div>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>📌 {t.highlights}</h3>
            <ul>
              <li>{t.hl1}</li>
              <li>{t.hl2}</li>
              <li>{t.hl3}</li>
            </ul>
          </div>
        </section>

        <section id="about">
  <h2>{t.about}</h2>
  <div className="grid">
    <div className="col-6 card">
      <p>
        <strong>{t.aboutRole}</strong> {t.aboutText1}
      </p>
      <p>{t.aboutText2}</p>
    </div>
    <div className="col-6 card">
      <p><strong>{t.currentStack}</strong></p>
      <p>
        <span className="pill">React</span>
        <span className="pill">Python</span>
        <span className="pill">Vue</span>
        <span className="pill">Next.js</span>
        <span className="pill">TypeScript</span>
        <span className="pill">Node</span>
        <span className="pill">Express</span>
        <span className="pill">PostgreSQL</span>
        <span className="pill">Vite</span>
        <span className="pill">Tailwind</span>
      </p>
    </div>
  </div>
</section>


        <section id="experience">
          <h2>{t.experience}</h2>
          <div className="card">
            <div className="xp-item">
              <div className="time">2024 — 2025</div>
              <div>
                <strong>TokkoBroker (Navent)</strong> — {t.exp1}
              </div>
            </div>
            <hr className="sep" />
            <div className="xp-item">
              <div className="time">2023 — 2024</div>
              <div>
                <strong>Corporación Cápsula</strong> — {t.exp2}
              </div>
            </div>
            <hr className="sep" />
            <div className="xp-item">
              <div className="time">2021 — 2023</div>
              <div>
                <strong>Rosario Software</strong> — {t.exp3}
              </div>
            </div>
          </div>
        </section>

        <div className="rainbow-line animate" style={{ margin: 0 }}></div>

        <section id="contact">
          <h2>{t.contact}</h2>
          <div className="card">
            <p>{t.contactText}</p>
            <p><a className="mainbtn" href="mailto:martinarccorreo@gmail.com">martinarccorreo@gmail.com</a></p>
            <p className="lead" style={{ marginTop: 8 }}>
              {t.linkedinText} <a href="https://www.linkedin.com/in/martina-castilloroca/" target="_blank">LinkedIn</a> {t.and} <a href="https://github.com/MartinaCastillo" target="_blank">GitHub</a>.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          © <span id="y"></span> Martina Castillo Roca · {t.madeWithLove}
        </div>
      </footer>

      <script
        dangerouslySetInnerHTML={{
          __html: `document.getElementById('y').textContent = new Date().getFullYear();`,
        }}
      />
    </div>
  );
}

/* 🌐 Traducciones */
const translations = {
  es: {
    about: "Sobre mí",
    experience: "Experiencia",
    contact: "Contacto",
    mission: "Aceptando misiones de código",
    title: "SOFTWARE DEVELOPER",
    subtitle: "Especialista en Frontend",
    downloadCV: "Descargar CV",
    writeMe: "Escribime",
    highlights: "Highlights",
    hl1: "SSR del equipo web en TokkoBroker con WhatsApp API.",
    hl2: "Fintech cripto: billetera digital con Vue 3.",
    hl3: "Consultoría multi-cliente en React + Python.",
    // 👇 acá el nuevo sobre mí
    aboutRole: "Desarrolladora de Software",
    aboutText1:
      "enfocada en frontend moderno. Lideré un chat inmobiliario en TokkoBroker (Navent), trabajé en fintech cripto (Corporación Cápsula) y en consultoría (Rosario Software).",
    aboutText2:
      "Me gusta transformar ideas en interfaces claras usando React/Next.js, Vue 3, APIs REST y bases de datos relacionales y no relacionales.",
    currentStack: "Stack actual:",
    exp1: "SSR Frontend • Chat con agentes, WhatsApp API.",
    exp2: "Frontend Vue 3 • Billetera virtual crypto.",
    exp3: "React & Python • CRUDs/CRMs.",
    contactText: "¿Tenés un proyecto o querés hablar? Escribime:",
    linkedinText: "También estoy en",
    and: "y",
    madeWithLove: "Hecho con ❤️",
  },

  en: {
    about: "About me",
    experience: "Experience",
    contact: "Contact",
    mission: "Accepting coding missions",
    title: "SOFTWARE DEVELOPER",
    subtitle: "Frontend Specialist",
    downloadCV: "Download CV",
    writeMe: "Write me",
    highlights: "Highlights",
    hl1: "SSR frontend work in TokkoBroker with WhatsApp API.",
    hl2: "Crypto fintech: Vue 3 digital wallet.",
    hl3: "Multi-client consulting in React + Python.",
    // 👇 versión en inglés del mismo texto
    aboutRole: "Software Developer",
    aboutText1:
      "focused on modern frontend. I led a real estate chat at TokkoBroker (Navent), worked in crypto fintech (Corporación Cápsula) and in consulting (Rosario Software).",
    aboutText2:
      "I enjoy transforming ideas into clear interfaces using React/Next.js, Vue 3, REST APIs and relational and non-relational databases.",
    currentStack: "Current stack:",
    exp1: "SSR Frontend • Agent chat + WhatsApp API.",
    exp2: "Vue 3 Frontend • Crypto wallet.",
    exp3: "React & Python • CRUD/CRM systems.",
    contactText: "Want to talk or start a project? Write me:",
    linkedinText: "You can also find me on",
    and: "and",
    madeWithLove: "Made with ❤️",
  },
};
