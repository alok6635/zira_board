import "./app.css";
import TaskForm from './components/taskform/TaskForm';
import TaskColumn from './components/taskColumn/TaskColumn';
import closedIcon from './assets/img/closed.png';

const App = () => {
  return (
    <div className='app'>
      <h1 className="highlight">Jira board</h1>
{/* showing input & select in this section */}
      <TaskForm />
{/* showing the card in this section */}
      <main className='app_main'>
        <TaskColumn title="Ready for Development"/>
        <TaskColumn title="In Progress"/>
        <TaskColumn title="Ready for Test" />
        <TaskColumn title="Closed" icon ={closedIcon}/>
      </main>
    </div>
  )
}
export default App;