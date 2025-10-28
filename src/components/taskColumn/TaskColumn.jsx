import TaskCard from "../taskCard/TaskCard";
import "./taskColumn.css";

const TaskColumn = ({ title, tasks, status, icon }) => {
    console.log(title);
    
    return (
    <div>
        <section className='task_column'>
            <h2 className="task_column_heading">
                <img src={icon} alt="" className="task_column_icon"></img>
                {title}
            </h2>
            {
                tasks.map((task, index) => task.status === status && (
                    <TaskCard key={index} title={task.title} tags={task.tags} />
                )) 
            }
        </section>
    </div>
)
}
export default TaskColumn;