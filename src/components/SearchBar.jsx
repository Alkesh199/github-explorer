import { useState } from "react";
import "../styles/searchBar.css";

const SearchBar = () => {
    const [searchText,setSearchText] = useState("");

    const handleSearchText = (e) =>{
       setSearchText(e.target.value);
    }

    const handleSearchBtnClick = ()=>{
        console.log("search btn click and search text is",searchText);
    }

    const clearBtnClick = () =>{
        console.log("clear btn clicked");
        setSearchText("");
    }
    console.log(searchText);

  return (
    <div className="searchbar-container">
      <input value = {searchText} onChange={handleSearchText} placeholder="search profiles globally"></input>
      <button className="btn btn-search" onClick={handleSearchBtnClick}>Search</button>
      <button className="btn clear-btn" onClick={clearBtnClick}>Reset</button>
    </div>
  );
};

export default SearchBar;
