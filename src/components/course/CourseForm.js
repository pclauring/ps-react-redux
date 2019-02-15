import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput
            name="title"
            label="Title"
            value={course.title}
            onChange={onChange}
            errors={errors.title}
             />

            <SelectInput
            name="authorId"
            label="Author"
            value={course.authorId}
            defaultOption="Select author"
            options={allAuthors}
            onChange={onChange}
            errors={errors.authorId}
             />

            <input
            type="submit"
            disabled={saving}
            value={saving ? 'Saving...': 'Save'}
            className="btn btn-primary"
            onClick={onSave} />
        </form>
    );
};

CourseForm.propTypes = {
    course: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default CourseForm;