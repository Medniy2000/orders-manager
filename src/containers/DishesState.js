import { connect } from 'react-redux'
import DishSelector from '../components/DishSelector.jsx'

const mapStateToProps = state => {
    return {
        dishes: state.dishes
    }
}

export default connect(
    mapStateToProps,
    null
)(DishSelector)