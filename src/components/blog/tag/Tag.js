import "../../../sass/components/tag/Tag.scss";

const Tag = ({ label }) => {
    const handleTagClick = (e) => {
        e.preventDefault(); 
        // TODO: handle tag click logic
    };

    return (
        <button className="Tag" onClick={handleTagClick}>
            {label}
        </button>
    );
};

export default Tag;