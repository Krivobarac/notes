import uuid from 'uuid/v1'

export const noteReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_NOTE':
            console.log(action)
            return [...state, {
                id: uuid(),
                title: action.note.title,
                body: action.note.body,
                priority: action.note.priority,
                date: action.note.date,
                time: action.note.time,
                author: action.note.author
            }]
        case 'UPDATE_NOTE':
            return [...state, {
                id: uuid(),
                title: action.note.title,
                body: action.note.body,
                priority: action.note.priority,
                date: action.note.date,
                time: action.note.time,
                author: action.book.author
            }]
        case 'DELETE_NOTE':
            return state.filter(note => note.id
                 !== action.id)
        default:
            return state
    }
}