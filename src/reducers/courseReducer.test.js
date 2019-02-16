import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
    it('should add course when passed CREATE_COURSE_SUCCESS', () => {
        //arrange
        const initialState = [
            {title: 'pierce'}, 
            {title: 'leslie'}
        ];

        const newCourse = {title: 'babs'};

        const action = actions.createCourseSuccess(newCourse);
        
        //act 
        const newState = courseReducer(initialState, action);

        //assert
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('pierce');
    });
});