// import React from 'react'
// import { useEffect, useRef } from 'react';

export default function App() {
  // const btnRef = useRef<HTMLButtonElement | null>(null);

  // useEffect(() => {
  //   const btn = btnRef.current;
  //   if (!btn) return;

  //   const colors = ["#ff0080", "#00ff95", "#ffdd00", "#7928ca", "#2afadf", "#ff4500", "#00bfff"];

  //   const handleEnter = () => {
  //     const randomColor = colors[Math.floor(Math.random() * colors.length)];
  //     btn.style.background = randomColor;
  //   };

  //   const handleLeave = () => {
  //     btn.style.background = "#333"; // vuelve al gris original
  //   };

  //   btn.addEventListener("mouseenter", handleEnter);
  //   btn.addEventListener("mouseleave", handleLeave);

  //   // cleanup
  //   return () => {
  //     btn.removeEventListener("mouseenter", handleEnter);
  //     btn.removeEventListener("mouseleave", handleLeave);
  //   };
  // }, []);

  return (
    <div>
      <header className="header">
        <div className="wrap nav">
          <div>
          <div className="brand">Martina Castillo</div>
          <div className="subbrand">@martinac_dev</div>
          </div>
          <nav className="menu">
            <a href="#about">Sobre mí</a>
            <a href="#experience">Experiencia</a>
            {/* <a href="#projects">Proyectos</a> */}
            <a href="#contact">Contacto</a>
          </nav>
        </div>
      </header>

      <main className="wrap">
        <section className="hero">
          <div>
            <div className="badge">
              <span>Aceptando misiones de código </span>
              <span className="status-dot" aria-label="Disponible" title="Disponible"></span>
            </div>

            <div className='intro'>
            <h1>SOFTWARE DEVELOPER</h1>
            <span className='lead'>Especialista en Frontend</span>
            </div>

            <div className="cta">
              {/* <a className="mainbtn" ref={btnRef} href="#projects">Ver proyectos</a> */}
              <a className="btn ghost" href="/CV_Martina_Castillo_Roca.pdf" download>Descargar CV</a>
              <a className="btn ghost" href="#contact">Escribime</a>
            </div>
            <div className="rainbow-line animate"></div>

{/*             
            <div style={{marginTop:14}}>
              <span className="pill">React</span><span className="pill">Vue 3</span><span className="pill">TypeScript</span><span className="pill">Node</span><span className="pill">Python</span><span className="pill">SQL</span>
            </div> */}
          </div>
          <div className="card">
            <h3 style={{marginTop:0}}>📌Highlights</h3>
            <ul>
              <li>SSR del equipo web en TokkoBroker para el chat con agentes, integrado a WhatsApp API.</li>
              <li>Fintech cripto: billetera digital con Vue 3 y stack SPA.</li>
              <li>Consultoría multi-cliente: CRUDs/CRMs en React + Python.</li>
            </ul>
          </div>
        </section>

        <section id="about">
          <h2>Sobre mí</h2>
          <div className="grid">
            <div className="col-6 card">
              <p><strong>Desarrolladora de Software</strong> enfocada en frontend moderno. Lideré un chat inmobiliario en TokkoBroker (Navent), trabajé en fintech cripto (Corporación Cápsula) y en consultoría (Rosario Software).</p>
              <p>Me gusta transformar ideas en interfaces claras usando <strong>React/Next.js</strong>, <strong>Vue 3</strong>, APIs REST y bases relacionales.</p>
            </div>
            <div className="col-6 card">
              <p><strong>Stack actual:</strong></p>
              <p><span className="pill">React</span><span className="pill">Python</span><span className="pill">Vue</span><span className="pill">Next.js</span><span className="pill">TypeScript</span><span className="pill">Node</span><span className="pill">Express</span><span className="pill">PostgreSQL</span><span className="pill">Vite</span><span className="pill">Tailwind</span></p>
            </div>
          </div>
        </section>

        <section id="experience">
          <h2>Experiencia</h2>
          <div className="card">
            <div className="xp-item">
              <div className="time">2024 — 2025</div>
              <div>
                <strong>TokkoBroker (Navent)</strong> — SSR Frontend • Proyecto de chat con agentes, envío/recepción de propiedades e integración WhatsApp API.
              </div>
            </div>
            <hr className="sep"/>
            <div className="xp-item">
              <div className="time">2023 — 2024</div>
              <div>
                <strong>Corporación Cápsula</strong> — Frontend Vue 3 • Billetera virtual de criptomonedas.
              </div>
            </div>
            <hr className="sep"/>
            <div className="xp-item">
              <div className="time">2021 — 2023</div>
              <div>
                <strong>Rosario Software</strong> — React & Python • CRUDs/CRMs para clientes locales e internacionales.
              </div>
            </div>
          </div>
        </section>

        {/* <section id="projects">
          <h2>Proyectos</h2>
          <div className="grid">
            <article className="col-4 card">
              <h3 style={{marginTop:0}}>Chat inmobiliario</h3>
              <p>Mensajería agente-cliente y envío de propiedades. Integrado con WhatsApp API.</p>
              <p><a href="#" aria-disabled="true">Caso de estudio (pronto)</a></p>
            </article>
            <article className="col-4 card">
              <h3 style={{marginTop:0}}>Billetera cripto</h3>
              <p>SPA en Vue 3. Onboarding, balance y transferencias.</p>
              <p><a href="#" aria-disabled="true">Demo (privada)</a></p>
            </article>
            <article className="col-4 card">
              <h3 style={{marginTop:0}}>CRUD/CRM toolkit</h3>
              <p>Componentes reutilizables en React para ABM, tablas y filtros.</p>
              <p><a href="#" aria-disabled="true">Repositorio (privado)</a></p>
            </article>
          </div>
        </section> */}
        {/* <div className="matrix-sequence">
            <div className="line first">Wake up, Neo...</div>
            <div className="line second">Time to code </div>
        </div> */}

        <div className="rainbow-line animate" style={{margin:0}}></div>
        <section id="contact">
          <h2>Contacto</h2>
          <div className="card">
            <p>¿Tenés un proyecto o queres hablar? Escribime y tiramos unas magias:</p>
            <p><a className="mainbtn" href="mailto:martinarccorreo@gmail.com">martinarccorreo@gmail.com</a></p>
            <p className="lead" style={{marginTop:8}}>También estoy en <a href="https://www.linkedin.com/in/martina-castilloroca/" target="_blank" >LinkedIn</a> y <a href="https://github.com/MartinaCastillo" target="_blank" >GitHub</a>.</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          © <span id="y"></span> Martina Castillo Roca · Hecho con ❤️
        </div>
      </footer>
      <script dangerouslySetInnerHTML={{__html:`document.getElementById('y').textContent = new Date().getFullYear();`}} />
    </div>
  )
}
