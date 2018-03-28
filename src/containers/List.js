import { connect } from 'react-redux'
import List from '../components/List'
import Actions from '../actions/AppActions'

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleTodoDelete(value){
            dispatch(Actions.deleteTodo(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)