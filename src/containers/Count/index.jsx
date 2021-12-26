import CountUI from '../../components/Count/index'

import {connect} from 'react-redux'
import {createIncrementAction,
        createDecrementAction,
        } from '../../redux/count_action'


function mapStateToProps(state) {
    return {he:state}
}

function mapDispatchToProps(dispatch) {
    return {
        jia:(number)=>dispatch(createIncrementAction(number)),
        jian:(number)=>dispatch(createDecrementAction(number)),
        
    } 
}

const CountContainer = connect(mapStateToProps,mapDispatchToProps)(CountUI)
export default CountContainer