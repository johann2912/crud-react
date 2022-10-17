import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, getDoc} from "firebase/firestore";

const UserForm = (props) => {

    const [values, setValues] = useState({
        github: '',
        facebook: '',
        firtsName: '',
        middleName: '',
        lastName: '',
        middleLastName: '',
        description: '',
    });

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addOrEditForm(values);
        setValues({
            github: '',
            facebook: '',
            firtsName: '',
            middleName: '',
            lastName: '',
            middleLastName: '',
            description: '',
        })
    }

    const getFormById = async (id) => {
        const form = await getDoc(doc(db, 'users', id));
        setValues({...form.data()})
    };

    useEffect(() => {
        if(props.currentId === '') {
            setValues({
                github: '',
                facebook: '',
                firtsName: '',
                middleName: '',
                lastName: '',
                middleLastName: '',
                description: '',
            })
        } else {
            console.log('EDITANDO')
            getFormById(props.currentId);
        }
    }, [props.currentId])

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
                {props.currentId === '' ? 'Save' : 'Update'}
            </button>
        </form>
    )
};

export default UserForm;