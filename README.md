# parzival.github.io

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cybersecurity Analyst | Portfolio</title>
  
  <!-- Fuentes -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
  
  <!-- Iconos Lucide -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <style>
    /* 1. Variables y Reset */
    :root {
      --bg-color: #0A0A0A;
      --surface-color: #121212;
      --text-main: #FAFAFA;
      --text-muted: #A1A1AA;
      --accent: #00FF66; /* Verde Terminal Neón */
      --accent-glow: rgba(0, 255, 102, 0.12);
      --border: #27272A;
      
      --font-display: 'Space Grotesk', sans-serif;
      --font-body: 'Inter', sans-serif;
      
      --spacing-section: 120px;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background-color: var(--bg-color);
      color: var(--text-main);
      font-family: var(--font-body);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    /* 2. Utilidades y Accesibilidad */
    .container {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
    }

    :focus-visible {
      outline: 2px dashed var(--accent);
      outline-offset: 4px;
    }

    h1, h2, h3, .logo {
      font-family: var(--font-display);
      font-weight: 700;
    }

    a {
      color: var(--text-main);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    a:hover {
      color: var(--accent);
    }

    /* 3. Navegación */
    header {
      padding: 2rem 0;
      position: fixed;
      width: 100%;
      top: 0;
      background: rgba(10, 10, 10, 0.8);
      backdrop-filter: blur(12px);
      z-index: 100;
      border-bottom: 1px solid rgba(39, 39, 42, 0.5);
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.5rem;
      letter-spacing: -0.05em;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .logo span {
      color: var(--accent);
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      font-family: var(--font-display);
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
    }

    /* 4. Componentes */
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 2rem;
      border-radius: 4px;
      font-family: var(--font-display);
      font-weight: 500;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 1px solid transparent;
    }

    .btn-primary {
      background-color: var(--accent);
      color: var(--bg-color);
      font-weight: 700;
    }

    .btn-primary:hover {
      background-color: transparent;
      color: var(--accent);
      border-color: var(--accent);
      transform: translateY(-4px);
      box-shadow: 0 8px 24px var(--accent-glow);
    }

    .btn-outline {
      background-color: transparent;
      color: var(--text-main);
      border-color: var(--border);
    }

    .btn-outline:hover {
      border-color: var(--accent);
      color: var(--accent);
      transform: translateY(-4px);
    }

    .section-title {
      font-size: 3rem;
      margin-bottom: 1rem;
      letter-spacing: -0.02em;
    }

    .section-subtitle {
      color: var(--accent);
      font-family: var(--font-display);
      font-size: 1.1rem;
      margin-bottom: 3rem;
      display: block;
    }

    /* 5. Secciones */
    section {
      padding: var(--spacing-section) 0;
    }

    /* Hero */
    #hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 100px;
    }

    .hero-greeting {
      color: var(--accent);
      font-family: var(--font-display);
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .hero-title {
      font-size: clamp(3rem, 8vw, 6rem);
      line-height: 1.1;
      margin-bottom: 1.5rem;
      letter-spacing: -0.04em;
    }

    .hero-title span {
      color: var(--text-muted);
      display: block;
    }

    .hero-desc {
      font-size: 1.25rem;
      color: var(--text-muted);
      max-width: 600px;
      margin-bottom: 3rem;
    }

    /* Sobre Mí */
    #about {
      border-top: 1px solid var(--border);
    }
    
    .about-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    @media (min-width: 768px) {
      .about-grid {
        grid-template-columns: 1fr 1fr;
        gap: 6rem;
        align-items: center;
      }
    }

    .about-text p {
      font-size: 1.1rem;
      color: var(--text-muted);
      margin-bottom: 1.5rem;
    }

    .about-text strong {
      color: var(--text-main);
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 2rem;
    }

    .tech-tag {
      padding: 0.5rem 1rem;
      background: var(--surface-color);
      border: 1px solid var(--border);
      border-radius: 4px;
      font-family: var(--font-display);
      font-size: 0.9rem;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .tech-tag i {
      color: var(--accent);
    }

    /* Proyectos (Layout Asimétrico) */
    #projects {
      border-top: 1px solid var(--border);
    }

    .projects-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    @media (min-width: 850px) {
      .projects-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 4rem;
        align-items: start;
      }
      
      .project-card:nth-child(even) {
        margin-top: 120px;
      }
    }

    .project-card {
      background: var(--surface-color);
      border: 1px solid var(--border);
      padding: 2.5rem;
      border-radius: 8px;
      transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease, border-color 0.4s ease;
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 400px;
      position: relative;
      overflow: hidden;
    }

    /* Detalle visual sutil tipo terminal */
    .project-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: var(--accent);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s ease;
    }

    .project-card:hover::before {
      transform: scaleX(1);
    }

    .project-card:hover {
      transform: translateY(-12px);
      box-shadow: 0 20px 40px var(--accent-glow);
      border-color: var(--accent);
    }

    .project-icon {
      margin-bottom: 2rem;
      color: var(--accent);
    }

    .project-title {
      font-size: 1.75rem;
      margin-bottom: 1rem;
    }

    .project-desc {
      color: var(--text-muted);
      margin-bottom: 2rem;
      flex-grow: 1;
    }

    .project-links {
      display: flex;
      gap: 1rem;
      margin-top: auto;
    }

    /* Contacto */
    #contact {
      border-top: 1px solid var(--border);
      text-align: center;
      padding-bottom: var(--spacing-section);
    }

    .contact-wrapper {
      max-width: 600px;
      margin: 0 auto;
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-top: 3rem;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      background: var(--surface-color);
      border: 1px solid var(--border);
      border-radius: 50%;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      border-color: var(--accent);
      color: var(--accent);
      transform: translateY(-6px);
      box-shadow: 0 10px 20px var(--accent-glow);
    }

    footer {
      text-align: center;
      padding: 2rem 0;
      border-top: 1px solid var(--border);
      color: var(--text-muted);
      font-size: 0.9rem;
      font-family: var(--font-display);
    }
  </style>
</head>
<body>

  <header>
    <div class="container">
      <nav>
        <a href="#" class="logo"><i data-lucide="shield-check" width="24" height="24"></i> Cyber<span>.</span>Sec</a>
        <div class="nav-links">
          <a href="#about">01. Perfil</a>
          <a href="#projects">02. Laboratorios</a>
          <a href="#contact">03. Contacto</a>
        </div>
      </nav>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section id="hero" class="container">
      <div>
        <span class="hero-greeting"><i data-lucide="terminal" width="20" height="20"></i> root@localhost:~#</span>
        <h1 class="hero-title">Hola, soy German. <span>Pero en las redes me conocerán como "parzival".</span></h1>
        <p class="hero-desc">Estudiante avanzado de Seguridad Informática, apasionado por el Blue Teaming, el análisis de tráfico y la protección de Sistemas. Construyendo redes seguras a través de la mentalidad de un defensor.</p>
        <a href="#projects" class="btn btn-primary">
          <i data-lucide="scan-line" width="20" height="20"></i> Iniciar Escaneo
        </a>
      </div>
    </section>

    <!-- Sobre Mí -->
    <section id="about">
      <div class="container about-grid">
        <div>
          <h2 class="section-title">01. Mi Perfil</h2>
          <span class="section-subtitle">Operaciones & Análisis</span>
        </div>
        <div class="about-text">
          <p>Actualmente cursando el último año de la Tecnicatura en Seguridad Informática, dedico mi tiempo libre a resolver máquinas en <strong>LetsDefend</strong> y <strong>TryHackMe</strong>.</p>
          <p>Mi objetivo es entender a profundidad los sistemas y como proteger las infraestructuras en un panorama tan vertiginoso como el uso de agentes IA usados tanto para la defensa como el ataque. Actualmente me encuentro en preparación para la certificación <strong>CCST y CCNA Cybersecurity Cisco</strong>.</p>
          
          <div class="tech-stack">
            <span class="tech-tag">Python / Bash</span>
            <span class="tech-tag">Burp Suite</span>
            <span class="tech-tag">Active Directory</span>
            <span class="tech-tag">Linux Internals</span>
            <span class="tech-tag">Wireshark</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Proyectos / Laboratorios -->
    <section id="projects">
      <div class="container">
        <h2 class="section-title">02. Laboratorios & Scripts</h2>
        <span class="section-subtitle">Investigación Práctica</span>

        <div class="projects-grid">
          <!-- Tarjeta 1 -->
          <article class="project-card">
            <div class="project-icon">
              <i data-lucide="bug" width="40" height="40"></i>
            </div>
            <h3 class="project-title">Escáner de Vulnerabilidades Aut.</h3>
            <p class="project-desc">Script desarrollado en Python (utilizando Scapy y Sockets) capaz de realizar descubrimiento de hosts, escaneo de puertos sigiloso y emparejamiento básico con la base de datos de CVEs (NVD API).</p>
            <div class="project-links">
              <a href="#" class="btn btn-outline" aria-label="Ver código en GitHub">
                <i data-lucide="github" width="20" height="20"></i> Código Base
              </a>
            </div>
          </article>

          <!-- Tarjeta 2 -->
          <article class="project-card">
            <div class="project-icon">
              <i data-lucide="server" width="40" height="40"></i>
            </div>
            <h3 class="project-title">Enterprise AD Homelab</h3>
            <p class="project-desc">Despliegue localizado de una red corporativa utilizando Hyper-V. Configuración de un Domain Controller vulnerable por diseño para practicar ataques reales: Kerberoasting, AS-REP Roasting y Pass-The-Hash.</p>
            <div class="project-links">
              <a href="#" class="btn btn-outline" aria-label="Leer documentación">
                <i data-lucide="file-text" width="20" height="20"></i> Ver Topología
              </a>
            </div>
          </article>

          <!-- Tarjeta 3 -->
          <article class="project-card">
            <div class="project-icon">
              <i data-lucide="flag" width="40" height="40"></i>
            </div>
            <h3 class="project-title">CTF Writeups & Malware Analysis</h3>
            <p class="project-desc">Repositorio detallado documentando la resolución paso a paso de máquinas de penetración avanzadas y análisis estático inicial de muestras de malware en un entorno seguro (Sandbox).</p>
            <div class="project-links">
              <a href="#" class="btn btn-outline" aria-label="Leer blog">
                <i data-lucide="external-link" width="20" height="20"></i> Leer Writeups
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Contacto -->
    <section id="contact">
      <div class="container contact-wrapper">
        <h2 class="section-title">03. Establecer Conexión</h2>
        <span class="section-subtitle">Búsqueda Activa</span>
        <p class="hero-desc" style="margin: 0 auto 2rem;">Estoy en búsqueda de mi primera oportunidad profesional como <strong>Analista SOC Junior</strong> o <strong>Pentester Trainee</strong>. Si tu equipo busca un perfil técnico, curioso y obsesionado con el aprendizaje continuo, hablemos.</p>
        
        <a href="mailto:hola@ejemplo.com" class="btn btn-primary">
          <i data-lucide="mail" width="20" height="20"></i> Enviar PING
        </a>

        <div class="social-links">
          <a href="#" class="social-link" aria-label="Perfil de GitHub">
            <i data-lucide="github" width="24" height="24"></i>
          </a>
          <a href="#" class="social-link" aria-label="Perfil de LinkedIn">
            <i data-lucide="linkedin" width="24" height="24"></i>
          </a>
          <a href="#" class="social-link" aria-label="TryHackMe / HackTheBox">
            <i data-lucide="box" width="24" height="24"></i>
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <p>Connection encrypted. Built with <i data-lucide="coffee" width="14" height="14" style="vertical-align: middle;"></i> & curiosity &copy; 2026</p>
    </div>
  </footer>

  <!-- Inicialización de Lucide Icons -->
  <script>
    lucide.createIcons();
  </script>
</body>
</html>
