import {getCookie, deleteCookie} from './CookiesHelper.js';
import {setCookie} from "./CookiesHelper";


export function authorizedUser(){
    return getCookie('currentUser')
}

export function is_authenticated(){
    if (getCookie('currentUser') !== undefined){
        return true;
    }
    return false;
}

export function refreshUser(){
    let user =  authorizedUser();
    if (user){
        setCookie('currentUser', user, {expires: 60 * 15});
    }
}

export function logout() {
    deleteCookie('currentUser');
}


