import SearchBar from "../../../components/search/SearchBar";
import PostListing from "../../../components/blog/postListing/PostListing";

const BlogHome = () => {
    return (
        <div className="BlogHome">
            <div className="BlogHome__about">
                <h1 className="BlogHome__heading">Development Blog</h1>
                <p className="BlogHome__heading-caption">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui 
                    iusto at repellendus laborum alias est a minima cumque facilis 
                    soluta.
                </p>
            </div>
            <div className="BlogHome__menu">
                <SearchBar />
            </div>
            <div className="BlogHome__posts-container">
                {[...Array(9)].map(() => (
                    <PostListing />
                ))}
            </div>
        </div>
    );
}

export default BlogHome;