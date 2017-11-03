import React from 'react'
import { toggleCountry } from '../actions/index'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'



const mapStateToProps = (state, ownProps) => {
  return {
    isChecked: state.filter.includes(ownProps.label) //is country checkbox set
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleCheckboxChange: (isChecked) => {
      dispatch(toggleCountry(ownProps.label, !isChecked))
    }
  }
}


let CheckBox = ({ label, isChecked, toggleCheckboxChange }) => {
  const onChanged = () => { //Easiest way to send state to dispatch
    toggleCheckboxChange(isChecked)
  }

  return (
    <label className="checkbox-inline">
        <input
              type="checkbox"
              value={label}
              checked={isChecked}
              onChange={onChanged}
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