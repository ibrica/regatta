import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const getRegattas = (regattas, filter) => {
      return regattas.filter(r => filter.includes(r.country))
}

let RegattasList = ({ regattas }) => (
  <ul>
    {regattas.map(r => (
      <li key={r.id}> <strong>{r.name}</strong> {r.town} {r.country} </li>
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
    regattas: getRegattas(state.regattas, state.filter)
  }
}


RegattasList = connect(
  mapStateToProps
)(RegattasList)

export default RegattasList