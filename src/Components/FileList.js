import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FileToUpload from './FileToUpload'

const FileList = ({ attaches }) =>
    <div className='sender__files'>
        {attaches.map(elem => <FileToUpload key={elem.name} name={elem.name} />)}
    </div>

FileList.propTypes = {
    attaches: PropTypes.array.isRequired
}

export default connect(({ attaches }) => ({ attaches }))(FileList)