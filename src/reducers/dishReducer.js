import prepared_dishes from '../prepared_data/dishes.json'

const INITIAL_STATE = localStorage.getItem('app_data') ? JSON.parse(localStorage.getItem('app_data')).dishes : prepared_dishes

export default function dishes_reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state
    }
}