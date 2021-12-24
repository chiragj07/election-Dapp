import {LOGIN,LOGOUT} from './voter.types'

export const login = (voter)=>{
          return {
              payload: voter,
              type: LOGIN
          }  
          
}

export const logout = () =>{
        return {
            type: LOGOUT
        }
}