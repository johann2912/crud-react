import React, {useEffect, useState} from "react";
import UserForm from "./UserForm";

import { db } from "../firebase";
import {collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc, getDocs} from "firebase/firestore";

const User = () => {

    const [forms, setForms] = useState([]);

    const addOrEditForm = async (formObject) => {
       await addDoc(collection(db, 'users'), formObject);
       console.log('una ueva tarea se ha agregado')
    }

    const getForms = async () => {
        await onSnapshot(collection(db, "users"), querySnapshot => {
            const forms = []
            querySnapshot.forEach((doc) => {
                forms.push({...doc.data(), id: doc.id});
            })
            setForms(forms);
        });
    };

    useEffect(() => {
        console.log('SOY EL USEEFFECT EJECUTANDOSE')
        getForms();
    }, []);

    return <div>
            <div className="col-md-12 p-2">
                <UserForm addOrEditForm={addOrEditForm} />
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
                                    <i class="material-icons">undo</i>
                                </a>

                                <i class="material-icons text-danger">close</i>
                            </div>
                            <br />
                            <a 
                                href={userForm.facebook} 
                                target="_blank"
                                rel="noopener noreferrer" >
                                    Go to profile Facebook
                                <i class="material-icons">undo</i>
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