import React, { Component } from 'react'
import PropTypes from 'prop-types'

class List extends Component {
    constructor(props) {
        super(props)
        this.deleteItem = this.deleteItem.bind(this)
    }

    deleteItem(id) {
        this.props.delete(id)
    }

    render() {
        return (
            <div>
                <h2>List</h2>
                <ul>
                    {this.props.props.todos.map((todo, i) => <li key={i}>{todo.title} : {todo.detail}<button onClick={() => this.deleteItem(i)}>削除</button></li>)}
                </ul>
            </div>
        )
    }
}

List.propTypes = {
    delete: PropTypes.func
}

export default List