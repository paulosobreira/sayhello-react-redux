export default function sayHelloRedux(state={ listaHello:[]},action){
    if(action.type === 'SAY_HELLO'){
        action.value.numero = state.listaHello.length;  
        let newState = { ...state,
            listaHello : [...state.listaHello,action.value]
        }
        return newState
    }

    if(action.type === 'SAY_HELLO_PROMISE_FULFILLED'){
        action.payload.numero = state.listaHello.length+1;  
        let newState = { ...state,
            listaHello : [...state.listaHello,action.payload]
        }
        return newState
    }

    return state;
}