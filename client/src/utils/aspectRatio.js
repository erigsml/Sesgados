/**
 * Ratios soportados por el grid (álbum / galería).
 * Cada uno tiene aspect-ratio en CSS (.mosaic-item.r-4x5, etc.)
 */
const RATIOS = [
  { class: 'r-4x5', value: 4 / 5 },
  { class: 'r-3x4', value: 3 / 4 },
  { class: 'r-1x1', value: 1 },
  { class: 'r-16x9', value: 16 / 9 },
  { class: 'r-3x2', value: 3 / 2 },
  { class: 'r-9x16', value: 9 / 16 },
]

/**
 * Dado el ancho y alto de una imagen, devuelve la clase de ratio más cercana
 * para el grid (mosaic-item). Así el grid se acomoda automáticamente a fotos
 * de cualquier tamaño.
 *
 * @param {number} width - Ancho de la imagen
 * @param {number} height - Alto de la imagen
 * @returns {string} Clase CSS ej. 'r-4x5', 'r-1x1'
 */
export function getAspectRatioClass(width, height) {
  if (!width || !height) return 'r-1x1'
  const actual = width / height
  let best = RATIOS[0]
  let minDiff = Math.abs(actual - best.value)

  for (const r of RATIOS) {
    const diff = Math.abs(actual - r.value)
    if (diff < minDiff) {
      minDiff = diff
      best = r
    }
  }

  return best.class
}
