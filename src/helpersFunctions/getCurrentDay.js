const getCurrentDay = () => {
    let date = new Date()
    let monthNames = ['января', 'февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря']
    let month = date.getMonth()
    let day = date.getDate()
    return `${day} ${monthNames[month]}`
}

export default getCurrentDay