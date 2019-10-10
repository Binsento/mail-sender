import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { newMessage } from '../actions/actionCreators'

const SendedInfo = ({ toEmail, newMessage }) =>
    <section className='sender'>
        <div className='sender__text'>
            <div className='sender__title'>Сообщение поставленно в очередь на отправку </div>
            <div className='sender__subtitle'>{`Совсем скоро сообщение вылетит из сервера, и будет двигаться в сторону почты получателя «${toEmail}» со скоростью электронов`}</div>
            <div className = 'sender__reload' onClick = {newMessage} >Еще одно?</div>
        </div>
    </section>

SendedInfo.propTypes = {
    toEmail: PropTypes.string
}

export default connect(({ toEmail }) => ({toEmail}), {newMessage})(SendedInfo);
