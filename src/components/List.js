import React, { Component } from 'react'
import PropTypes from 'prop-types'

class List extends Component {
    render() {
        return (
            <div>
                <h2>List</h2>
                <ul>
                    {this.props.todos.map((todo, i) => <li key={todo.id}>{todo.title} : {todo.detail}<button onClick={() => this.props.handleTodoDelete(todo.id)}>削除</button></li>)}
                </ul>
            </div>
        )
    }
}

List.propTypes = {
    delete: PropTypes.func
}

export default List