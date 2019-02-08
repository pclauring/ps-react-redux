//default parameters = [] ES6
import * as types from '../actions/actionTypes';
export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_COURSE:
            //spread operator defines new state with all values inline new instance of state object.assign creates deep copy of course 
            return [...state,
            Object.assign({}, action.course)
            ];
        case types.LOAD_COURSES_SUCCESS:
            //spread operator defines new state with all values inline new instance of state object.assign creates deep copy of course 
            return action.courses;
        default:
            return state;
    }

}