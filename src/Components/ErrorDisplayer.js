import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { clearError } from '../actions/actionCreators'

const ErrorDisplayer = ({ errors = [], clearError }) => {
    if (errors.length) {
        setTimeout(clearError, 4000)
    }
    return <div className='error-layer'>
        {errors.map((elem, i) => <div key={i} className='error-layer__block'>{elem}</div>)}
    </div>
}

ErrorDisplayer.propTypes = {
    attaches: PropTypes.array
}

const mapStatetoProps = ({ errors }) => ({ errors })

export default connect(mapStatetoProps, { clearError })(ErrorDisplayer)