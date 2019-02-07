import * as types from  './actionTypes'

export function createCourse(course) {
    //can omit : course
    return { type : types.CREATE_COURSE, course};
}