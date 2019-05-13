import { Dispatch } from 'redux'

import { IServices } from '../services'

export interface ILogin {
    email: string
    password: string
}

export default function reducer(state={}) {
    return state
}

export const login = ({ email, password }: ILogin) => 
    
    async (dispatch: Dispatch, getState: ()=> any, { auth }: IServices) => {
        // tslint:disable-next-line: no-console
        console.log(email)
        // tslint:disable-next-line: no-console
        console.log(password)
        await auth.signInWithEmailAndPassword(email, password)

    }