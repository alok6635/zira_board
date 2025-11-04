import { useState } from "react";
import Tag from "../tag/Tag";
import "./taskform.css";

const TaskForm = () => {
    const [taskData, setTaskData] = useState([{
        task: '',
        status: 'Ready for Development',
        tags: []
    }]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prev) => {
            return { ...prev, [name]: value };
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(taskData)
    }

    const selectedTag = (tag) => {
        console.log("tag data heee...",taskData.tags)
        // if (taskData.tags.some((item) => item === tag)) {
        //     const filterTags = taskData.tags.filter((item) => item !== tag);
        //     settaskData(prev => {
        //         return { ...prev, tags: filterTags }
        //     })
        // }
        // else {
        //     settaskData(prev => {
        //         return { ...prev, tags: [...prev.tag, tag] }
        //     })
        // }
        // console.log(tag)
    }

    return (
        <header className='app_header'>
            <form onSubmit={handleSubmit}>
                <input type='text' name="task" className='task_input' placeholder='Enter task-details' onChange={handleChange} />
                <div className='task_form_bottom'>
                    <Tag tagName="DEV" selectedTag={selectedTag} />
                    <Tag tagName="QA" selectedTag={selectedTag} />
                    <Tag tagName="Product Owner" selectedTag={selectedTag} />
                    <select className="task_status" name="status" onChange={handleChange}>
                        <option value="Ready for Development">Ready for Development</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Ready for Test">Ready for Test</option>
                        <option value="Closed">Closed</option>
                    </select>
                    <button className='task_submit' type='submit'>+Add</button>
                </div>
            </form>
        </header>
    )
}
export default TaskForm;