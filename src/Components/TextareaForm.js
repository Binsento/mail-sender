import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeInput } from '../actions/actionCreators'

const TextareaForm = ({ placeholder = '', onChange, isEmpty = false }) =>
    <div className = 'sender__input-block'>
        <textarea className ='sender__textarea' {...{ placeholder, onChange}} />
        {isEmpty && <div className = 'error'>Напишите текст сообщения или прикрепите файлы</div>}
    </div>

TextareaForm.propTypes = {
    isEmpty: PropTypes.bool.isRequired
}

const mapStateToProps = (store, ownProps) => ({
    isEmpty: store[ownProps.id] === '' && !store.attaches.length
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (event) => dispatch(changeInput(ownProps.id, event.target.value, 300))
})

export default connect(mapStateToProps, mapDispatchToProps)(TextareaForm);
