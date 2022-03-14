//reducer function is a pure function.

//reducers are used to manage state of the application.

// given the same input (e.g. state and action), 
//the expected output (e.g. newState) will always be the 
//same. This makes reducer functions the perfect fit for 
//reasoning about state changes and testing them in 
//isolation. You can repeat the same test with the same 
//input as arguments and always expect the same output.

import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';

//initial state/props.(from MainComponent)
export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

//to generate a new state we need a state and an action.
// the state is initialState so that when the store calls
// for the reducer function, it does not return "undefined".
export const Reducer = (state = initialState, action) => {
    return state;
};