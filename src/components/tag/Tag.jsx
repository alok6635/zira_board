import "./tag.css";

const Tag = (props) => {
    const { tagName, selectedTag, selected } = props;

    const tagStyle = {
        DEV: { backgroundColor: "#F54927" },
        QA: { backgroundColor: "#27F579" },
        PO: { backgroundColor: "#F527EE" },
    }
   const tagKeyMap={
    DEV :"DEV",
    QA:"QA",
    "Product Owner":"PO"
   }
   const key = tagKeyMap[tagName]

    return (
        <button type="button" className='tag' onClick={() => selectedTag(tagName)} style={selected ? tagStyle[key] : {}}>{tagName}</button>
    )
}
export default Tag;