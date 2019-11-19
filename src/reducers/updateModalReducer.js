export const updateModalReducer = (state, action) => {
    switch(action.type) {
        case 'TURN_ON_UPDATE':
            return 'shown.bs.modal fade show'
        case 'TURN_OF_UPDATE':
            return 'modal fade'
        default:
            return state
    }
}