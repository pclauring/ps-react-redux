import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';
//dependencies to test thunks
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

//test sync action 
describe('Course Actions',() => {
    describe('createCourseSuccess', () => {
        it('should create a CREATE_COURSE_SUCCESS', () => {
            //arrange
            const course = {id: 'singlePageApp', title: 'React'};
            const expectedAction = {
                type: types.CREATE_COURSE_SUCCESS,
                course: course 
            };
            //act
            const action = courseActions.createCourseSuccess(course);

            //assert
            expect(action).toEqual(expectedAction);
        });
    });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });
    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading', (done) => {
        //example nock
        // nock('http://test.com')
        //.get('/courses)
        //.reply(200, { body: courses: [{ id: 1, firstName: 'pierce', lastName: 'lauring' }] }}); 

        const expectActions = [
            {type: types.BEGIN_AJAX_CALL},
            {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 1, firstName: 'pierce', lastName: 'lauring' }]}}
        ];

        const store = mockStore({ courses: []}, expectActions);
        store.dispatch(courseActions.loadCourses()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
            done();
        });
    });
});