import React, { useState } from "react";

const UserForm = (props) => {

    const initialStateValues = {
        github: '',
        facebook: '',
        firtsName: '',
        middleName: '',
        lastName: '',
        middleLastName: '',
        description: '',
    };
    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addOrEditForm(values);
        setValues({...initialStateValues})
    }

    return (
        <form className="card card-body" onSubmit={handleSubmit}>

            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i class="material-icons">insert_link</i>
                </div>
                <input 
                    type="text" 
                    className="form-control" 
                    name="github" 
                    placeholder="enter your profile url in github"
                    onChange={handleInputChange} 
                    value={values.github} />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i class="material-icons">insert_link</i>
                </div>
                <input 
                    type="text" 
                    className="form-control" 
                    name="facebook" 
                    placeholder="enter your profile url in facebook"
                    onChange={handleInputChange}
                    value={values.facebook} />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i class="material-icons">create</i>
                </div>
                <input 
                    type="text" 
                    className="form-control" 
                    name="firtsName"
                    placeholder="firts name"
                    onChange={handleInputChange}
                    value={values.firtsName} />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i class="material-icons">create</i>
                </div>
                <input 
                    type="text" 
                    className="form-control" 
                    name="middleName"
                    placeholder="middle name"
                    onChange={handleInputChange}
                    value={values.middleName} />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i class="material-icons">create</i>
                </div>
                <input 
                    type="text" 
                    className="form-control" 
                    name="lastName"
                    placeholder="last name"
                    onChange={handleInputChange}
                    value={values.lastName} />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i class="material-icons">create</i>
                </div>
                <input 
                    type="text" 
                    className="form-control" 
                    name="middleLastName"
                    placeholder="middle last name"
                    onChange={handleInputChange}
                    value={values.middleLastName} />
            </div>

            <div className="form-group">
                <textarea 
                    name="description" 
                    rows="3" 
                    className="form-control"
                    placeholder="what are your interests"
                    onChange={handleInputChange}
                    value={values.description} >
                </textarea>
            </div>

            <button className="btn btn-primary btn-block">
                Save
            </button>
        </form>
    )
};

export default UserForm;