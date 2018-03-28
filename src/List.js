import React, { Component } from 'react'

class List extends Component {
    render() {
        return (
            <div>
                <h2>List</h2>
                <ul>
                    {this.props.props.todos.map(todo => <li>{todo.title} : {todo.detail}</li>)}
                </ul>
            </div>
        )
    }
}

export default List