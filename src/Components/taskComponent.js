import React  from 'react';
import TaskController from '../Controllers/TaskController';
import './task.css';

function Task(props) {
    var tarea = props.data;
    var tid = "T"+tarea.id; 

    const onDragStart = (event) => {
    	event.dataTransfer.setData("task", event.target.id);
	  }

    const deleteTask = (e) =>{
      console.log("DELETE TASK " + tarea.id);
      let tc = new TaskController();
      tc.delById(tarea.id);
      window.location.reload();
    }
  

    return (
      <div  id={tid} className="card"
      		onDragStart = {(event) => onDragStart(event)}
		    draggable
      >   
        <div class="d-flex w-100">      
          <p className="pl-2">{tarea.task}</p>
          <button type="button" 
             onClick={deleteTask}
            className="close align-self-baseline ml-auto">
              <span aria-hidden="true">&times;</span>
          </button>

        </div>
      </div>
    );
  }



  
  export default Task;