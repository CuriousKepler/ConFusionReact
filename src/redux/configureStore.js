import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";

// reducer and initialState are used to configure our store
// and are passed as arguments to the createStore function.

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );
    
    return store;
}
