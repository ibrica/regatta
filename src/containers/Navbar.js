
import React from 'react'
import { connect } from 'react-redux'
import { goDetail, goHome } from '../actions/index'
import CheckBox from './CheckBox'
//import PropTypes from 'prop-types'

let Navbar = ({dispatch}) => {

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
                    <li><button onClick={ e => {
                                e.preventDefault()
                                dispatch(goHome())
                            }}>
                            Home
                        </button></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><button onClick={ e => {
                                e.preventDefault()
                                dispatch(goDetail())
                            }}>
                            Add
                        </button></li>
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

Navbar = connect()(Navbar)

export default Navbar