import React, { useState } from 'react';
import  PanelController from '../Controllers/PanelController';
import  TaskController from '../Controllers/TaskController';
import Task from './taskComponent';
import './panel.css';

function Panel() {

    const [panel] = useState(new PanelController().get());
    const [task] = useState(new TaskController());

	const onDragOver = (event) => {
	    event.preventDefault();
	}

	const onDrop = (event) => {
        if (event.target.id.indexOf("T") === -1 && event.target.id !== ''){
            let taskDrag = event.dataTransfer.getData("task");

            let myTask = task.getById(taskDrag.substring(1));
            console.log("MYTASK " + JSON.stringify(myTask));

            myTask.state = parseInt(event.target.id);

            task.delById(myTask.id);
            
            task.add(myTask);
            
            event.target.appendChild(document.getElementById(taskDrag));
        }


	}

     return (
      <div className="row">
            {
                panel.map(item => {
                    let itemTask = task.getByState(item.id);
                    let key = "P"+item.id;
                    return(
                        <div key={key} className="col-lg-3 col-md-6 col-12">
                            <h3 style={{color: item.color, textAlign: 'center'}}>{item.panel}</h3>
                            <div id={item.id}
                                className="container-drop"
                                style={{backgroundColor: item.color}}
	    		                onDragOver={(event)=>onDragOver(event)}
      			                onDrop={(event)=>{onDrop(event)}}>
                                {
                                  itemTask!==undefined&&itemTask.map((t)=> {
                                        var key = t.state+"T"+t.id; 
                                        return <Task key={key} data={t}/>
                                    })
                                   
                                }
                            </div>
                        </div>
                    )
                })
            }
      </div>
    );
  }

  
  export default Panel;