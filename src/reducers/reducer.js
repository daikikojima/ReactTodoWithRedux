const initialState = {
    todos: [],
    count: 0,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return {
                todos: state.todos.concat({id: state.count++,...action.val}),
                count: state.count
            }
        case 'DELETE_TODO':
            return {
                todos: [...state.todos.filter(item => item.id !== action.val)],
                count: state.count
            }
        default:
            return state
    }
}

export default reducer