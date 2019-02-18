import {getSession, deleteSession, setSession} from './SessionHelper.js'


export function authorizedUser(){
    return getSession('currentUser')
}

export function isAuthenticated(){
    return getSession('currentUser') !== ''
}

export function refreshUser(){
    let user =  authorizedUser()
    if (user){
        setSession('currentUser', user, {expires: 60 * 15})
    }
}

export function logout() {
    deleteSession('currentUser')
}


