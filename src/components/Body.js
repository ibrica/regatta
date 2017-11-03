import React from 'react'
import RegattasList from '../containers/RegattasList'
import RegattaDetail from '../containers/RegattaDetail'
import * as CONSTANTS from '../constants'

const Body = ({show}) => {
    let content = (show===CONSTANTS.SHOW_DETAIL) ? 
        <RegattaDetail /> 
        :
         <RegattasList /> 

    return (
        <div className="bodyContainer">
            {content}
        </div>
    )
}

export default Body