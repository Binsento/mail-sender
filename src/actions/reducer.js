import * as t from './actionTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case t.CHANGE_INPUT: {
            return {
                ...state,
                [action.id]: action.value
            }
        }
        case t.ADD_NEW_FILE: {
            let { name, size, content } = action
            let currentFiles = [...state.attaches]
            currentFiles.push({ name, size, content })
            return {
                ...state,
                attaches: [...currentFiles]
            }
        }
        case t.DELETE_FILE: {
            let currentFiles = state.attaches.filter(elem => elem.name !== action.name)
            return {
                ...state,
                attaches: [...currentFiles]
            }
        }
        case t.SHOW_ERROR: {
            return {
                ...state,
                errors: [...state.errors, action.error]
            }
        }
        case t.CLEAR_ERROR: {
            return {
                ...state,
                errors: []
            }
        }
        case t.STORE_MESSAGE: 
            return {
                ...state,
                sended: true,
                pastMessages: [...state.pastMessages, action.info]
            }
        case t.NEW_MESSAGE: 
            return {
                attaches: [],
                errors: [],
                sended: false,
                dragging: false,
                pastMessages: state.pastMessages
            }
        case t.UPDATE_STATUSES: 
            return {
                ...state,
                pastMessages: action.info
            }
        case t.CLEAR_PAST_MESSAGES: 
            return {
                ...state,
                pastMessages: []
            }
        default:
            return state
    }
}