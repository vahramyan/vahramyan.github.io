import React, { useState } from 'react';
import Task from './Task';

function TaskList() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Write a new Component', completed: false },
        { id: 3, text: 'Write a new', completed: false }
    ]);

    const completeTask = taskId => {
        const newTasks = tasks.map(task => {
            if (task.id === taskId) {

                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(newTasks);

    };
    console.log(tasks)

    return (
        <div>
            {tasks.map(task => (
                <Task
                    key={task.id}
                    description={task.text}
                    onComplete={() => completeTask(task.id)  }
                    completed = {task.completed}

                  
                />
            ))}
        </div>
    );
}
export default TaskList;
