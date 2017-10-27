
import React from 'react'
import { addRegatta, goHome } from '../actions/index'
import CheckBox from '../containers/CheckBox'
//import PropTypes from 'prop-types'

const Navbar = (props) => {
let store = {}
  const navigateToHome = () => {
    store.dispatch(goHome())
  }

  const navigateToAdd = () => {
    store.dispatch(addRegatta())
  }

  return (
    <div>
        <nav className="navbar navbar-default default-back">
        <div className="container">

            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Navigation bar</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="nav navbar-nav navbar-left">
                <li><button onClick={navigateToHome}>Home</button></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><button onClick={navigateToAdd}>Add</button></li>
            </ul>

            </div>
        </div>
        <p>
            <CheckBox label="All" />
            <CheckBox label="Croatia" />
            <CheckBox label="Italy" />
            <CheckBox label="France" />
        </p>
        </nav>
    </div>
  )
}



export default Navbar