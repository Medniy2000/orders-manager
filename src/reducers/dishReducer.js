import dishes from '../prepared_data/dishes.json';


export default function dishes_reducer(state = [], action) {
    switch (action.type) {
        default:
            state = JSON.parse(localStorage.getItem('dishes'));
            if (!state){
                localStorage.setItem('dishes', JSON.stringify(dishes));
                state = dishes
            }
            return state
    }
}