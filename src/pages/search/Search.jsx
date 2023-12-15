import SearchList from "./SearchList";
import SearchPopup from "./SearchPopup";
import search from "./search.module.css";

const Search = () => {
  return (
    <div className={search.display}>
      <SearchPopup />
      <SearchList />
    </div>
  );
};

export default Search;
