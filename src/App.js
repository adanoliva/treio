import './App.css';
import Panel from './Components/panelComponent';
import ManagerTask from './Components/managerTaskComponent';
import React, { useState } from 'react';

function App() {

  const [viewTask, setViewTask] = useState(true);


  const clearLocalTask = (e) =>{
    window.localStorage.clear();
    window.location.reload();
  }

  const taskManager = (e) =>{
    setViewTask(!viewTask);
  }

  return (
    <div className="container">
      <h2 className="display-5">Tre.io Clone!</h2>
        {
          !viewTask &&<ManagerTask/>
        }

        <Panel/>
    
        


        <div className="mt-5 ">
          <button type="button" className="btn btn-primary ml-2"
          onClick={taskManager}>{viewTask?"Add":"View"} Tasks</button>
          <button type="button" className="btn btn-warning ml-2" 
            onClick={clearLocalTask}>RESET APP</button>
        </div>
        
        
    </div>
  );

}

export default App;
