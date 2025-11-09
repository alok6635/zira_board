import { useState } from "react";
import Tag from "../tag/Tag";
import "./taskform.css";

const TaskForm = (setTasks)=>{
    const [taskData, setTaskData] = useState({
        task: '',
        status: 'Ready for Development',
        tags: []
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prev) => {
            return { ...prev, [name]: value };
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setTaskData((prev)=>{
            return [...prev,taskData]
        })
        setTaskData(taskData)
    }
    const checkTag = (tag) => {
        return taskData.tags.some((item) => item === tag)
    }
    // const selectedTag = (tag) => {
    //     console.log("tag data heee...", taskData.tags)
    //     if (taskData.tags.some((item) => item === tag)) {
    //         const filterTags = taskData.tags.filter((item) => item !== tag);
    //         setTaskData(prev => {
    //             return { ...prev, tags: filterTags }
    //         })
    //     }
    //     else {
    //         setTaskData(prev => {
    //             return { ...prev, tags: [...prev.tags, tag] }
    //         })
    //     }
    //     console.log(tag)
    // }

// optimize code for  selectedTag-
    
const selectedTag = (tag) => {
        setTaskData((prev) => {
            const isSelected = prev.tags.includes(tag);
            const tags = isSelected ? taskData.tags.filter((item) => item !== tag) : [...prev.tags, tag];
            return {...prev, tags}
        })
    }
    return (
        <header className='app_header'>
            <form onSubmit={handleSubmit}>
                <input type='text' name="task" className='task_input' placeholder='Enter task-details' onChange={handleChange}/>
                <div className='task_form_bottom'>
                    <Tag tagName="DEV" selectedTag={selectedTag} selected={checkTag("DEV")} />
                    <Tag tagName="QA" selectedTag={selectedTag} selected={checkTag("QA")} />
                    <Tag tagName="Product Owner" selectedTag={selectedTag} selected={checkTag("Product Owner")} />
                    <select className="task_status" name="status" onChange={handleChange}>
                        <option value="Ready for Development">Ready for Development</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Ready for Test">Ready for Test</option>
                        <option value="Closed">Closed</option>
                    </select>
                    <button className='task_submit' type='submit' onClick={handleSubmit}>+Add</button>
                </div>
            </form>
        </header>
    )
}
export default TaskForm;