import React from 'react'
import { toggleCountry } from '../actions/index'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


let input


const mapStateToProps = (state, ownProps) => {
  return {
    isChecked: state.regattas.includes(ownProps.label) //is regatta checkbox set
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleCheckboxChange: () => {
      dispatch(toggleCountry(ownProps.label, input.checked))
    }
  }
}


let CheckBox = ({ label, isChecked, toggleCheckboxChange }) => {
  return (
    <label className="checkbox">
        <input
              type="checkbox"
              value={label}
              checked={isChecked}
              onChange={toggleCheckboxChange}
              ref={node => {
                  input = node
              }}
          />
        {label}
    </label>
  )
}

CheckBox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  toggleCheckboxChange: PropTypes.func.isRequired
}

CheckBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckBox)

export default CheckBox