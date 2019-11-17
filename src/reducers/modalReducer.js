export const modalReducer = (state, action) => {
    switch(action.type) {
        case 'TURN_ON':
            return 'shown.bs.modal fade show'
        case 'TURN_OF':
            return 'modal fade'
        default:
            return state
    }
}