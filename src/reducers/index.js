//root reducer index.js
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
    //ES6 shorthand property name
    courses,
    authors
});

export default rootReducer;