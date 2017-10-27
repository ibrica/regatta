import RegattasList from './RegattasList'
import * as CONSTANTS from '../constants'

//Implement conditional rendering
let BodyContainer = ({ show }) => (
    <div className="bodyContainer">
    </div>
)

const mapStateToProps = state => {
    return {
        show:  state.show
    }
}

BodyContainer = connect(
    mapStateToProps
)(BodyContainer)

export default BodyContainer

