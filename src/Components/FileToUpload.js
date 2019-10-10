import React from 'react'
import { Clip, TrashBin } from './images'
import { connect } from 'react-redux'
import { deleteFile } from '../actions/actionCreators'

const FileToUpload = ({ name, deleteFile }) => {
    let parts = name.split('.')
    let ext = `.${parts.pop()}`
    let filename = parts.join('.')
    return (
        <div className='file-block'>
            <Clip className = 'file-block__clip' />
            <div className='file-block__name'>
                <div className='file-block__filename'>{filename}</div>
                <div>{ext}</div>
            </div>
            <div className='file-block__remover' onClick={deleteFile(name)}>
                <TrashBin />
                <div>Удалить</div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    deleteFile: (name) => () => dispatch(deleteFile(name))
})

export default connect(null, mapDispatchToProps)(FileToUpload)
