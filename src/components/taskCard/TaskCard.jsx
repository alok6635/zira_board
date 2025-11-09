import React from 'react';
import DelIcon from "../../assets/img/delete.png";
import "./taskcard.css";
import Tag from '../tag/Tag';

const Taskcard = ({ title, tags }) => {
   return (
      <article className='task_card'>
         <p className='task_text'>{title}</p>
         <div className='task_card_bottom_line'>
            <div className='card_data_tags'>
               {
                  tags.map((tag, index) => <Tag tagName={tag} key={index} selected={true} />)
               }
            </div>
            <div className='task_delete'>
               <img src={DelIcon} alt='' className='delete_icon' />
            </div>
         </div>
      </article>
   )
}
export default Taskcard;




