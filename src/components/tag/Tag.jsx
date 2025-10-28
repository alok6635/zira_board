import { tagKeyMap, tagStyle } from "../constants/Common";
import "./tag.css";

const Tag = (props) => {
    const { tagName, selectedTag, selected } = props;

    const key = tagKeyMap[tagName];
    return (
        <>
            <button type="button" className='tag' style={selected ? tagStyle[key] : {}}
                onClick={() => selectedTag(tagName)}>{tagName}</button>
        </>
    )
}
export default Tag;