import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return state;
        case "FETCH_SUCCESS":
            return { ...state, posts: action.payload };
        default:
            return state;
    }
}

export default createStore(
    reducer,
    applyMiddleware(ReduxThunk)
);