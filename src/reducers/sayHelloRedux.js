export default function sayHelloRedux(state={ listaHello:[]},action){
    console.log(state);
    if(action.type === 'SAY_HELLO'){
        action.value.numero = state.listaHello.length;  
        let newState = { ...state,
            listaHello : [...state.listaHello,action.value]
        }
        return newState
    }
    return state;
}