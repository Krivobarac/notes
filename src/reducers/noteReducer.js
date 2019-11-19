import uuid from 'uuid/v1'

export const noteReducer = (state, action) => {
    let index
    switch(action.type) {
        case 'ADD_NOTE':
            const date = new Date()
            return [...state, {
                id: uuid(),
                title: action.note.title,
                body: action.note.body,
                date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
                author: action.note.author,
                status: 'Uncomplete'
            }]
        case 'UPDATE_NOTE':
            index = state.findIndex(note => note.id === action.note.id)
            state[index] = action.note
            return [...state]
        case 'DELETE_NOTE':
            return state.filter(note => note.id !== action.id)
        case 'COMPLETE_NOTE':
            index = state.findIndex(note => note.id === action.note.id)
            state[index] = action.note
            return [...state]
        case 'CLEAR_ALL':
            return state.filter(note => !note.id)
        case 'SORT':
             action.notes.sort(function(a, b){
                var x = a.date.toLowerCase();
                var y = b.date.toLowerCase();
                if (x > y) {return -1;}
                if (x < y) {return 1;}
                return 0;
              });
              return [...action.notes]
        default:
            return state
    }
}