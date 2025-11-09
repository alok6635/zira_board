import "./app.css";
import TaskForm from './components/taskform/TaskForm';
import TaskColumn from './components/taskColumn/TaskColumn';
import closedIcon from './assets/img/closed.png';
import { useState } from "react";

const App = () => {
  const [task,setTasks]= useState([]);
  console.log(task);

  return (
    <div className='app'>
      <h1 className="highlight">Jira board</h1>
      {/* input & select */}
      <TaskForm setTasks={setTasks}/>
      {/* showing the card in this section */}
      <main className='app_main'>
        <TaskColumn title="Ready for Development" />
        <TaskColumn title="In Progress" />
        <TaskColumn title="Ready for Test" />
        <TaskColumn title="Closed" icon={closedIcon} />
      </main>
    </div>
  )
}
export default App;