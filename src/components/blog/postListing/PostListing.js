import Tag from "../tag/Tag";
import "../../../sass/components/postListing/PostListing.scss";

const Post = () => {
    return (
        <div className="PostListing">
            <div className="PostListing__header">
                <h3 className="PostListing__title">Blog Title</h3>
                <div className="PostListing__details">
                    <p className="PostListing__author">Author</p>
                    <span>&#183;</span>
                    <p className="PostListing__publishDate">Publish date</p>
                </div>
            </div>

            <p className="PostListing__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua.
            </p>

            <div className="PostListing__tagContainer">
                <Tag label="Example" />                
            </div>
        </div>
    );
};

export default Post;