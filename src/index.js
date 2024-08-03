/**
 * cria uma data randomica a partir de dois inputs de data
 * @param {Date} start - Data inicial 
 * @param {Date} end - Data final
 * @returns {Date} - data randomica
 */

function randomDate(start, end) {
    let startTimestamp = start.getTime();
    let endTimestamp = end.getTime();

    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

/**
 * faz a formatação da data para YYYY-MM-DD HH:mm:ss
 * @param {Date} date - data para formatar
 * @returns {string} - data formatada como string
 */
function  formatDateToDatetime(date) {
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export default {
    randomDate,
    formatDateToDatetime
}