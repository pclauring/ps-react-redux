import * as types from  './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function createCourse(course) {
    //can omit : course
    return { type : types.CREATE_COURSE, course};
}

export function loadCoursesSuccess(courses) {
    //can omit : course
    return { type : types.LOAD_COURSES_SUCCESS, courses};
}

export function updateCourseSuccess(course) {
    //can omit : course
    return { type : types.UPDATE_COURSE_SUCCESS, course};
}

export function createCourseSuccess(course) {
    //can omit : course
    return { type : types.CREATE_COURSE_SUCCESS, course : course};
}

export function loadCourses(){
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

export function saveCourse(course){
    //getState part of redux allows you to access redux store without having to pass it
    return function(dispatch, getState){
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) :
            dispatch(createCourseSuccess(savedCourse));
        }).catch(error =>{
            dispatch(ajaxCallError(error));
            throw(error);
         });
    };
}