import React  from "react";
function Task({ description, onComplete,completed }) {
    return (
        <div className="task">
            <p className={completed ? 'completed' : ''}>{description}</p>
            <button onClick={onComplete}>Mark as Done</button>
        </div>
    );
}
export default Task;
