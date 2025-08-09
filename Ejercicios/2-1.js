
/**
 * Devuelve el nombre de la resolución según el ancho y alto proporcionados.
 * @param {number} ancho - El ancho de la resolución.
 * @param {number} alto - El alto de la resolución.
 * @returns {string} El nombre de la resolución o un mensaje de error.
 */
function nombreResolucion(ancho, alto) {
    if (typeof ancho !== 'number' || typeof alto !== 'number' || ancho <= 0 || alto <= 0) {
        return "Valores inválidos";
    }
    if (ancho >= 7680 && alto >= 4320) {
        return "La Resolución es: 8k";
    } else if (ancho >= 3840 && alto >= 2160) {
        return "La Resolución es: 4k";
    } else if (ancho >= 2560 && alto >= 1440) {
        return "La Resolución es: WQHD";
    } else if (ancho >= 1920 && alto >= 1080) {
        return "La Resolución es: FHD";
    } else if (ancho >= 1280 && alto >= 720) {
        return "La Resolución es: HD";
    } else {
        return "Resolución desconocida";
    }
}

// Ejemplos de uso:
console.log(nombreResolucion(7680, 4320)); // La Resolución es: 8k
console.log(nombreResolucion(3840, 2160)); // La Resolución es: 4k
console.log(nombreResolucion(1920, 1080)); // La Resolución es: FHD
console.log(nombreResolucion(1000, 700));  // Resolución desconocida
console.log(nombreResolucion("abc", 1080)); // Valores inválidos
