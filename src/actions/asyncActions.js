import getCurrentDay from '../helpersFunctions/getCurrentDay'
import { storeMessage, updateStatuses } from './actionCreators'

export const sendMessage = (message) => async (dispatch, getState) => {
    try {let { pastMessages } = getState()
    let { subject } = message.letter
    let date = getCurrentDay()
    let id = await mockSend(message)
    let info = { id, subject, date }
    localStorage.setItem('sndPastMessages', JSON.stringify([...pastMessages, info]))
    dispatch(storeMessage(info))}
    catch(е) {
        console.log(e)
    }
}

export const renewStatus = (list) => async (dispatch) => {
    let promises = list.map(elem => getStatus(elem))
    let newInfo = await Promise.all(promises)
    dispatch(updateStatuses(newInfo))
}

const getStatus = async elem => {
    if(elem.status === -1) {
        return { ...elem }
    }
    else { 
        let status = await mockGetStatus(elem.id)
        return { ...elem, status }
    }
}


// функции-заглушки отправки и запроса состояния
const mockSend = (message) => new Promise(res => {
    let random = ~~(Math.random() * 1000)
    setTimeout(() => res(random), random)
})

const mockGetStatus = (id) => new Promise(res => {
    let random = ~~(Math.random() * 3 - 3)
    setTimeout(() => res(random), 1500)
})