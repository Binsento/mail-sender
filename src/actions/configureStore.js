import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let timeout
const debounceMiddleware = store => next => action => {
    const { meta = {} } = action
    if (meta.debounce) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            next(action)
        }, meta.debounce)
    } else {
        next(action)
    }
}

let middleware = [debounceMiddleware, thunk]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger)
}

let initialState = {
    attaches: [],
    errors: [],
    sended: false,
    dragging: false,
    pastMessages: JSON.parse(localStorage.getItem('sndPastMessages')) || []
}

const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store