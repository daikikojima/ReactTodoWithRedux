import React, { Component } from 'react'
import { 
    Badge,
    Button,
    ListGroup,
    ListGroupItem,
} from 'react-bootstrap'
import PropTypes from 'prop-types'

class List extends Component {
    render() {
        return (
            <div>
                <h2>List</h2>
                <ListGroup>
                    {this.props.todos.map((todo, i) => <ListGroupItem key={todo.id}>{todo.title} : {todo.detail}<Button bsStyle="danger" onClick={() => this.props.handleTodoDelete(todo.id)}>削除</Button></ListGroupItem>)}
                </ListGroup>
            </div>
        )
    }
}

List.propTypes = {
    delete: PropTypes.func
}

export default List