import React, {useEffect, useState} from "react";
import UserForm from "./UserForm";

import { toast } from 'react-toastify';
import { db } from "../firebase";
import {collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc, getDoc} from "firebase/firestore";

const User = () => {

    const [forms, setForms] = useState([]);
    const [currentId, setCurrentId] = useState('');

    const addOrEditForm = async (formObject) => {
        try {          
            if(currentId === ''){
                await addDoc(collection(db, 'users'), formObject);
                toast('New form add', {
                     type: 'success'
                });
            } else {
                const ref = doc(db, 'users', currentId);
                await updateDoc(ref, formObject);
                toast('Form updated successfully', {
                    type: 'success',
               });
               setCurrentId('')
            }
        } catch (error) {
            console.error(error)
        }
    }

    const onDeleteForm = (id) => {
        if(window.confirm('are you sure you want to delete this form?')){
            deleteDoc(doc(db, 'users', id));
            toast('Form removed successfully', {
                type: 'error',
                autoClose: 2000,
           });
            return true
        }
        return false
    }

    const getForms = async () => {
        await onSnapshot(collection(db, "users"), querySnapshot => {
            const forms = []
            querySnapshot.forEach((doc) => {
                forms.push({...doc.data(), id: doc.id});
            })
            setForms(forms);
        })
    }

    useEffect(() => {
        console.log('SOY EL USEEFFECT EJECUTANDOSE')
        getForms();
    }, []);

    return <div>
            <div className="col-md-12 p-2">
                {/* <UserForm addOrEditForm={addOrEditForm} /> */}
                <UserForm {...{addOrEditForm, currentId, forms}} />
            </div>

            <div className="col-md-12 p-2">
                {forms.map(userForm => (
                    <div className="card mb-1" key={userForm.id}>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <a 
                                    href={userForm.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer" >
                                        Go to profile GitHub
                                    <i 
                                        className="material-icons" >undo</i>
                                </a>

                                <div>
                                    <i className="material-icons text-warning" 
                                        onClick={() => setCurrentId(userForm.id)} 
                                    >create</i>

                                    <i className="material-icons text-danger" 
                                        onClick={() => onDeleteForm(userForm.id)} 
                                    >close</i>
                                </div>

                            </div>
                            <br />
                            <a 
                                href={userForm.facebook} 
                                target="_blank"
                                rel="noopener noreferrer" >
                                    Go to profile Facebook
                                <i 
                                    className="material-icons">undo</i>
                            </a>
                            <h4>{userForm.firtsName}</h4>
                            <h4>{userForm.middleName}</h4>
                            <h4>{userForm.lastName}</h4>
                            <h4>{userForm.middleLastName}</h4>
                            <h4>{userForm.description}</h4>
                        </div>
                    </div>
                ))}
            </div>
    </div> 
    
};

export default User;