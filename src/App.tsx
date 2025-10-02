import React from 'react'

export default function App() {
  return (
    <div>
      <header className="header">
        <div className="wrap nav">
          <div className="brand">Martina Castillo Roca</div>
          <nav className="menu">
            <a href="#about">Sobre mí</a>
            <a href="#experience">Experiencia</a>
            <a href="#projects">Proyectos</a>
            <a href="#contact">Contacto</a>
          </nav>
        </div>
      </header>

      <main className="wrap">
        <section className="hero">
          <div>
            <span className="badge">Disponible para proyectos • Frontend / Full‑Stack</span>
            <h1>Construyo productos web nítidos, rápidos y orientados al negocio.</h1>
            <p className="lead">
              Desarrolladora con foco en React y Vue. Lideré un chat inmobiliario integrado con WhatsApp en TokkoBroker (Navent), trabajé en una fintech cripto (Corporación Cápsula) y en consultoría (Rosario Software).
            </p>
            <div className="cta">
              <a className="btn" href="#projects">Ver proyectos</a>
              <a className="btn ghost" href="/public/assets/CV_Martina_Castillo_Roca.pdf" download>Descargar CV</a>
              <a className="btn ghost" href="#contact">Escribime</a>
            </div>
            <div style={{marginTop:14}}>
              <span className="pill">React</span><span className="pill">Vue 3</span><span className="pill">TypeScript</span><span className="pill">Node</span><span className="pill">Python</span><span className="pill">SQL</span>
            </div>
          </div>
          <div className="card">
            <h3 style={{marginTop:0}}>Highlights</h3>
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
              <p>Soy <strong>Desarrolladora de Software</strong> con experiencia en frontend moderno y entrega end‑to‑end. Me gusta transformar requerimientos difusos en interfaces claras y medibles.</p>
              <p>Trabajo con <strong>React/Next.js</strong> y <strong>Vue 3</strong>, APIs REST, y bases relacionales. Disfruto colaborar con producto y QA para lanzar features con impacto.</p>
            </div>
            <div className="col-6 card">
              <p><strong>Stack actual:</strong></p>
              <p><span className="pill">React</span><span className="pill">Vue</span><span className="pill">Next.js</span><span className="pill">TypeScript</span><span className="pill">Node</span><span className="pill">Express</span><span className="pill">PostgreSQL</span><span className="pill">Vite</span><span className="pill">Tailwind</span></p>
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

        <section id="projects">
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
        </section>

        <section id="contact">
          <h2>Contacto</h2>
          <div className="card">
            <p>¿Tenés un proyecto o búsqueda? Escribime:</p>
            <p><a className="btn" href="mailto:contacto@tusitio.dev">contacto@tusitio.dev</a></p>
            <p className="lead" style={{marginTop:8}}>También en <a href="https://www.linkedin.com/">LinkedIn</a> y <a href="https://github.com/">GitHub</a>.</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          © <span id="y"></span> Martina Castillo Roca · Hecho con React + Vite
        </div>
      </footer>
      <script dangerouslySetInnerHTML={{__html:`document.getElementById('y').textContent = new Date().getFullYear();`}} />
    </div>
  )
}
