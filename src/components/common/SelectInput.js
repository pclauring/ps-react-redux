import React, { PropTypes } from 'react';

const Selectinput = ({ name, label, onChange, defaultOption, value, error, options }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <select
                    name={name}
                    className="formControl"
                    value={value}
                    onChange={onChange}
                >
                <option value="">{defaultOption}</option>
                {options.map((option) => {
                    return <option key={option.value} value={option.value}>{option.text}</option>;
                })}
                </select>
               {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

Selectinput.propTypes ={
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
};

export default Selectinput;