import Taskcard from "../taskcard/TaskCard";
import "./taskColumn.css";


const TaskColumn = ({ title, task, status,icon }) => {
    return (
        <>
            <section className='task_column'>
                <h2 className="task_column_heading">
                    <img src={icon} alt="" className="task_column_icon" />
                    {title}</h2>
                {
                    task.map((task, index) => task.status === status &&
                        <Taskcard title={task.task} tags={task.tags} key={index} />)
                }
            </section>
        </>
    )
}
export default TaskColumn;