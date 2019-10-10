import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import DropWrapper from './DropWrapper'
import { addFile, showError } from '../actions/actionCreators'
import { readFile, checkFile } from '../helpersFunctions/uploadHandlers'

class DropLoader extends React.Component {
    dragCounter = 0

    state = {
        drag: false
    }

    handleDragEvent = (event) => {
        event.preventDefault()
        event.stopPropagation()
    }

    handleFiles = loadedFiles => {
        let overallSize = this.props.attaches.reduce((sum, file) => sum + file.size, 0)
        let filenames = this.props.attaches.map(elem => elem.name)
        Array.from(loadedFiles).forEach(elem => {
            let isIncorrect = checkFile(elem, filenames, overallSize)
            if (!isIncorrect) {
                overallSize += elem.size
                readFile(elem).then(
                    (res => this.props.addFile(...res)),
                    (err => console.log(err.message)))
            } else {
                this.props.showError(isIncorrect.message)
            }
        })
    }

    handleDragIn = (event) => {
        this.handleDragEvent(event)
        this.dragCounter++
        if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
            this.setState({ drag: true })
        }
    }

    handleDragOut = (event) => {
        this.handleDragEvent(event)
        this.dragCounter--
        if (this.dragCounter === 0) {
            this.setState({ drag: false })
        }
    }

    handleDrop = (event) => {
        this.handleDragEvent(event)
        this.setState({ drag: false })
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            this.handleFiles(event.dataTransfer.files)
            event.dataTransfer.clearData()
            this.dragCounter = 0
        }
    }

    componentDidMount() {
        window.addEventListener('dragenter', this.handleDragIn)
        window.addEventListener('dragleave', this.handleDragOut)
        window.addEventListener('dragover', this.handleDragEvent)
        window.addEventListener('drop', this.handleDrop)
    }

    componentWillUnmount() {
        window.removeEventListener('dragenter', this.handleDragIn)
        window.removeEventListener('dragleave', this.handleDragOut)
        window.removeEventListener('dragover', this.handleDragEvent)
        window.removeEventListener('drop', this.handleDrop)
    }

    render() {
        return (
            <div style={{ position: 'relative' }}>
                {this.state.drag && <DropWrapper />}
                {this.props.children}
            </div>
        )
    }
}

DropLoader.propTypes = {
    attaches: PropTypes.array.isRequired
}

export default connect(({ attaches }) => ({ attaches }), { addFile, showError })(DropLoader)