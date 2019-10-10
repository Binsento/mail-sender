import React from 'react'
import './styles/style.sass'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Logo } from './Components/images'
import SendingForm from './Components/SendingForm'
import SendedInfo from './Components/SendedInfo'
import SendedMails from './Components/SendedMails'
import ErrorDisplayer from './Components/ErrorDisplayer'


const App = ({ sended }) =>
  <div className='main'>
    <ErrorDisplayer />
    <header className='header'>
      <Logo className='header__logo' />
    </header>
    {!sended
      ? <SendingForm />
      : <SendedInfo />}
    <SendedMails />
  </div>

App.propTypes = {
  sended: PropTypes.bool.isRequired
}

export default connect(({ sended }) => ({ sended }))(App);
