import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CourseForm from './CourseForm';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: Object.assign({}, this.props.course),
            erros: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.course.id != nextProps.course.id){
            this.setState({ course: Object.assign({}, nextProps.course)});
        }
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({course: course});
    }

    saveCourse(event) {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        this.context.router.push('/courses');
    }

    render() {
        return (
            <div>
                <CourseForm
                    allAuthors={this.props.authors}
                    course={this.state.course}
                    errors={this.state.errors}
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse}
                />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

//Pull in react router context static type router is available in this.context.router
//context is a global variable that library authors use
ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function getCourseById(courses, id){
    const course = courses.filter(course => course.id == id);
    if (course) return course[0];
    return null;
}

//reference to components props ie. ownProps
function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id; //from path `/course/:id`

    let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
    
    if(courseId && state.courses.length > 0){
        course = getCourseById(state.courses, courseId);
    }
    const authorsFormattedForDropdown = state.authors.map(author =>
        {
            return {
                value: author.id,
                text: author.firstName + ' ' + author.lastName
            };
        });

    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

//no mapDispatchToProps function dispatch function is injected by connect
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);