import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isAllValid } from '../helpersFunctions/isValid'
import makeLetter from '../helpersFunctions/makeLetter'
import {sendMessage} from '../actions/asyncActions'

const SendButton = ({ fromName, fromEmail, toName, toEmail, subject, message, attaches, sendMessage }) => {
    let preLetter = { fromName, fromEmail, toName, toEmail, subject, message, attaches }
    const sendLetter = () => sendMessage(makeLetter(preLetter))
    return <button disabled={!isAllValid(preLetter)}
        className='sender__button'
        onClick={sendLetter}>Отправить</button>
}

SendButton.propTypes = {
    fromName: PropTypes.string,
    fromEmail: PropTypes.string,
    toName: PropTypes.string,
    toEmail: PropTypes.string,
    subject: PropTypes.string,
    message: PropTypes.string,
    attaches: PropTypes.array.isRequired
}

const mapStatetoProps = ({ fromName, fromEmail, toName, toEmail, subject, message, attaches}) =>
({ fromName, fromEmail, toName, toEmail, subject, message, attaches})

export default connect(mapStatetoProps, {sendMessage})(SendButton)