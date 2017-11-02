import { connect } from 'react-redux'
import Body from '../components/Body'


const mapStateToProps = state => {
    return {
        show: state.show
    }
}

const BodyContainer = connect(
    mapStateToProps
)(Body)

export default BodyContainer

