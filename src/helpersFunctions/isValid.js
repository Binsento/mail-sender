export const isMailValid = value => /^\S+@\S+\.\S+$/.test(value)

export const isAllValid = obj => {
    for (var key in obj) {
        if (!obj[key] && key !== 'subject') {
            if (key !== 'message' || !obj.attaches.length) {
                return false
            }
        } else {
            if ((key === 'fromEmail' || key === 'toEmail')) {
                if (!isMailValid(obj[key])) {
                    return false
                }
            }
        }
    }
    return true
}
