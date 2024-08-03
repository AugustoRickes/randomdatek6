/**
 * cria uma data randomica a partir de dois inputs de data
 * @param {Date} start - Data inicial 
 * @param {Date} end - Data final
 * @returns {Date} - data randomica
 */

export function randomDate(start, end) {
    let startTimestamp = start.getTime();
    let endTimestamp = end.getTime();

    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

/**
 * faz a formatação da data para YYYY-MM-DD HH:mm
 * @param {Date} date - data para formatar
 * @returns {string} - data formatada como string
 */
export function  formatDateToDatetime(date) {

    return date.toISOString().replace('T', ' ').slice(0, 16);
}
