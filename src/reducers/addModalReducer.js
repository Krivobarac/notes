export const addModalReducer = (state, action) => {
    switch(action.type) {
        case 'TURN_ON_ADD':
            return 'shown.bs.modal fade show'
        case 'TURN_OF_ADD':
            return 'modal fade'
        default:
            return state
    }
}