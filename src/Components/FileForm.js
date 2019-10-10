import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addFile, showError } from '../actions/actionCreators'
import { readFile, checkFile } from '../helpersFunctions/uploadHandlers'
import { Clip } from './images'

const FileForm = ({ id, attaches, addFile, showError }) => {
    const handleChange = event => {
        event.target.blur()
        let overallSize = attaches.reduce((sum, file) => sum + file.size, 0)
        let filenames = attaches.map(elem => elem.name)
        Array.from(event.target.files).forEach(elem => {
            let isIncorrect = checkFile(elem, filenames, overallSize)
            if (!isIncorrect) {
                overallSize += elem.size
                readFile(elem).then(
                    (res => addFile(...res)),
                    (err => console.log(err.message)))
            } else {
                showError(isIncorrect.message)
            }
        })
        event.target.value = null
    }
    return (
        <div className='uploader'>
            <input id={id}
                className='uploader__input'
                type='file'
                accept='image/*, .pdf,.zip,.doc,.docx,.xls,.xslx,.rtf'
                onChange={handleChange} multiple />
            <label htmlFor={id}
                className='uploader__label'>
                <Clip className='uploader__clip' />
                <span>Прикрепить файлы</span>
            </label>
        </div>
    )
}

FileForm.propTypes = {
    attaches: PropTypes.array.isRequired
}

const mapStateToProps = ({ attaches }) => ({ attaches })

export default connect(mapStateToProps, { addFile, showError })(FileForm)