import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseForm from './CourseForm';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <h1>Manage Course</h1>
                <CourseForm coure={this.state.course}/>
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
};

function mapStateToProps(state, ownProps) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
   return {
    actions: bindActionCreators(courseActions, dispatch)
   };
}

//no mapDispatchToProps function dispatch function is injected by connect
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);