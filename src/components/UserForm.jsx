import React from "react";

const UserForm = () => {
    return (
        <form className="card card-body">
            <div className="form-gorup input-group">
                <div className="input-group-text">
                    <i class="material-icons">insert_link</i>
                </div>
                <input 
                    type="text" 
                    className="form-control" />
            </div>
        </form>
    )
};

export default UserForm;