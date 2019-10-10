import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeInput } from '../actions/actionCreators'
import { isMailValid } from '../helpersFunctions/isValid'

const InputForm = ({ placeholder = '', type = 'text', isEmpty = false, isCorrect = true, onChange, position = '' }) =>
    <div className='sender__input-block'>
        <input className= {'sender__input' + (position ? ` sender__input_${position}` : '')}
            {...{ placeholder, type, onChange}} />
        {(isEmpty && <div className='error'>{`${placeholder} не может быть пустым`}</div>) ||
            (!isCorrect && <div className='error'>{`Поле ${placeholder} заполнено некорректно`}</div>) ||
            <div style={{ visibility: 'hidden' }}>Всё ОК</div>
        }
    </div>

InputForm.propTypes = {
    isEmpty: PropTypes.bool,
    isCorrect: PropTypes.bool
}

const mapStateToProps = (store, ownProps) => {
    let value = store[ownProps.id]
    return {
        isEmpty: value === '',
        isCorrect: (ownProps.type !== 'email' || !value || isMailValid(value))
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (event) => dispatch(changeInput(ownProps.id, event.target.value, 300))
})

export const SubjectForm = connect(null, mapDispatchToProps)(InputForm)

export const InfoForm = connect(mapStateToProps, mapDispatchToProps)(InputForm)
