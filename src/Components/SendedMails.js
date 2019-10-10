import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { renewStatus } from '../actions/asyncActions'
import { clearPastMessages } from '../actions/actionCreators'
import MailsList from './MailsList'

const SendedMails = ({ pastMessages, clearPastMessages, renewStatus }) => {
    if (pastMessages.some(elem => elem.status === undefined)) {
            renewStatus(pastMessages)
        }
    const deleteFn = () => {
        clearPastMessages()
        localStorage.removeItem('sndPastMessages')
    }
    return <MailsList list={pastMessages} deleteFn = {deleteFn} />
}

SendedMails.propTypes = {
    pastMessages: PropTypes.array.isRequired
}

const mapStateToProps = ({ pastMessages }) => ({ pastMessages })

export default connect(mapStateToProps, { renewStatus, clearPastMessages })(SendedMails)