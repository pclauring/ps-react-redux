import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

//needs to be added to application entry point
export default function configureStore(intialState){
    return createStore(
        rootReducer,
        intialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    );
}