import React from "react";
import UserForm from "./UserForm";

import { db } from "../firebase";
import {collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc} from "firebase/firestore";

const User = () => {

    const addOrEditForm =  async (formObject) => {
       await addDoc(collection(db, 'users'), formObject);
       console.log('una ueva tarea se ha agregado')
    }

    return <div>
            <UserForm addOrEditForm={addOrEditForm} />
            <h1>Form</h1>
    </div> 
    
};

export default User;