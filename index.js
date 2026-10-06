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

    // 2. Botón de contacto
    // El enlace usa un href="mailto:" nativo, sin interceptar el click, para que
    // funcione con teclado, lector de pantalla y "copiar dirección de enlace".
    // Nota: la "ofuscación" de correo (armar el mailto en JS) no ocultaba nada,
    // porque la dirección real seguía escrita en el HTML. Se eliminó para que el
    // botón y el código apunten al mismo destino.

    // Nota de Seguridad Opcional:
    // Si deseas deshabilitar el click derecho para evitar inspecciones básicas (no recomendado por UX, pero usado en entornos muy estrictos)
    /*
    document.addEventListener('contextmenu', event => {
        event.preventDefault();
    });
    */
});