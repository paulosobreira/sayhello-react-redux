export default function sayGoodByeRedux(state={ listaBye:[]},action){
    if(action.type === 'SAY_GOOD_BYE'){
        action.value.numero = state.listaBye.length * 100;  
        let newState = { ...state,
            listaBye : [...state.listaBye,action.value]
        }
        return newState
    }
    return state;
}