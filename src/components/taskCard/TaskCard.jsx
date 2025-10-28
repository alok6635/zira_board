import Tag from "../tag/Tag";
import "./taskCard.css";
import IconDel from "../../assets/img/delete.png";

const TaskCard = ({ title, tags }) => {
    return (
        <article className='task_card'>
            <p className="task_text">{title}</p>
            <div className='task_card_bottom_line'>
                <div className='task_card_tags'>
                    {
                        tags.map((tag, index) => (
                            <Tag key={index} tagName={tag} />
                        ))
                    }
                    <div className='task_delete'>
                        <img src={IconDel} alt="" className="delete_icon" />
                    </div>
                </div>
            </div>
        </article>
    )
}
export default TaskCard;