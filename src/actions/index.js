import uuidv4 from 'uuid/v4'
import {
    ADD_ORDER,  ADD_USER,
    DELETE_ORDER, UPDATE_ORDER
} from "../constants/ActionTypes"

export const createOrder = ({ client, dishes }) => ({
    type: ADD_ORDER,
    payload: {
        id: uuidv4(),
        created_at: new Date().toLocaleString('uk-UA'),
        client,
        dishes
    }
})

export const updateOrder = ({ id, client, dishes }) => ({
    type: UPDATE_ORDER,
    payload: {
        id,
        created_at: new Date().toLocaleString('uk-UA'),
        client,
        dishes
    }
})

export const deleteOrder = id => ({
    type: DELETE_ORDER,
    payload: {
        id
    }
})


export const createUser = ({ username, password }) => ({
    type: ADD_USER,
    payload: {
        id: uuidv4(),
        username,
        password
    }
})
