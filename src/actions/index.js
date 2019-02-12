import uuidv4 from 'uuid/v4'
import {
    ADD_ORDER,  ADD_USER,
    DELETE_ORDER, UPDATE_ORDER
} from "../constants/ActionTypes"

export const createOrder = ({ client, dishes }) => ({
    type: ADD_ORDER,
    payload: {
        id: 0,
        client,
        dishes
    }
})

export const updateOrder = ({ id, client, dishes }) => ({
    type: UPDATE_ORDER,
    payload: {
        id,
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
