import React, { useState } from 'react';
import  TaskController from '../Controllers/TaskController';
import Task from './taskComponent';

    function ManagerTask() {
    const [task] = useState(new TaskController());
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log("SUBMIT");
        let id = task.lastId();

        let newTask =  {"id": parseInt(id)+1, "task": text, "state": 0};

        task.add(newTask);
        //window.location.reload();
    }

    return (
        <div className="row">
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Task description</label>
                    <input type="text"  onChange={handleChange} class="form-control" id="task" />
                </div>
                <button type="submit" class="btn btn-info">Submit</button>
            </form>
        </div>
    )
}

  
export default ManagerTask;