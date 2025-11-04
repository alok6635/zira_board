import Taskcard from "../taskcard/TaskCard";
import "./taskColumn.css";  

const TaskColumn = (props) => {
    return (
        <>
            <section className='task_column'>
                <h2 className="task_column_heading">
                     <img src={props.icon} alt="" className="task_column_icon"/>
                    {props.title}</h2>
                    <Taskcard/>

            </section>
        </>


    )
}
export default TaskColumn;