import {LOGOUT, LOGIN} from './voter.types'
const initialState = {
    voter: null
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case LOGIN : return{
            ...state,
            voter: action.payload

        }
        case LOGOUT : return{
            ...state,
            voter: null
        }

        default: return  state;
    }
}

export default reducer;