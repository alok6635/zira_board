import "./app.css";
import TaskForm from './components/taskform/TaskForm';
import TaskColumn from './components/taskColumn/TaskColumn';
import checkBoxIcon from "./assets/img/checkbox.png";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  //  console.log(tasks);

  return (
    <div className='app'>
      <h1 className="highlight">Jira board</h1>
      
{/* showing input & select in this section */}
      <TaskForm setTasks={setTasks}/>

{/* showing the card in this section */}
      <main className='app_main'>
        <TaskColumn title="Ready for Development" tasks={tasks} status="Ready for Development" />
        <TaskColumn title="In Progress" tasks={tasks} status="In Progress" />
        <TaskColumn title="Ready for Test" tasks={tasks} status="Ready for Test" />
        <TaskColumn title="Closed" icon={checkBoxIcon} tasks={tasks} status="Closed" />
      </main>
    </div>
  )
}
export default App;