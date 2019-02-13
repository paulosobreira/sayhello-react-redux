export default function sayHelloRedux(state={ listaHello:[]},action){
    if(action.type === 'SAY_HELLO'){
        action.value.numero = state.listaHello.length;  
        let newState = { ...state,
            listaHello : [...state.listaHello,action.value]
        }
        return newState
    }
    return state;
}