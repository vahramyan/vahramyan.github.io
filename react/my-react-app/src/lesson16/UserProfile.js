import React from "react";

function UserProfile({ user, onEdit }) {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button onClick={onEdit}>Edit</button>
        </div>
    );
}
export default UserProfile