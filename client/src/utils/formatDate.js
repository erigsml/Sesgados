/**
 * Formatea una fecha ISO a un string legible en español.
 * @param {string|Date} date — fecha ISO o instancia Date
 * @param {Intl.DateTimeFormatOptions} options — opciones de formato
 * @returns {string} fecha formateada, ej: "15 feb 2026"
 */
export function formatDate(date, options = {}) {
    const defaults = { day: 'numeric', month: 'short', year: 'numeric' }
    return new Intl.DateTimeFormat('es-ES', { ...defaults, ...options }).format(
        new Date(date),
    )
}
