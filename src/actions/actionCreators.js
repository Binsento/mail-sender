import * as t from './actionTypes'

export const changeInput = (id, value, debounce = 0) => ({
    type: t.CHANGE_INPUT,
    id,
    value,
    meta: {debounce}
})
export const addFile = (name, size, content, encoding = 'base64' ) => ({
    type: t.ADD_NEW_FILE,
    name,
    size,
    content,
    encoding
})
export const deleteFile = name => ({
    type: t.DELETE_FILE,
    name
})
export const showError = error => ({
    type: t.SHOW_ERROR,
    error
})
export const clearError = () => ({
    type: t.CLEAR_ERROR,
})
export const storeMessage = info => ({
    type: t.STORE_MESSAGE,
    info
})
export const newMessage = () => ({
    type: t.NEW_MESSAGE
})
export const updateStatuses = info => ({
    type: t.UPDATE_STATUSES,
    info
})
export const clearPastMessages = () => ({
    type: t.CLEAR_PAST_MESSAGES
})