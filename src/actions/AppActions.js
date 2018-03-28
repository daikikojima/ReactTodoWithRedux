const Actions = {
    addTodo(val) {
        return {
            type: 'ADD_TODO',
            val
        }
    },
    deleteTodo(val) {
        return {
            type: 'DELETE_TODO',
            val
        }
    }
}

export default Actions