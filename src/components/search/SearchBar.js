import "../../sass/components/SearchBar.scss";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <input className="SearchBar__input" placeholder="Search" />
            <Search className="SearchBar__icon" />
        </div>
    );
};

export default SearchBar;