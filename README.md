# 🛡️ Portafolio Técnico en Seguridad Informática

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Security](https://img.shields.io/badge/Security-Hardened-00FF66?style=for-the-badge)

Portafolio personal diseñado para reflejar un perfil técnico en Ciberseguridad (Red Teaming / Pentesting). Construido con HTML, CSS y Vanilla JavaScript, priorizando el rendimiento, la accesibilidad y la seguridad del lado del cliente.

🔗 **[Ver Demo en Vivo](https://parzival.github.io/)**

---

## 🎯 Sobre el Proyecto

Este proyecto no es solo un currículum web; es una demostración práctica de principios de **Secure Coding**. A diferencia de las plantillas web tradicionales, esta arquitectura estática ha sido endurecida (hardened) contra vectores de ataque comunes en el lado del cliente (Client-Side Attacks).

## 🔒 Implementaciones de Seguridad (Hardening)

Como profesional de ciberseguridad, el código propio debe ser el primero en estar auditado. Este portafolio incluye:

*   **Content Security Policy (CSP) Estricta:** Implementada vía `<meta>` tag para mitigar ataques de **Cross-Site Scripting (XSS)**. Bloquea la ejecución de scripts no autorizados y restringe la carga de recursos externos (solo permitiendo Google Fonts y el CDN de Lucide).
*   **Mitigación de Reverse Tabnabbing:** Todos los enlaces salientes están configurados con `target="_blank" rel="noopener noreferrer"`, previniendo que la página de destino secuestre el objeto `window.opener` de la pestaña original.
*   **Ofuscación Anti-Scraping (Bot Protection):** La dirección de correo electrónico de contacto no está expuesta en el DOM (HTML plano). Se construye de forma dinámica mediante JavaScript (`index.js`) y se ejecuta bajo demanda, evadiendo a los bots automatizados de recolección de spam.
*   **Modo Estricto (Strict Mode):** JavaScript forzado a `'use strict'` para evitar vulnerabilidades lógicas, variables globales no declaradas y fallos silenciosos.
*   **Seguridad de Transporte:** Desplegado mediante GitHub Pages con **HTTPS (TLS) forzado**, previniendo ataques Man-in-the-Middle (MitM).

---

## 🚀 Despliegue Local

Si deseas clonar o auditar este repositorio de forma local:

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/tu-usuario/tu-repositorio.git)
