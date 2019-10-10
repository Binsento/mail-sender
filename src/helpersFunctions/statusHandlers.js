export const statusToResult = (status) => {
    if (status > -1) return 'В очереди'
    if (status === -1) return 'Отправлено'
    if (status < -1) return 'Ошибка'
    return 'Проверка' 
}
export const statusToClass = (status) => {
    if (status === -1) return ' sucsess'
    if (status < -1) return ' error'
    return '' 
}
