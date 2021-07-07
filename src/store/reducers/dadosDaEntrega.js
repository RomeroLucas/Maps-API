const INITIAL_STATE = false 

export default function dadosDaEntrega(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOAD_ENTREGA':
            
            return state = action.payload
    
        default:
            return state
    }
}