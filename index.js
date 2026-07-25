// SECURITY: Habilitar modo estricto para prevenir malas prácticas y variables globales no declaradas
'use strict';

// SECURITY: Asegurar que el script se ejecute solo cuando el DOM esté listo, 
// reduciendo riesgos de manipulación prematura del DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Inicialización segura de iconos
    try {
        lucide.createIcons();
    } catch (error) {
        console.error("Error al cargar los iconos (revisar CSP o red):", error);
    }

    // 2. Ofuscación de Email (Anti-Scraping / Anti-Spam bots)
    // Los bots que escanean GitHub Pages buscando "mailto:" no encontrarán tu correo en el HTML
    const contactBtn = document.getElementById('secure-contact');
    
    if (contactBtn) {
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Reemplaza esto con tus datos reales. Al estar separados, los bots simples no los unen.
            const user = 'parz1val93';
            const domain = 'proton.me';
            
            // Construcción y ejecución segura
            window.location.href = `mailto:${user}@${domain}`;
        });
    }

    // Nota de Seguridad Opcional:
    // Si deseas deshabilitar el click derecho para evitar inspecciones básicas (no recomendado por UX, pero usado en entornos muy estrictos)
    /*
    document.addEventListener('contextmenu', event => {
        event.preventDefault();
    });
    */
});
