import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const getRegattas = (regatta, filter) => {
      return regatta.filter(r => filter.includes(r.country))
}

let RegattasList = ({ regatta }) => (
  <ul>
    {regatta.map(r => (
      <li className="list-group-item" key={r.id}> <strong>{r.name}</strong> {r.town} {r.country} </li>
    ))}
  </ul>
)

RegattasList.propTypes = {
  regatta: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      town: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}

const mapStateToProps = state => {
  return {
    regatta: getRegattas(state.regatta, state.filter)
  }
}


RegattasList = connect(
  mapStateToProps
)(RegattasList)

export default RegattasList