import React from 'react'
import { connect } from 'react-redux'
import { addRegatta, goHome } from '../actions/index'

let RegattaDetail = ({ dispatch }) => {

  let name, town, country

  const saveRegatta = (e) => {
    e.preventDefault()
    if (!name.value.trim()) {
      alert('Please enter name.')
      return
    }
    dispatch(addRegatta(name.value,town.value,country.value ))
  }

  const navigateToHome = () => {
    dispatch(goHome())
  }

  return (
    <div>
      <form onSubmit={saveRegatta}>
        <label className='form-label'>Name:</label>
        <input className='form-control' ref={node => {
          name = node
        }} /><br />
        <label className='form-label'>Country:</label>
        <input className='form-control' ref={node => {
          town = node
        }} /><br />
        <label className='form-label'>Country:</label>
        <select className='form-control' ref={node => {
          country = node
        }}> <option>Croatia</option><option>Italy</option><option>France</option>
        </select>
        <button type="submit" className='btn btn-lg default-back'>Save</button>
        <button type="cancel" onClick={navigateToHome} className='btn btn-lg default-back'>Cancel</button>
      </form>
    </div>
  )
}
RegattaDetail = connect()(RegattaDetail)

export default RegattaDetail
